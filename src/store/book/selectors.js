export const selectBookModule = (state) => state.book;

export const selectBook = (state, id) =>
    Object.values(selectBookModule(state).entities).find(book => book.id === id);

export const selectBooks = (state) =>
    Object.values(selectBookModule(state).entities);