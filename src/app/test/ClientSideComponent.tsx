'use client';

import { useState } from 'react';
import { Button } from '../../stories/Button';
import { IPost } from './page';

const ClientSideComponent = () => {
  const [newPost, setNewPost] = useState<IPost>({ body: '', id: 0, title: '', userId: 0 });
  const refetch = () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${(Math.random() * 100).toFixed(0)}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNewPost(json);
      });
  };

  return (
    <>
      <div key={newPost.id} className={'inline-flex'}>
        <div>id : {newPost.id}</div>
        <div>userId : {newPost.userId}</div>
        <div>title : {newPost.title}</div>
        <div>body : {newPost.body}</div>
      </div>
      <Button
        label="asasas"
        onClick={() => {
          refetch();
        }}
        primary
        size="large"
      />
    </>
  );
};

export default ClientSideComponent;
