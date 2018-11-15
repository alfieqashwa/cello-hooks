import React from 'react';

export default function BlogpostDestructure(props) {
  return <Blog posts={posts} />
}

function Blog({ posts }) {  // destructure
  const sidebar = (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = posts.map(post =>
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
  const { key, title, content } = props;  // destructure
  return (
    <div>
      <h3>{key}</h3>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

const posts = [
  {id: 1, title: 'Qashwa World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Destructure', content: "Let's destructure this component."}
];

