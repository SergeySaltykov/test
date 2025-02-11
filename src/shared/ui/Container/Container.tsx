import { FC, ReactNode } from 'react';
import './styled.scss';

interface IContainerProps {
  right: ReactNode;
  left: ReactNode;
}

const Container: FC<IContainerProps> = ({ right, left }) => {
  return (
    <div className="container">
      <div className="right">{right}</div>
      <div className="left">{left}</div>
    </div>
  );
};

export default Container;
