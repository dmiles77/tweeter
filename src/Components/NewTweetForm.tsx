import React, { useEffect, useState } from 'react';
import { useAppContext, Tweet } from '../Context/AppContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const NewTweetContainer = styled(Grid)({
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '20px',
});

const NewTweetForm: React.FC = () => {
    const { addTweet, user } = useAppContext();
    const [tweetContent, setTweetContent] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setIsValid(tweetContent.length <= 280);
    }, [tweetContent]);

    const handleTweetSubmit = () => {
        if (isValid) {
            const newTweet: Tweet = {
                id: Date.now(),
                author: user.name,
                content: tweetContent,
                createdAt: new Date().toISOString(),
            };
            addTweet(newTweet);
            setTweetContent('');
        }
    };

    return (
        <NewTweetContainer direction='column' container>
            <Grid item>
                <Typography fontWeight='500' variant='body1'>{user.name}</Typography>
            </Grid>
            <TextField
                label="What's on your mind?"
                variant="outlined"
                multiline
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
                error={!isValid}
                helperText={`${tweetContent.length}/280`}
            />
            <Button onClick={handleTweetSubmit} disabled={!isValid}>
                Post
            </Button>
        </NewTweetContainer>
    );
};

export default NewTweetForm;
