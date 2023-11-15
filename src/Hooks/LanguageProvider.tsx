import React, { useState, ReactNode } from 'react';
import { LanguageContext } from './useLanguage';

export type LanguageType = 'EN' | 'DE' | 'FR' | 'IT'

interface LanguageProviderProps
{
  children : ReactNode;
}

export const LanguageProvider : React.FC<LanguageProviderProps> = ( { children } ) =>
{
  const [ language, setLanguage ] = useState<LanguageType>( 'EN' );
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={ value }>
      { children }
    </LanguageContext.Provider>
  );
};
