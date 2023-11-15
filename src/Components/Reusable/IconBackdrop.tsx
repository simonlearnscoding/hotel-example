
// IconBackdrop.tsx
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface IconBackdropProps {
  onClick: () => void;
  className?: string;
}

export const IconBackdrop: React.FC<IconBackdropProps> = ({ onClick, className = '' }) => {
  return (
    <div className={` ${className}`}>
      <div onClick={onClick}
        className="cursor-pointer flex w-16 h-16 rounded-full backdrop-blur-sm animate-pulse justify-center items-center opacity-50 hover:opacity-100 hover:backdrop-blur-2xl transition-all rounded-full w-full h-full">
        <BsChevronDown size="24px" />
      </div>
    </div>
  );
};
