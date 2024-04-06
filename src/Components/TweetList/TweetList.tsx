import React from 'react';
import { useAppContext } from '../../Context/AppContext';
import { TweetItem } from './TweetItem';
import { TweetListContainer } from './TweetListStyles';

const TweetList: React.FC = () => {
  const { tweets } = useAppContext();

  return (
    <TweetListContainer>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </TweetListContainer>
  );
};

export default TweetList;
