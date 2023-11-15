import { useState, useEffect, createContext, ReactNode, FC } from 'react';
// this component will update itself when it reaches a breakpoint it is here to provide context for the current windowWidth
const WidthContext = createContext<number>(window.innerWidth);
interface WidthContextProps {
  children: ReactNode;
}
const WidthProvider: FC<WidthContextProps> = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      //
      const newWidth = window.innerWidth;
      const threshold = 1024;
      if ((newWidth >= threshold && width < threshold) || (newWidth < threshold && width >= threshold)) {
        setWidth(newWidth);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [width]);

  return (
    <WidthContext.Provider value={width}>
      {children}
    </WidthContext.Provider>
  )
}
export { WidthContext, WidthProvider }
