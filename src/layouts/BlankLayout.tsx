import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const BlankLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="content">{children}</div>
    </div>
  );
};

export default BlankLayout;
