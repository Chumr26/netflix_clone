import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useFetcher = (api: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        api.includes('undefined') ? null : api,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return { data, error, isLoading, mutate };
};

export default useFetcher;
