interface BtnProps {
  title: string;
  onClick: () => void;
}

const Btn = ({ title, onClick }: BtnProps) => {
  return (
    <p
      className="border border-[var(--color-muted)] bg-[var(--color-muted)] hover:bg-transparent transition-colors px-4 py-1 rounded-md  cursor-pointer"
      onClick={onClick}
    >
      {title}
    </p>
  );
};

export default Btn;
