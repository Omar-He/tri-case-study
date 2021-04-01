import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

export function SearchForm() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="flex">
            <input
                className="border border-gray-400 border-solid px-2 py-1 rounded-lg"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <Link href={'/' + searchTerm.replace(/ /g, '_').toLowerCase()}>
                <a className="border border-gray-500 border-solid rounded-2xl px-5 py-2 bg-gray-500 cursor-pointer text-white ml-10 hover:bg-gray-700">
                    Search
                </a>
            </Link>
        </div>
    );
}
