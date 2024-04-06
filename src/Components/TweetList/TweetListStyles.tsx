import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const TweetListContainer = styled(Grid)({
    width: '400px',
    maxHeight: '350px',
    overflowY: 'auto',
    paddingTop: '10px',
  });

export const TweetContainer = styled(Grid)({
    padding: '10px',
    borderBottom: '1px solid #ccc',
    borderLeft: 'none',
    borderRight: 'none',
});