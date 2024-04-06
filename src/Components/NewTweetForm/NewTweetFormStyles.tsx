import styled from "@emotion/styled";
import { Grid, Button, Typography } from "@mui/material";

export const NewTweetContainer = styled(Grid)({
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    minWidth: '400px',
});

export const StyledButton = styled(Button)({
    borderRadius: '20px',
});

export const StyledAuthorText = styled(Typography)({
    borderBottom: '1px lightgray dashed',
    width: 'fit-content',
    fontWeight: 'bold',
    fontSize: 'small',
    fontFamily: 'inherit',
});