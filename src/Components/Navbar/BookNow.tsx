interface ButtonProps {
  className?: string;
}

interface BookNowProps extends ButtonProps {
  windowWidth: number;
}

const MOBILE_BREAKPOINT = 1024;
const BookNowButton: React.FC<ButtonProps> = ({ className }) => {
  const onClick = () => {
    console.log("u clicked me");
  };
  return (
    <button
      onClick={onClick}
      className={`z-999 bottom-0  hover:border-[2px] hover:bg-black border-white border-[4px]  bg-none text-center  active:border-black active:text-black active:bg-lime-200 text-white flex justify-center items-center font-sans text-xl font-semibold ${className}`}
    >
      Book Now
    </button>
  );
};

export const BookNowMobile: React.FC<BookNowProps> = ({
  windowWidth,
  className,
}) => {
  if (windowWidth > MOBILE_BREAKPOINT) return null; // Do not render if not mobile

  return (
    <BookNowButton className={`bottom-0 fixed w-full h-16  ${className}`} />
  );
};

export const BookNowDesktop: React.FC<BookNowProps> = ({
  windowWidth,
  className,
}) => {
  if (windowWidth <= MOBILE_BREAKPOINT) return null; // Do not render if mobile

  return <BookNowButton className={`static w-52 rounded-sm ${className}`} />;
};
