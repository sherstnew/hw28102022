import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from '../../store';

import { Layout } from '../Layout/Layout';
// import { BooksPage } from '../App/pages/BooksPage/BooksPage';
// import { BookPage } from '../App/pages/BookPage/BookPage';
// import { Book } from '../Book/Book';
// import { CartPage } from '../App/pages/CartPage/CartPage';
// import { NotFoundPage } from '../App/pages/NotFoundPage/NotFoundPage'


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Provider>
    )
}