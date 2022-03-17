import React, { FormEvent, useState } from 'react';
import api from '../services/api';

export default function CreateStickyNote() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = new FormData();

    data.append('title', title);
    data.append('description', description);

    console.log(data, title, description);

    await api.post('sticky-notes', data);

    alert('Sticky Note created successfully!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sticky Note data</legend>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </fieldset>
      <button type="submit">Create Sticky Note</button>
    </form>
  );
}
