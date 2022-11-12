import { useSelector } from 'react-redux';
import { useState } from 'react';

import { BookList } from '../../../BookList/BookList';
import { BookHeader } from '../../../BookHeader/BookHeader';

import './BooksPage.css';
import { selectCategories } from '../../../../store/categories/selectors';

export const BooksPage = props => {

    const categories = useSelector(state => selectCategories(state))

    const [activeCategory, setActiveCategory] = useState('Художественная литература');

    if (categories.length === 0) {
        return null
    } else {

        return <main className="main">
            <BookHeader />
            <div className='main__lists'>
                <ul className='lists__category-list'>
                    {
                        categories.map(category => <li key={category.id} className={ ( category.category === activeCategory ? 'category-list__category category-list__category_selected' : 'category-list__category' ) } onClick={() => setActiveCategory(category.category)}>{category.category}</li>)
                    }
                </ul>
                <BookList activeCategory={ activeCategory }/>
            </div>
        </main>
    };
};