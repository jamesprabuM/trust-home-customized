"use client";

import { useEffect, useRef } from "react";

// Both are visually lossless 60fps encodes of public/videos/main.MP4.
const HERO_1080 = "/videos/hero-main.mp4";
const HERO_4K = "/videos/hero-main-4k.mp4";

export default function ScrollVideo({ poster }: { poster?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScale = () => {
      frame = 0;
      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video) return;

      const hero = section.closest(".video-hero");
      if (!(hero instanceof HTMLElement)) return;

      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
      const scale = 1.32 - progress * 0.32;
      video.style.transform = `scale(${scale})`;
      // iOS Low Power Mode blocks autoplay; any scroll or tap counts as a gesture we can retry on.
      if (video.paused && progress < 1) video.play().catch(() => {});
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScale);
    };

    const video = videoRef.current;
    if (video) {
      video.setAttribute("muted", "");
      // The hero is drawn up to 1.32x the screen, so pick 4K only where 1080p would be visibly upscaled.
      // Phones always get 1080p: the 4K file is too heavy for mobile data.
      const neededWidth = Math.max(window.innerWidth, window.innerHeight * (16 / 9)) * window.devicePixelRatio * 1.32;
      const isPhone = window.innerWidth <= 640;
      video.src = !isPhone && neededWidth > 2400 ? HERO_4K : HERO_1080;
    }
    updateScale();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("touchstart", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="video-hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="auto"
      />
      <div className="hero-static-fallback" style={poster ? { backgroundImage: `url(${poster})` } : undefined} />
    </section>
  );
}
