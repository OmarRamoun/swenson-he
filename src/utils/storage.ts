const setItem = (key: string, value: string | null): void => {
  if (!value) {
    window.localStorage.removeItem(key);
  } else {
    window.localStorage.setItem(key, value);
  }
};

const getItem = (key: string): string | null => window.localStorage.getItem(key);

export {getItem, setItem};
