import React from 'react';
import { NextPage } from 'next';
import { MovieApp } from '@components/movie-app';
import { ApolloProvider } from '@packages/apollo';

const Home: NextPage = () => {
    return (
        <ApolloProvider>
            <main className="mt-8 flex justify-center items-center">
                <MovieApp />
            </main>
        </ApolloProvider>
    );
};

export default Home;
