import React, { FC } from 'react';
import RModal from 'react-modal';
import { CloseIcon } from '@assets/icons';

interface ModalProps {
    title?: string;
    onClose: () => void;
    open: boolean;
    content: any;
}

RModal.setAppElement('#__next');
export const Modal: FC<ModalProps> = ({
    children,
    title,
    content,
    onClose,
    open,
}) => {
    if (!open) {
        return null;
    }
    const closeModal = () => {
        onClose();
    };
    return (
        <RModal
            isOpen={open}
            onRequestClose={() => {
                closeModal();
            }}
            style={{
                overlay: {
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    backgroundColor: 'rgb(88 88 88 / 75%)',
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    outline: 'none',
                    borderRadius: '8px',
                    maxHeight: '350px',
                    maxWidth: '600px',
                },
            }}>
            <div className="flex h-full flex-col justify-center items-center transition transform duration-300 ease-in-out">
                <span
                    className="flex absolute top-1 right-1 text-gray-500 text-lg mb-10 justify-end cursor-pointer hover:text-red-400"
                    onClick={closeModal}>
                    <CloseIcon />
                </span>
                <div className="flex items-center text-3xl mb-10">
                    <span className="text-green-500 font-bold">
                        {content.name}
                    </span>
                </div>
                <div>
                    <ul className="list-none flex flex-row justify-center flex-wrap m-t-8 gap-y-4 gap-x-4">
                        {Object.keys(content).map((i, k) => {
                            let value = content[i];
                            if (i === '__typename' || i === 'name') {
                                return;
                            }
                            if (i === 'homeworld') {
                                value = content[i].name;
                            }
                            return (
                                <li
                                    className="bg-yellow-400 px-3 py-2 rounded-md"
                                    key={k}>
                                    <span>{`${i} : ${value}`}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </RModal>
    );
};
