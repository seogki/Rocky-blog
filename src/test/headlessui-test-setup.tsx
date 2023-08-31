type RootProps = {
  children?: React.ReactNode;
  className?: string;
  show?: boolean;
};

export const TransitionRoot = ({
  children,
  className,
  show = true
}: RootProps) => (show ? <div className={className}>{children}</div> : null);

type ChildProps = {
  className?: string;
  children?: React.ReactNode;
};

export const createReturnChildren = ({ className, children }: ChildProps) => {
  return <div className={className}>{children}</div>;
};
