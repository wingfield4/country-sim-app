import styled from 'styled-components';

import Button from '../common/mui/Button';
import Configuration from './Configuration';
import Typography from '../common/mui/Typography';

const GetStarted = (props) => {
  return (
    <Container>
      <Typography variant="h2">
        Welcome to {`<davids_neat_project>`}!
      </Typography>
      <Typography>
        Here's maybe a description about how it works, or links to some docs or something else, idk.
      </Typography>
      <Configuration
        config={props.config}
        setConfig={props.setConfig}
      />
      <div>
        <SimulationButton 
          onClick={props.onPlanAhead}
          variant="contained">
          Plan Ahead
        </SimulationButton>
        <SimulationButton 
          onClick={props.onRunSimulation}
          variant="contained">
          Start a Simulation
        </SimulationButton>
      </div>
    </Container>
  )
}

export default GetStarted;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SimulationButton = styled(Button)`
  margin-top: 32px;
  margin-left: 8px;
`;
