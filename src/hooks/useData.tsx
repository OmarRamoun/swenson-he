import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = process.env.NEXT_PUBLIC_SERVER;

const useGetData = (path: string) => {
  if (!path) {
    throw new Error('Path is Required');
  }

  const {data, error, isLoading} = useSWR(`${baseUrl}/${path}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export {useGetData};
