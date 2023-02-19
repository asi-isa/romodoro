import { motion } from "framer-motion";

interface CircleSVGProps {
  progress: number;
}

const CircleSVG = ({ progress }: CircleSVGProps) => {
  const reverseProgress = 1 - progress;

  return (
    <motion.svg
      width="214"
      height="214"
      viewBox="0 0 218 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute -rotate-90 transition-opacity duration-1000 ${
        reverseProgress === 0 && "opacity-0"
      }`}
    >
      <motion.circle
        initial={{ pathLength: 1 }}
        animate={{ pathLength: reverseProgress }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 2,
          restDelta: 0.00001,
        }}
        cx="109"
        cy="109"
        r="106"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default CircleSVG;
