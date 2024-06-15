interface Props {
  onClick: () => void;
  text: string;
  theme: "light" | "dark";
  otherClass?: string;
}
const Button = ({ onClick, text, theme, otherClass = "" }: Props) => {
  return (
      <button
        type="button"
        className={"btn btn-" + (theme === "light" ? "light" : "dark") + otherClass}
        onClick={onClick}
      >
        {text}
      </button>
  );
};

export default Button;
