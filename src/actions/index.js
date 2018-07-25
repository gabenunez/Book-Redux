// Action creator. Exported so function can be called outside this file.
export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property and payload.

    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}