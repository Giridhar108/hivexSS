import {useState} from 'react';
import { useOpenFullScreenOutput } from '../types/types';

function useOpenFullScreen(): useOpenFullScreenOutput {
  const [fullScreen, setFullScreen] = useState(false);

  const openFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(false);
      }
    }
  };

  return {fullScreen, openFullScreen};
}

export default useOpenFullScreen;
