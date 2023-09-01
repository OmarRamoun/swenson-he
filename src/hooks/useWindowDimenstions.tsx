import {useEffect, useState} from 'react';

interface Dimentions {
  width: number | null;
  height: number | null;
}

const getWindowDimensions = (): Dimentions => {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
};

function useWindowDimensions() {
  const defaultDim = {width: null, height: null};
  const [windowDimensions, setWindowDimensions] = useState<Dimentions>(defaultDim);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions()); // Necessary to make sure dimensions are set upon initial load

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export {useWindowDimensions};
