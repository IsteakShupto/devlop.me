import { motion } from "framer-motion";
import { type ReactNode } from "react";

type FadeInWrapperProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export default function FadeInWrapper({
  children,
  delay = 0.2,
  duration = 0.8,
}: FadeInWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
