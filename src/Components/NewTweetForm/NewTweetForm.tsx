import React, { useEffect, useState } from 'react';
import { useAppContext, Tweet } from '../../Context/AppContext';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';
import { NewTweetContainer, StyledAuthorText, StyledButton } from './NewTweetFormStyles';

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
                <StyledAuthorText>{user.name}</StyledAuthorText>
            </Grid>
            <Grid my={1} item>
                <TextField
                    InputProps={{
                        disableUnderline: true,
                    }}
                    variant="standard"
                    multiline
                    fullWidth
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                    error={!isValid}
                />
                <Divider />
            </Grid>
            <Grid item>
                <Grid container justifyContent='flex-end'>
                    <Grid alignContent='center' item>
                        <Typography color={!isValid ? 'error' : 'textSecondary'} variant='body2'>
                            {280 - tweetContent.length}
                        </Typography>
                    </Grid>
                    <Grid px={1} item>
                        <Divider orientation="vertical" />
                    </Grid>
                    <StyledButton
                        onClick={handleTweetSubmit}
                        disabled={!isValid || tweetContent.length === 0}
                        variant="contained"
                    >
                        <Typography variant='caption'>Tweet</Typography>
                    </StyledButton>
                </Grid>
            </Grid>
        </NewTweetContainer>
    );
};

export default NewTweetForm;
