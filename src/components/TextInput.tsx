interface Props {
  pretext: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}
const TextInput = ({ pretext, handleChange, inputValue }: Props) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={pretext}
      className="mb-3 mt-3"
    />
  );
};

export default TextInput;
