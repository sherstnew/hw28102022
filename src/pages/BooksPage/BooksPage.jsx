import { useState } from 'react';
import { BookList } from '../../components/BooksPage/BookList/BookList/BookList';
import { BookHeader } from '../../components/BooksPage/BookHeader/BookHeader'
import './styles/CategoryList.css'
import './styles/Category.css'

import './styles/BooksPage.css';

export const BooksPage = props => {

    const [activeCategory, setActiveCategory] = useState(props.categories[0]);

    let category_key = 0

    return <main className="main">
        <BookHeader></BookHeader>
        <div className='main__lists'>
            <ul className='lists__category-list'>
                {
                    props.categories.map((category) => <li key={category_key++} className={ ( category === activeCategory ? 'category-list__category category-list__category_selected' : 'category-list__category' ) } onClick={() => setActiveCategory(category)}>{category}</li>)
                }
            </ul>
            <BookList activeCategory={ activeCategory } books={ props.books }></BookList>
        </div>
    </main>
};

// TODO:
// Обновить моковые данные ок нигах, чтобы все категории были