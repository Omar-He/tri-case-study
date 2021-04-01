import React, { FC, useState, useCallback } from 'react';
import cn from 'classnames';
import { Modal } from '@components/modal';
import { Film } from '@packages/apollo/types';
interface FilmListItemProps {
    filmData: Film;
    className: string;
}

export const FilmListItem: FC<FilmListItemProps> = ({
    className,
    filmData,
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [charInfo, setCharInfo] = useState<object>();

    const onClickChar = (e: any, i: object, key: number) => {
        setOpenModal(true);
        setCharInfo(i);
        e.stopPropagation();
    };

    return (
        <div
            className={
                className +
                '  bg-gray-700 rounded-r-xl transition-all duration-300 ease-linear overflow-y-auto'
            }>
            <span className="block text-lg font-bold text-yellow-500">
                Director: {filmData.director}
            </span>
            <span className="block block text-lg font-bold text-green-300">
                Release Date: {filmData.releaseDate}
            </span>
            <div className="mt-4">
                <span className="block text-lg font-bold text-red-300">
                    Characters:
                </span>
                <div className="block">
                    {filmData.characterConnection.characters.map((i, k) => {
                        return (
                            <span
                                className=" inline-block cursor-pointer m-1 hover:bg-red-400 p-1 rounded-md"
                                onClick={(e) => onClickChar(e, i, k)}
                                key={k}>
                                {i.name}
                            </span>
                        );
                    })}
                </div>
            </div>
            <Modal
                onClose={() => {
                    setOpenModal(false);
                }}
                open={openModal}
                content={charInfo}
            />
        </div>
    );
};
