import React from 'react';
import { FilmListItem } from '@components/film-list-item';
import { FILMS } from '@packages/data';
import { render, screen } from '@testing-library/react';

describe('FilmListItem', () => {
    it('should render a single film item', () => {
        const firstFilm = FILMS.results[0];
        render(<FilmListItem filmData={firstFilm} className="" />);

        const titleElement = screen.getByText(firstFilm.title);
        const directorElement = screen.getByText(firstFilm.director);

        expect(titleElement).toBeDefined();
        expect(directorElement).toBeDefined();
    });
});
