'use client';

import useFetcher from '@/hooks/useFetcher';

import MovieCard from './MovieCard';

const MovieList = ({ title }: { title: string }) => {
    const { data }: { data: Record<string, any>[] } = useFetcher('/api/movies');
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
                {data?.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                ))}
            </div>
        </div>
    );
};
export default MovieList;
