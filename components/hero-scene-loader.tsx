"use client";

import dynamic from "next/dynamic";
const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <div className="scene-shell scene-placeholder" aria-hidden="true"><div className="placeholder-house"><span /></div></div>,
});
export default function HeroSceneLoader() { return <HeroScene />; }
