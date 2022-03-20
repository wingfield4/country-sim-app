import styled from 'styled-components';

import Loading from '../common/mui/Loading';
import Typography from '../common/mui/Typography';

const LoadingSimulation = () => {
  return (
    <Container>
      <Loading />
      <Typography variant="h4">
        Running the Simulation
      </Typography>
      <Typography>
        This may take a moment, depending on system configuration.
      </Typography>
    </Container>
  )
}

export default LoadingSimulation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
