import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../redux/actions/bookActionCreators';
import './BookNav.css';

function BookNav() {
  // Returns reference to dispatch function from redux store so can dispatch actions
  const dispatch = useDispatch();

  // Function to handle search input - sends search data to redux store
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Dispatch action to update query in redux store
    dispatch(searchBooks(e.target.value));
  };

  return (
    <section>
      {/* If at homepage, section contains searchbar and add button */}
      {window.location.pathname === '/' ? (
        <div className="book-nav">
          <div className="searchbar">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-book">
            <button className="add-button">
              <i className="fas fa-plus" />
              <label>Add Book</label>
            </button>
          </Link>
        </div>
      ) : (
        // If not at homepage, section contains buttons to return to homepage
        <div className="book-nav">
          <Link to="/">
            <button>
              <i className="fa-solid fa-angles-left" />
              <label>Back</label>
            </button>
          </Link>
          <Link to="/">
            <button>
              <i className="fa-solid fa-ban" />
              <label>Cancel</label>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default BookNav;
