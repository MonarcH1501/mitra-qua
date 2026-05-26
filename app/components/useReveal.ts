"use client";
import { useEffect } from "react";
export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("up"); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal, .fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
