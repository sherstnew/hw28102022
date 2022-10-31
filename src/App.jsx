import { useState } from 'react';

import { Layout } from './components/Layout/Layout'

export const App = () => {

    const [activePage, setActivePage] = useState('home');
    const [activeBook, setActiveBook] = useState();

    return <Layout activePage={ activePage } activeBook={ activeBook } setActivePage={ setActivePage } setActiveBook={ setActiveBook }></Layout>
}