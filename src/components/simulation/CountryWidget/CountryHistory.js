import styled from 'styled-components';

import Typography from '../../common/mui/Typography';

import actionIcons from '../../../utilities/actionIcons';
import colors from '../../../utilities/colors';

const CountryHistory = (props) => {
  return (
    <Container>
      {props.country.actionHistory.map((actionSummary, index) => (
        <>
          {index !== 0 && <Divider />}
          <ActionContainer
            key={index}
            style={{
              marginTop: index === 0 ? 'auto' : undefined
            }}
          >
            <ActionColumn>
              {actionIcons[actionSummary.id]}
            </ActionColumn>
            <ActionColumn style={{ flex: 1 }}>
              {actionSummary.description}
            </ActionColumn>
            <ActionColumn>
              {actionSummary.delta >= 0 ? '+' : '-'}{actionSummary.delta.toFixed(1)}
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
  align-self: stretch;
  flex-shrink: 0;
`;

const ActionColumn = styled(Typography)`
  padding: 4px;
`;

const Container = styled.div`
  margin-top: 32px;
  height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  height: 1px;
  flex-shrink: 0;
  width: 95%;
  background-color: ${colors.captionText};
`;
