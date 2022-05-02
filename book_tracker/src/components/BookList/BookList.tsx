import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { RootState } from '../../Interfaces';
import Book from './Book';
import './BookList.css';

function BookList() {
  // Message to display when book is deleted - Toastify
  const notifyMessage = () => toast.success('Book deleted!');

  // Get data from redux store
  const { bookList, query } = useSelector((state: RootState) => state);
  // Always use query to filter book list - if query is empty, return all books
  // lowercase book.title then filter if includes query
  const filteredList = bookList.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section>
      {/* Will include notify message when book deleted successfully */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        closeOnClick
      />
      <div className="booklist-display">
        {/* If any data in filteredList, map through and pass to Book */}
        {filteredList.length ? (
          filteredList.map((book) => (
            // Note that passing notifyMessage to Book component so can be called there
            <Book book={book} key={book.title} notifyMessage={notifyMessage} />
          ))
        ) : (
          // If no data in filteredList, display message
          <div>
            <img src={require('../../assets/empty.png')} alt="Empty book list" />
            <h1>No books to display</h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default BookList;
