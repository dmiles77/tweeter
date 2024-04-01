// src/components/NewTweetForm.tsx
import React, { useState } from 'react';
import { useAppContext, Tweet } from '../Context/AppContext';

const NewTweetForm: React.FC = () => {
  const { addTweet } = useAppContext();
  const [tweetContent, setTweetContent] = useState('');

  const handleTweetSubmit = () => {
    // Validate tweet content length (max 280 characters)
    if (tweetContent.length <= 280) {
      const newTweet: Tweet = {
        id: Date.now(),
        author: 'Your Name', // Replace with actual author name
        content: tweetContent,
        createdAt: new Date().toISOString(),
      };
      addTweet(newTweet);
      setTweetContent('');
    } else {
      // Handle error (disable post button and change input border color)
    }
  };

  return (
    <div>
      <textarea
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handleTweetSubmit}>Post</button>
    </div>
  );
};

export default NewTweetForm;
