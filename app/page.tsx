import React from 'react';
import Head from 'next/head';
import Inventory from './components/inventory';

const Pages: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Inventory Management App</title>
        <meta name="description" content="Manage your inventory efficiently" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Inventory Management</h1>
        <Inventory />
      </main>
    </div>
  );
};

export default Pages;
