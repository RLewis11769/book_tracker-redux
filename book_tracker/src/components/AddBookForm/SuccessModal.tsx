import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { ModalProps } from '../../Interfaces';
import './SuccessModal.css';

// Styling copied directly from react-modal documentation
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    textAlign: 'center',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '10px',
    border: '2px solid var(--color-pop)',
  },
};

function SuccessModal({ isOpen }: ModalProps) {
  // Function called/component rendered when isOpen state is true in parent AddBookForm component
  return (
    // Use react-modal to create/display modal
    <Modal
      isOpen={isOpen}
      style={customStyles}
      appElement={document.getElementById('root') || undefined}
    >
      {/* Modal appears when successfully add book */}
      <div className="modal">
        <h1>Book added successfully!</h1>
        <img
          src={require('../../assets/library.jpg')}
          alt="Added to library image"
        />
        {/* Click on home button to close out of modal and return to homepage */}
        <Link to="/">
          <button>
            <i className="fa-solid fa-house" />
            <label>Home</label>
          </button>
        </Link>
      </div>
    </Modal>
  );
}

export default SuccessModal;
