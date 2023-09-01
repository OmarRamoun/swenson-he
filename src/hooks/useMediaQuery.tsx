import {useEffect, useState} from 'react';

import {useWindowDimensions} from './useWindowDimenstions';

const MAX_SCREEN_SIZE = 768;

const useMediaQuery = () => {
  const {width} = useWindowDimensions();

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(width ? width > MAX_SCREEN_SIZE : false);
  }, [width]);

  // TODO: Add {isXLargeScreen} for bigger screen sizes
  return {isLargeScreen};
};

export {useMediaQuery};
