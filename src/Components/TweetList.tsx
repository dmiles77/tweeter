import React from 'react';
import { useAppContext } from '../Context/AppContext';

const TweetList: React.FC = () => {
  const { tweets } = useAppContext();

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.author}</p>
          <p>{tweet.content}</p>
          <p>{tweet.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default TweetList;
