import React from 'react';
import { FilmList } from '../FilmList';
import { FILMS } from '@packages/data';
import { render, screen } from '@testing-library/react';

describe('FilmList', () => {
    it('should render a list of film titles', () => {
        render(<FilmList films={FILMS.results} />);

        const firstFilm = FILMS.results[0];

        const filmElement = screen.getByText(firstFilm.title);

        expect(filmElement).toBeDefined();
    });

    it('should render all films passed to it', () => {
        render(<FilmList films={FILMS.results} />);

        for (const film of FILMS.results) {
            expect(screen.getByText(film.title)).toBeDefined();
        }
    });
});
