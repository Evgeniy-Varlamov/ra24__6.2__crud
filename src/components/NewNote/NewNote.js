/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react';
import './NewNote.css';

function NewNote(props) {
  const { onFormSubmit } = props;

  const [form, setForm] = useState({
    text: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.text !== '') {
      const newNoteText = {
        text: form.text,
      };
      onFormSubmit(newNoteText);
      setForm({
        text: '',
      });
    }
  };

  return (
    <>
      <form>
        <label>New Note</label>
        <textarea name='text' onChange={handleChange} value={form.text} />
        <span className="material-icons send" onClick={handleSubmit}>&#10003;</span>
      </form>
    </>
  );
}

export default NewNote;