import React, { FC } from 'react';
import { FilmList } from '@components/film-list';
import { useQuery } from '@apollo/client';
import query from './films.graphql';
import { useRouter } from 'next/router';
import { Film } from '@packages/apollo/types';

export const MovieApp: FC = () => {
    const router = useRouter();
    const filmToFind = router.query.id;
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const films = data?.allFilms.films;
    let result = films;
    if (filmToFind) {
        result = films.filter(
            (film: Film) =>
                film.title.toLowerCase() ==
                filmToFind.toString().replace(/_/g, ' '),
        );
    }

    return <FilmList films={result} />;
};
