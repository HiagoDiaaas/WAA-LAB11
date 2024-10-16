import React from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}

const postsData: Post[] = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
  { id: 3, title: 'Third Post' },
];

const PostsList: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Posts List</h2>
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
