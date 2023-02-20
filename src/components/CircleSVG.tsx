import { motion } from "framer-motion";

interface CircleSVGProps {
  progress: number;
  animate?: boolean;
  color?: string;
}

const CircleSVG = ({
  progress,
  animate = true,
  color = "var(--accent)",
}: CircleSVGProps) => {
  return (
    <motion.svg
      width="214"
      height="214"
      viewBox="0 0 218 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute -rotate-90 transition-opacity duration-1000 ${
        progress === 0 && "opacity-0"
      }`}
    >
      <motion.circle
        initial={{ pathLength: animate ? 0 : 1 }}
        animate={{ pathLength: progress }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 10,
          restDelta: 0.0001,
        }}
        cx="109"
        cy="109"
        r="106"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default CircleSVG;
