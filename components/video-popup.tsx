"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";
import AutoplayVideo from "@/components/autoplay-video";

type VideoPopupProps = { src: string; previewSrc?: string; poster?: string; label: string };

/** Muted looping preview (a short, light `previewSrc` if given); clicking it opens `src` in a popup with sound and controls. */
export default function VideoPopup({ src, previewSrc = src, poster, label }: VideoPopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const playerRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    const player = playerRef.current;
    if (!player) return;
    player.currentTime = 0;
    player.play().catch(() => {});
  };

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className="video-preview" onClick={open} aria-label={`Play video: ${label}`}>
        <AutoplayVideo src={previewSrc} poster={poster} label={label} />
        <span className="video-preview-play" aria-hidden="true"><Play size={28} fill="currentColor" /></span>
      </button>

      {/* Clicking the dark area outside the video closes the popup; Esc is handled by <dialog>. */}
      <dialog ref={dialogRef} className="video-dialog" aria-label={label} onClose={() => playerRef.current?.pause()} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <div className="video-dialog-body">
          <button type="button" className="video-dialog-close" onClick={close} aria-label="Close video"><X size={22} /></button>
          <video ref={playerRef} src={src} poster={poster} controls playsInline preload="metadata" />
        </div>
      </dialog>
    </>
  );
}
