'use client';

import { supabase } from '@/utils/supabase/client';
import Card from './card';
import { use, useState } from 'react';


export default async function Content() {
  const { data: users, error } = await supabase.from('Teste').select('*');

  async function fetchComments() {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments');
    return data.json();
  }

  const comments = await fetchComments();
  return (
    <>
      <main className='bg-[#e8decd]'>
        <section className='w-full min-h-screen flex flex-wrap gap-4 items-center justify-center py-4'>
          {comments.map((comment) => (
            <Card
              key={comment.id}
              Name={comment.name}
              Commented={comment.body}
              Email={comment.email}
            />
          ))}
        </section>
        <section className='w-full min-h-screen flex flex-wrap items-center justify-center'>
          {users.map((user) => (
            <Card
              key={user.id}
              Name={user.Name}
              Commented={user.Commented}
              Email={user.Email}
            />
          ))}
        </section>
      </main>
    </>
  );
}

{
  /* <label for='selfie' >
  Take a Selfie
</label>
<input
  type='file'
  id='selfie'
  capture='user'
  accept='image/*,video/*'
/>
{console.log(document.getElementById('teste'))} */
}
