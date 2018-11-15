import React from 'react';

export default function Blogpost(props) {
  return <Blog posts={posts} />
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content} />
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function Post(props) {
  return (
    <div>
      <h3>{props.key}</h3>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

const posts = [
  {id: 1, title: 'Cello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

