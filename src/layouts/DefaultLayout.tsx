import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>Default Layout</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
