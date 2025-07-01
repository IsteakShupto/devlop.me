import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";

type FadeInWrapperProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
};

export default function FadeInWrapper({
  children,
  delay = 0.2,
  duration = 0.8,
  offset = 0,
}: FadeInWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: `${offset}px` });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { delay, duration, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
