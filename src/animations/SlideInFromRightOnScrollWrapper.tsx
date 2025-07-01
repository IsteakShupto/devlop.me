import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type SlideInFromRightOnScrollWrapperProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
};

export default function SlideInFromRightOnScrollWrapper({
  children,
  delay = 0.1,
  duration = 0.8,
  offset = 0,
}: SlideInFromRightOnScrollWrapperProps) {
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
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: "easeInOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
