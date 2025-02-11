import { FC, ReactNode } from 'react';
import './styled.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
