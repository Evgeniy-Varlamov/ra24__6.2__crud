/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Note.css';

function Note(props) {
  const { note, onDelete } = props;

  const handleDel = (id) => {
    onDelete(id);
  }

  return (
    <>
      <div className='block-item-note'>
        <p>{note.text}</p>
        <span className='material-icons delete' onClick={ () => { handleDel(note.id); } }>&#10060;</span>
      </div>
    </>
  );
}

export default Note;