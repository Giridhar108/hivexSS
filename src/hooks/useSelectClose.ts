import {Dispatch, SetStateAction, useEffect, useRef} from 'react';

export const useSelectClose = ({select, setSelect}: {select: boolean; setSelect: Dispatch<SetStateAction<boolean>>}) => {
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
