import styled from 'styled-components';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '../common/mui/Typography';

import actionIcons from '../../utilities/actionIcons';
import colors from '../../utilities/colors';

const StepTimeline = (props) => {

  console.log(props.country);

  return (
    <Container>
      <Typography variant="h4">
        Action Plan
      </Typography>
      <Timeline>
        {props.country.prophecy.steps.map((step, index) => (
          <StyledTimelineItem onClick={() => props.onSelectStep(step)} key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', flex: .3 }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Step {index + 1}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                style={{
                  backgroundColor: colors.accent1
                }}
              >
                {actionIcons[step.id]}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {step.name}
              </Typography>
              <Typography component="p" variant="caption">
                {step.description}
              </Typography>
            </TimelineContent>
          </StyledTimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default StepTimeline;

const Container = styled.div`
  padding-top: 16px;
  text-align: center;
  width: 400px;
  height: 100%;
  overflow-y: auto;
`;

const StyledTimelineItem = styled(TimelineItem)`
  &:hover {
    cursor: pointer;
  }
`;
