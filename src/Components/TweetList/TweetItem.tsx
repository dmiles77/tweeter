import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Tweet } from '../../Context/AppContext';

const TweetContainer = styled(Grid)({
    padding: '10px',
    border: '1px solid #ccc',
});

export const TweetItem: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
    return (
        <TweetContainer key={tweet.id} container>
            <Grid item>
                <Typography variant="h6">{tweet.author}</Typography> {/* Author */}
            </Grid>
            <Grid item>
                <Typography variant="body1">{tweet.content}</Typography> {/* Content */}
            </Grid>
            <Grid item>
                <Typography variant="caption">{tweet.createdAt}</Typography> {/* Creation date */}
            </Grid>
        </TweetContainer>
    );
};
