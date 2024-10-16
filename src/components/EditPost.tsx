import React, { useState } from 'react';
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

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = postsData.find((p) => p.id === parseInt(id || '', 10));

  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  if (!post) {
    return <div>Post not found!</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log the updated data to the console
    console.log('Updated Post:', {
      id: post.id,
      title,
      content,
    });
    // Redirect back to the post details page
    navigate(`/posts/${post.id}`);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: '1rem', width: '300px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ marginLeft: '1rem', width: '300px', height: '100px' }}
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
