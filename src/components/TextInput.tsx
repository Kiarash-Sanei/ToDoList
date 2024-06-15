interface Props {
  pretext: string;
  id: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}
const TextInput = ({ pretext, id, handleChange, inputValue }: Props) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={pretext}
      id={id}
      className="mb-3 mt-3"
    />
  );
};

export default TextInput;
