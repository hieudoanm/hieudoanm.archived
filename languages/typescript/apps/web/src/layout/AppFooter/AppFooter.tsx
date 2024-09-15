import { FC, ReactNode } from 'react';
import { TbMathFunction } from 'react-icons/tb';

export type AppFooterProps = { border?: boolean; children?: ReactNode };

export const AppFooter: FC<AppFooterProps> = ({
  border = false,
  children = <TbMathFunction />,
}) => {
  const borderTop: string = border ? 'border-t border-base-content' : '';

  return (
    <footer>
      <div className={borderTop}>
        <div className='container mx-auto'>
          <div className='px-4 py-2 md:px-8 md:py-4'>{children}</div>
        </div>
      </div>
    </footer>
  );
};
