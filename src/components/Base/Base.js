import React, { Component } from 'react';
import Note from '../Note/Note';
import NewNote from '../NewNote/NewNote';
import './Base.css'

export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.URL = 'http://localhost:7777/notes';
  }

  async getNotes() { // Получение списка заметок
    console.log(this.URL)
    const response = await fetch(this.URL)
    const result = await response.json()
    this.setState({ notes: result });
  }

  async addNote(newNote) { // Добавление заметки
    await fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newNote),
    })
    this.getNotes();
  }

  async dellNote(id) { // Удаление заметки
    await fetch(`${this.URL}/${id}`, {
      method: 'DELETE',
    })
    this.getNotes();
  }

  componentDidMount() {
    this.getNotes();
  }

  render() {
    return (
      <>
        <h2>Notes <span className='material-icons refresh' onClick={this.getNotes.bind(this)}>&#128472;</span></h2>
        <div className='list-notes'>
          {this.state.notes.map((item) => (
            <Note key={item.id} note={item} onDelete={this.dellNote.bind(this)} />
          ))}
        </div>
        <NewNote onFormSubmit={this.addNote.bind(this)} />
      </>
    );
  }
}