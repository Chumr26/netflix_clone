'use client';

import axios from 'axios';
import { useCallback } from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

import useCurrentUser from '@/hooks/useCurrentUser';
import useFetcher from '@/hooks/useFetcher';

const FavoriteButton = ({ movieId }: { movieId: string }) => {
    const { data: currentUser, mutate } = useCurrentUser();
    const { mutate: mutateFavorites } = useFetcher('/api/favorites');

    const isFavorite = currentUser?.favoriteIds.includes(movieId);

    const toggleFavorite = useCallback(async () => {
        let response;
        if (isFavorite) {
            response = await axios.delete('/api/favorite', {
                data: { movieId },
            });
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }

        mutate({ ...currentUser, favoriteIds: response.data.favoriteIds });
        mutateFavorites();
    }, [isFavorite, movieId, mutate, currentUser, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
    return (
        <div
            onClick={toggleFavorite}
            className="cursor-pointer group w-10 h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300"
        >
            <Icon className="text-white" size={25} />
        </div>
    );
};
export default FavoriteButton;
