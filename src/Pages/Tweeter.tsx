import React from 'react';
import TweetList from '../Components/TweetList';
import NewTweetForm from '../Components/NewTweetForm';

const Tweeter: React.FC = () => {
  return (
    <div>
      <h1>Tweeter</h1>
      <TweetList />
      <NewTweetForm />
    </div>
  );
};

export default Tweeter;
