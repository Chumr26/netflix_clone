import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useFetcher = (api: string) => {
    const { data, error, isLoading } = useSWR(api, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return { data, error, isLoading };
};

export default useFetcher;
