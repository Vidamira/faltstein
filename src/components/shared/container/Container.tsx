import { HTMLProps } from 'react';

export const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={className} {...props} />;
};
