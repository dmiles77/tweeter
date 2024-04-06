import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { useAppContext } from '../../Context/AppContext';
import { TweetItem } from './TweetItem';

const TweetListContainer = styled(Grid)({
  width: '400px',
});

const TweetList: React.FC = () => {
  const { tweets } = useAppContext();

  return (
    <TweetListContainer>
      {tweets.map((tweet) => (
        <TweetItem tweet={tweet} />
      ))}
    </TweetListContainer>
  );
};

export default TweetList;
