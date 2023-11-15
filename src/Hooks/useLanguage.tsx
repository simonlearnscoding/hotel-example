
import { createContext, useContext } from 'react';
import { LanguageType } from './LanguageProvider';
type LanguageContextType = {
  language : LanguageType;
  setLanguage : ( language : LanguageType ) => void;
};
export const LanguageContext = createContext<LanguageContextType | undefined>( undefined );
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage ()
{
  const context = useContext( LanguageContext );
  if ( !context )
  {
    throw new Error( 'useLanguage must be used within a LanguageProvider' );
  }
  return context;
}


