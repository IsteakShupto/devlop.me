import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function BounceElementWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -15,
        scale: 1.15,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 8,
          mass: 0.6,
        },
      }}
      initial={{ y: 0, scale: 1 }}
      animate={{ y: 0, scale: 1 }}
    >
      {children}
    </motion.div>
  );
}
