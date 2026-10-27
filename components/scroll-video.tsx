"use client";

import { useEffect, useRef } from "react";

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

    videoRef.current?.setAttribute("muted", "");
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
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-static-fallback" style={poster ? { backgroundImage: `url(${poster})` } : undefined} />
    </section>
  );
}
