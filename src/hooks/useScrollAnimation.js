import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Reusable scroll-linked animation hook.
 * Returns a ref and smooth motion values (opacity, y, scale, blur) that
 * animate continuously as the element scrolls through the viewport.
 *
 * @param {Object} options
 * @param {Array} options.offset - useScroll offset, default: element enters → exits viewport
 * @param {number} options.yDistance - how far the element travels on Y axis (px)
 * @param {boolean} options.scaleEffect - whether to include a scale transform
 * @param {number} options.springStiffness - spring config for smoothness
 */
export default function useScrollAnimation({
  offset = ["start end", "end start"],
  yDistance = 60,
  scaleEffect = false,
  springStiffness = 80,
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Smooth the progress with a spring for buttery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: springStiffness,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll progress to:
  // opacity: 0 → 1 → 1 → 0 (fade in early, fade out late)
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // y: starts offset, goes to 0, then past
  const y = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [yDistance, 0, 0, -yDistance],
  );

  // scale: subtle 0.95 → 1 → 1 → 0.95
  const scale = scaleEffect
    ? useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
    : undefined;

  return { ref, opacity, y, scale, scrollYProgress: smoothProgress };
}

/**
 * Simpler variant: just fade-slide in, stay visible once entered.
 * Good for cards and content sections.
 */
export function useScrollReveal({
  offset = ["start 0.95", "start 0.3"],
  yDistance = 40,
  springStiffness = 60,
} = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: springStiffness,
    damping: 25,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [yDistance, 0]);

  return { ref, opacity, y, scrollYProgress: smoothProgress };
}

/**
 * Parallax effect — element moves at a different rate than scroll.
 */
export function useParallax({ speed = 0.3 } = {}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });

  return { ref, y: smoothY };
}
