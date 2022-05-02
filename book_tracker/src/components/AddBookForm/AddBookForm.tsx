import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/actions/bookActionCreators';
import { ToastContainer, toast } from 'react-toastify';
import { GenreShape, FormValues } from '../../Interfaces';
import Input from '../FormFieldTypes/FormFieldTypes';
import SuccessModal from './SuccessModal';
import { GenreList } from '../../constants/GenreList';
import 'react-toastify/dist/ReactToastify.css';
import './AddBookForm.css';

function AddBookForm() {
  // Returns reference to dispatch function from redux store so can dispatch actions
  const dispatch = useDispatch();

  // Define what required field error message should be - used by FinalForm
  const required = (value: FormValues) => (value ? undefined : 'Required');

  // Set state for this component only
  // Name of variable, function to change value of variable, initial value
  const [modalOpen, setModalOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genre, setGenre] = useState({
    name: '',
    icon: '',
    color: '',
  });

  // Function to handle genre selection
  const handleGenreName = (e: GenreShape) => {
    // Set genre object to include name, icon, and color
    setGenre(e);
    // Close genre selection div (which imitates select element dropdown)
    setGenreOpen(false);
  };

  const onSubmit = async (values: FormValues) => {
    if (genre.name && values.title && values.author) {
      // If all fields have been filled out, create new object containing all data
      // Values come from FinalForm, genre from state, and createdAt defined as current datetime
      const data = {
        ...values,
        genre,
        createdAt: new Date(),
      };
      // Dispatch action to add book to redux store
      dispatch(addBook(data));
      // Open modal to display success message
      setModalOpen(true);
    } else {
      // If not all fields have been properly filled out, display error message
      const notifyMessage = () => toast('Please include all book information!');
      notifyMessage();
    }
  };

  return (
    <section>
      {/* Include Toastify container in section to show notifyMessage on invalid book addition */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        closeOnClick
      />
      {/* Include SuccessModal component in section to allow display of modal success message */}
      <SuccessModal isOpen={modalOpen} />
      {/* Using FinalForm to create form with validation */}
      <Form
        // Include onSubmit async function as defined above
        onSubmit={onSubmit}
        // Render using handleSubmit function from FinalForm and submitting boolean
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="Title"
              name="title"
              type="text"
              validate={required}
              component={Input}
              placeholder="Title"
            />
            <Field
              label="Author"
              name="author"
              type="text"
              validate={required}
              component={Input}
              placeholder="Author"
            />
            {/* Since want icons in select dropdown, can't use option HTML so have to manually create dropdown */}
            {/* Horrible CSS and not able to focus like ul/li for accessability - poor workaround */}
            <div className="select-container">
              <div className="select-dropdown">
                {/* When click on div, open options */}
                <div onClick={() => setGenreOpen(!genreOpen)}>
                  {/* Label includes either placeholder or value selected */}
                  <label>{genre.name ? genre.name : 'Select Genre'}</label>
                  <i className="fa-solid fa-angle-down" />
                </div>
              </div>
              {/* If genreOpen is true/select-dropdown has been clicked, display genre options */}
              {genreOpen && (
                <div className="genre-container">
                  {/* Map through genres listed in constants/GenreList */}
                  {GenreList.map((g) => (
                    <div
                      key={g.name}
                      className="genre-option"
                      style={{ borderRight: `5px solid ${g.color}` }}
                      // When click on genre, set genre to info from genre object
                      onClick={() => handleGenreName(g)}
                    >
                      <label>{g.name}</label>
                      <img src={g.icon} alt={g.name} height="25px"/>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Submit button is disabled until submitting allowed by FinalForm */}
            <button type="submit" disabled={submitting}>
              <i className="fa-solid fa-plus"></i>
              <label>Add Book</label>
            </button>
          </form>
        )}
      />
    </section>
  );
}

export default AddBookForm;
