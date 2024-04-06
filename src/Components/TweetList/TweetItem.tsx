import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { format } from 'date-fns';
import { Tweet } from '../../Context/AppContext';

const TweetContainer = styled(Grid)({
    padding: '10px',
    borderBottom: '1px solid #ccc',
    borderLeft: 'none',
    borderRight: 'none',
    '&:first-child': {
        borderTop: '1px solid #ccc',
    },
});

export const TweetItem: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
    return (
        <TweetContainer spacing={1} direction='column' container>
            <Grid item>
                <Typography fontWeight='bold' fontSize='small' fontFamily='inherit'>{tweet.author}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{tweet.content}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="caption">{format(new Date(tweet.createdAt), "hh:mm a MMM dd',' yyyy")}</Typography>
            </Grid>
        </TweetContainer>
    );
};
