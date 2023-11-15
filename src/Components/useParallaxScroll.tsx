import { IParallax } from "@react-spring/parallax";
import { useRef, useEffect, useState, useCallback } from 'react';
import { Section } from './../Pages/Homepage';

export function useParallaxScroll ( sections : Section[] )
{
  const ref = useRef<IParallax>( null );
  const [ currentSection, setCurrentSection ] = useState( sections[ 0 ] );

  const scrollTo = useCallback( ( offset : number ) =>
  {
    console.log( ref.current )
    ref.current?.scrollTo( offset );
  }, [] );

  const findSectionByBreakPoint = ( pos : number ) : Section | null =>
  {
    let currentBreakpoint = sections[ 0 ]
    for ( const section of sections )
    {
      if ( pos > section.breakpoint )
      {
        currentBreakpoint = section
      }
    }
    return currentBreakpoint
  }
  const updateCurrentSection = useCallback( () =>
  {

    if ( !ref.current ) return;
    const newPos = ref.current.current;

    console.log( newPos )
    const newSection = findSectionByBreakPoint( newPos )
    console.log( newSection )
    if ( newSection )
    {
      setCurrentSection( ( prevSection ) =>
      {
        if ( prevSection.sectionName !== newSection.sectionName )
        {
          console.log( newSection )
          return newSection;

        }
        // No change in the section, so return the previous state to avoid re-rendering
        return prevSection;
      } );

    }
  }, [ sections ] ); // currentSection is not a dependency anymore

  useEffect( () =>
  {

    const intervalId = setInterval( updateCurrentSection, 500 );
    return () => clearInterval( intervalId );
  }, [ updateCurrentSection ] );

  return { ref, currentSection, scrollTo };
}
