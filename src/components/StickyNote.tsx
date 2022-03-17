import React from 'react';
import { StickyNoteModel } from '../models/StickyNote';

export default function StickyNote(props: StickyNoteModel) {
  return <div className="rounded bg-yellow-300 p-4">{props.title}</div>;
}
