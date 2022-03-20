import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';

import Typography from '../common/mui/Typography';

const StepData = (props) => {

  let steps = props.country.prophecy.steps;
  let prevIndex;
  for(let i = 0; i < steps.length; i++) {
    if(steps[i] === props.step) {
      prevIndex = i - 1;
      break;
    }
  }

  let resourcesBefore;
  let stateQualityBefore;
  if(prevIndex >= 0) {
    resourcesBefore = steps[prevIndex].resultResourcePool.valueMap;
    stateQualityBefore = steps[prevIndex].resultResourcePool.stateQuality;
  } else {
    resourcesBefore = props.country.resourcePool.valueMap;
    stateQualityBefore = props.country.resourcePool.stateQuality;
  }

  let resourcesAfter = props.step.resultResourcePool.valueMap;
  let stateQualtyAfter = props.step.resultResourcePool.stateQuality;
  
  const columns = [{ field: 'state', headerName: 'State', flex: 1 }]
    .concat(Object.keys(props.country.resourcePool.valueMap).map(key => ({
      field: key,
      headerName: key,
      flex: 1,
      cellClassName: params => {
        if(params.value > resourcesBefore[key])
          return 'improved-cell';
        if(params.value < resourcesBefore[key])
          return 'deteriorated-cell';

        return '';
      }
    })))
    .concat([
      { 
        field: 'stateQuality',
        headerName: 'State Quality',
        flex: 1,
        cellClassName: params => {
          if(params.value > stateQualityBefore.toFixed(2))
            return 'improved-cell';
          if(params.value < stateQualityBefore.toFixed(2))
            return 'deteriorated-cell';
            
          return '';
        }
      }
    ]);

  const rows = [
    {
      id: 1,
      state: 'Before',
      stateQuality: stateQualityBefore.toFixed(2),
      ...resourcesBefore
    },
    {
      id: 2,
      state: 'After',
      stateQuality: stateQualtyAfter.toFixed(2),
      ...resourcesAfter
    }
  ];

  return (
    <Container>
      <Typography variant="h4">{props.step.name}</Typography>
      <Typography>{props.step.description}</Typography>
      <Typography>Undiscounted Reward: {props.country.prophecy.undiscountedReward}</Typography>
      <Typography>Discounted Reward: {props.country.prophecy.discountedReward}</Typography>
      <Typography>Probability of Success: {props.country.prophecy.probability}</Typography>
      <Typography>Expected Utility: {props.country.prophecy.expectedUtility}</Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </Container>
  )
}

export default StepData;

const Container = styled.div`
  padding: 8px;
  flex-grow: 1;
  height: 300px;
`;
