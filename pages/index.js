import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title> Home page Title </title>
                <meta name='description' content='Home page meta content here'  />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h2> Home Page</h2>
        </div>
    );
};

export default index;