import { motion } from "framer-motion";

interface TxtBtnProps {
  txt: string;
  onClick: () => void;
}

const TxtBtn = ({ txt, onClick }: TxtBtnProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
      onClick={onClick}
    >
      {txt}
    </motion.p>
  );
};

export default TxtBtn;
