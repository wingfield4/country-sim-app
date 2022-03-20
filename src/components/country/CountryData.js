import { useState } from 'react';
import styled from 'styled-components';

import StepData from './StepData';
import StepTimeline from './StepTimeline';
import Typography from '../common/mui/Typography';

const CountryData = (props) => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      <Typography variant="h3">
        {props.country.name}
      </Typography>
      <DataContainer>
        <StepTimeline
          country={props.country}
          onSelectStep={setSelectedStep}
        />
        {selectedStep && 
          <StepData
            country={props.country}
            step={selectedStep}
          />
        }
      </DataContainer>
    </>
  )
}

export default CountryData;

const DataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`;