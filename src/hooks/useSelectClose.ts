import {useEffect, useRef} from 'react';
import {Iselect} from '../types/types';

export const useSelectClose = ({select, setSelect}: Iselect) => {
  const dropdown = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!select) return;
    function handleClick(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setSelect(false);
      }
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [select]);

  return [dropdown];
};