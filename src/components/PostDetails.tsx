import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
}

const postsData: Post[] = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
];

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = postsData.find((p) => p.id === parseInt(id || '', 10));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate(`/posts/${post.id}/edit`)}>Edit</button>
    </div>
  );
};

export default PostDetails;
