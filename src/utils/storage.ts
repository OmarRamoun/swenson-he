const setItem = (key: string, value: string | null): void => {
  if (typeof window === 'undefined') {
    // Handle the case when window is not available, e.g., during server-side rendering.
    return;
  }

  /* eslint-disable-next-line */
  const localStorage = window.localStorage;

  if (!value) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, value);
  }
};

const getItem = (key: string): string | void => {
  if (typeof window !== 'undefined') {
    window.localStorage.getItem(key);
  }
};

export {getItem, setItem};
