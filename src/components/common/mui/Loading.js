import styled from 'styled-components';

import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}

export default Loading;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
`;
