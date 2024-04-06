import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { useAppContext } from '../../Context/AppContext';
import { TweetItem } from './TweetItem';

const TweetListContainer = styled(Grid)({
  width: '400px',
  maxHeight: '350px',
  overflowY: 'auto',
});

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
