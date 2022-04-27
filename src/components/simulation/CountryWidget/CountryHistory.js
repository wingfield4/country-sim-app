import styled from 'styled-components';

import Typography from '../../common/mui/Typography';

import actionIcons from '../../../utilities/actionIcons';
import colors from '../../../utilities/colors';

const CountryHistory = (props) => {
  let sortedActions = props.country.actionHistory.map(a => a);
  sortedActions.reverse();

  return (
      <Container>
        {sortedActions.map((actionSummary, index) => (
          <>
            {index !== 0 && <Divider />}
            <ActionContainer key={index}>
              <ActionColumn>
                {actionIcons[actionSummary.id]}
              </ActionColumn>
              <ActionColumn style={{ flex: 1 }}>
                {actionSummary.description}
              </ActionColumn>
              <ActionColumn>
                {actionSummary.delta >= 0 ? '+' : ''}{actionSummary.delta.toFixed(1)}
              </ActionColumn>
            </ActionContainer>
          </>
        ))}
      </Container>
  )
}

export default CountryHistory;

const ActionContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0px;
`;

const ActionColumn = styled(Typography)`
  padding: 4px;
`;

const Container = styled.div`
  overflow-y: auto;
  height: 300px;
  display: flex;
  flex-direction: column-reverse;
`;

const Divider = styled.div`
  height: 1px;
  flex-shrink: 0;
  width: 95%;
  background-color: ${colors.captionText};
`;

const OuterContainer = styled.div`
  height: 300px;
  display: flex;
`;