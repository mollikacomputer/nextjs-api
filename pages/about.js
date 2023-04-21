import Head from 'next/head';
import React from 'react';

const aboutPage = () => {
    return (
        <div>
            <Head>
                <title> Title for about page </title>
                <meta name='description' content='Meta Description content for About page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h2> About page</h2>
        </div>
    );
};

export default aboutPage;