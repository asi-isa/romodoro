import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import Btn from "./Btn";

interface ModalProps {
  children: ReactNode;
  show: boolean;
  onClose: () => void;
  onReset: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Modal = ({ children, show, onReset, onSubmit, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex justify-center items-center"
        >
          <div
            className="absolute inset-0 backdrop-blur bg-black/50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6 w-72 bg-[var(--bg-dark)] z-10 rounded-md p-4 text-[var(--color)] border border-white/5"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">Settings</p>
              <IoClose onClick={onClose} className="text-xl cursor-pointer" />
            </div>

            <div className="h-[1px] w-full bg-[var(--color-muted)]" />

            <form onSubmit={onSubmit} className="flex flex-col gap-8">
              <div>{children}</div>

              <div className="flex gap-3 self-end">
                <Btn title="Reset" onClick={onReset} />

                <input
                  type="submit"
                  value="Save"
                  className="border border-[var(--color-muted)] hover:bg-[var(--color-muted)] transition-colors cursor-pointer px-4 py-1 rounded-md"
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
