import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage';
import { books } from './constants/books'
import { genres } from './constants/genres'

export const App = () => {
    return <BooksPage genres={ genres } books={ books }></BooksPage>
}