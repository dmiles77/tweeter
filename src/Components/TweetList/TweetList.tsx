import React, { useMemo } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { TweetItem } from './TweetItem';
import { TweetListContainer } from './TweetListStyles';
import { Divider } from '@mui/material';

const TweetList: React.FC = () => {
  const { tweets } = useAppContext();

  const sortedTweets = useMemo(() => {
    return tweets.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [tweets]);

  return (
    <TweetListContainer>
      <Divider />
      {sortedTweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </TweetListContainer>
  );
};

export default TweetList;
