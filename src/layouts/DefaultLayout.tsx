import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default DefaultLayout;
