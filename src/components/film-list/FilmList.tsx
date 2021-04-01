import React, { FC, useState, useCallback } from 'react';
import { Film } from '@packages/apollo/types';
import { FilmListItem } from '@components/film-list-item';
import { SearchForm } from '@components/search-form';
import { Logo } from '@assets/icons';
import { getFilmUrl } from '@utils/imagesUrls';

interface FilmListProps {
    films: Film[];
}

export const FilmList: FC<FilmListProps> = ({ films }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [clickedFilm, setClickedFilm] = useState<number>();

    const onClickFilm = (key: number) => {
        if (isOpen) {
            setIsOpen((open) => !open);
            setClickedFilm(1000);
            return;
        }
        setIsOpen((open) => !open);
        setClickedFilm(key);
    };

    const listItems = films.map((film, key) => {
        const accordionStyle = isOpen ? 'block w-96 p-4' : 'hidden w-0 p-0';
        const filmCard = 'flex flex-col w-44';

        return (
            <li
                key={key}
                className="flex w-lg h-full px-3 py-2 select-none text-white ">
                <div
                    className={`${
                        clickedFilm == key ? filmCard : 'w-60'
                    } hover:bg-yellow-500 transition-all duration-500 ease-linear relative h-full  flex justify-center items-center bg-blue-400 shadow-lg rounded-xl`}
                    onClick={() => onClickFilm(key)}>
                    <img
                        className={`${
                            clickedFilm == key
                                ? 'object-cover rounded-l-xl'
                                : 'object-cover rounded-xl'
                        } h-full w-full cursor-pointer`}
                        src={getFilmUrl(film.title.toLowerCase())}
                    />
                    <span
                        className={`${
                            clickedFilm == key ? 'rounded-br-none' : ''
                        } block absolute bg-black px-6 py-3 w-full bottom-0 opacity-60 rounded-b-xl`}>
                        {' '}
                        {film.title}
                    </span>
                </div>
                <FilmListItem
                    filmData={film}
                    className={clickedFilm === key ? accordionStyle : 'w-0'}
                />
            </li>
        );
    });

    return (
        <div className="flex flex-col bg-gray-200 rounded-md w-3/4 justify-center p-10 my-10 shadow-lg">
            <div className="relative flex mb-10 items-center justify-center border-b border-solid border-gray-300 pb-10">
                <span className="flex w-56 self-left">
                    <Logo />
                </span>
                <span className="block self-end text-yellow-500">films</span>
            </div>

            <div className="flex items-center justify-between mb-10">
                <span className="block text-left text-gray-600 text-xl">
                    *Scroll right or left for navigation and click on your
                    favorite movie.
                </span>
                <SearchForm />
            </div>
            <ul className="flex p-2 h-96 bg-white rounded-sm overflow-x-auto overflow-y-hidden rounded-md shadow-xl">
                {films.length ? (
                    listItems
                ) : (
                    <div className="self-center text-center w-full text-xl">
                        Sorry, Nothing to show !!!
                    </div>
                )}
            </ul>
        </div>
    );
};
