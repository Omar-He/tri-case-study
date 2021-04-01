import React from 'react';
import { MovieApp } from '@components/movie-app';
import { ApolloProvider } from '@packages/apollo';

const Filtered = () => {
    return (
        <ApolloProvider>
            <main className="mt-8 flex justify-center items-center">
                <MovieApp />
            </main>
        </ApolloProvider>
    );
};

export default Filtered;
