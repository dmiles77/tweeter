import React from 'react';
import TweetList from '../Components/TweetList';
import NewTweetForm from '../Components/NewTweetForm';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const PageContainer = styled(Grid)({
    padding: '20px',
});

const Tweeter: React.FC = () => {

    return (
        <Container>
            <PageContainer container direction='column' alignItems='center'>
                <Grid item>
                    <NewTweetForm />
                </Grid>
                <Grid item>
                    <TweetList />
                </Grid>
            </PageContainer>
        </Container>
    );
};

export default Tweeter;
