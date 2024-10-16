import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  );
};

export default App;
