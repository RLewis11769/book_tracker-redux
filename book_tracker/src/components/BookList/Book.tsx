import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteBook } from '../../redux/actions/bookActionCreators';
import { BookProps } from '../../Interfaces';

function Book({ book, notifyMessage }: BookProps) {
  // Returns reference to dispatch function from redux store so can dispatch actions
  const dispatch = useDispatch();

  // Use Moment to find relative date from now based on createdAt date
  const timestamp = moment(book.createdAt).fromNow();

  // Function to handle delete button click
  const handleDelete = () => {
    // Dispatch action to delete book in redux store
    dispatch(deleteBook(book));
    // Call notifyMessage function to display message on BookList component
    notifyMessage();
  };

  return (
    // Display book data - genre, book info, and delete button with click handler
    <div className="book" style={{ borderRight: `5px solid ${book.genre.color}` }}>
      <div className="genre-icon">
        <img src={book.genre.icon} alt={book.genre.name} />
      </div>
      <div className="book-info">
        <p>{book.title} by {book.author}</p>
        <p>{timestamp}</p>
      </div>
      <div className="delete-icon" onClick={handleDelete}>
        <i className="fa-solid fa-trash" />
        <label>Delete</label>
      </div>
    </div>
  );
}

export default Book;
