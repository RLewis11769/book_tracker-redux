// Description of values passed to Input
interface InputShape {
  label: string // Label for input
  type: string // Type of input
  input: any // All data in input object - including value and onChange function
  meta: {
    active: boolean // Whether input is currently being focused on
    error: string // Error message if input is invalid
    touched: boolean // Whether input has been touched once
  }
}

function Input({ label, type, input, meta: { active, error, touched } }: InputShape) {
  // Creates input with label and error message based on validation
  return (
    // Highlights input when focused
    <div className={active ? 'active' : ''}>
      {/* label and input as normal HTML */}
      <label className="form-label">{label}</label>
      <input {...input} type={type} placeholder={label} />
      {/* Error message appears if input field has been touched and left */}
      {error && touched && <span>{error}</span>}
    </div>
  );
}

export default Input;
