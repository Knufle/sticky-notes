import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CreateStickyNote from '../src/components/CreateStickyNote';
import StickyNote from '../src/components/StickyNote';
import { StickyNoteModel } from '../src/models/StickyNote';
import api from '../src/services/api';

const Home: NextPage = () => {
  const [stickyNotes, setStickyNotes] = useState<StickyNoteModel[]>([]);

  useEffect(() => {
    api.get('sticky-notes').then((res) => setStickyNotes(res.data));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sticky Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <CreateStickyNote />
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {stickyNotes.map((stickyNote) => (
            <StickyNote
              key={stickyNote.id}
              id={stickyNote.id}
              title={stickyNote.title}
              description={stickyNote.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
