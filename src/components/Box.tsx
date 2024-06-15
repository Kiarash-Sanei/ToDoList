import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Box = ({ children }: Props) => {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Box;
