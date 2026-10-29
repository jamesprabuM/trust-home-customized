"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Paragraphs that get the scroll-linked word reveal: only inside a container marked `data-text-reveal` (currently the Programs page). */
const TARGETS = "[data-text-reveal] p, [data-text-reveal] li, [data-text-reveal] .lead-text";
/** Areas left alone: things already animated, interactive, or meant to be read instantly. */
const SKIP = ".video-hero, .site-header, .site-footer, .join-wrap, form, figcaption, .testimonial-track, .marquee, .video-dialog, .fine-print, .content-note, [aria-hidden='true']";

/**
 * Scroll-linked text reveal: each paragraph's words fade from dim to full as it scrolls up through the screen.
 * Splits static server-rendered paragraphs into word spans and drives one `--p` (0–1) per paragraph; the CSS ramps each word.
 * Text on screen at load, and everything for reduced-motion users, stays fully visible.
 */
export default function TextReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paragraphs = [...document.querySelectorAll<HTMLElement>(TARGETS)].filter(
      (el) => !el.closest(SKIP) && !el.dataset.reveal && el.textContent?.trim() && el.getBoundingClientRect().top > window.innerHeight,
    );
    paragraphs.forEach(splitIntoWords);

    const visible = new Set<HTMLElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      visible.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Starts as the top enters the lower 10% of the screen; done once the bottom passes 55% height.
        const progress = (viewport * 0.9 - rect.top) / (rect.height + viewport * 0.35);
        el.style.setProperty("--p", Math.min(1, Math.max(0, progress)).toFixed(3));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) visible.add(el);
        else {
          visible.delete(el);
          // Paragraphs scrolled past stay revealed.
          if (entry.boundingClientRect.top < 0) el.style.setProperty("--p", "1");
        }
      });
      schedule();
    });
    paragraphs.forEach((el) => {
      el.style.setProperty("--p", "0");
      observer.observe(el);
    });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}

/** Wraps every word (including inside <strong>, links, etc.) in a span numbered by `--i`; `--n` is the word count. */
function splitIntoWords(el: HTMLElement) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  let index = 0;
  textNodes.forEach((node) => {
    const parts = (node.textContent ?? "").split(/(\s+)/);
    if (!parts.some((part) => part.trim())) return;
    const fragment = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (!part.trim()) { fragment.append(part); return; }
      const word = document.createElement("span");
      word.className = "reveal-word";
      word.style.setProperty("--i", String(index++));
      word.textContent = part;
      fragment.append(word);
    });
    node.replaceWith(fragment);
  });

  el.dataset.reveal = "";
  el.style.setProperty("--n", String(index));
}
