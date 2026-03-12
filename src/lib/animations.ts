import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
