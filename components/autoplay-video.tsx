"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = { src: string; poster?: string; label?: string; className?: string };

/**
 * Muted, inline, looping background video that plays only while on screen.
 * iOS Low Power Mode and some Android data savers block autoplay, so we retry on the first touch or scroll.
 */
export default function AutoplayVideo({ src, poster, label, className }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    let visible = false;

    const tryPlay = () => { if (visible) video.play().catch(() => {}); };
    const retryOnGesture = () => tryPlay();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) tryPlay();
      else video.pause();
    }, { threshold: 0.15 });
    observer.observe(video);

    window.addEventListener("touchstart", retryOnGesture, { passive: true });
    window.addEventListener("scroll", retryOnGesture, { passive: true });
    video.addEventListener("playing", () => {
      window.removeEventListener("touchstart", retryOnGesture);
      window.removeEventListener("scroll", retryOnGesture);
    }, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", retryOnGesture);
      window.removeEventListener("scroll", retryOnGesture);
    };
  }, []);

  return (
    <video ref={ref} className={className} autoPlay muted loop playsInline preload="auto" poster={poster} aria-label={label} disablePictureInPicture disableRemotePlayback>
      <source src={src} type="video/mp4" />
    </video>
  );
}
