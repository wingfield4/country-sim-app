import styled from 'styled-components';

import CountryGraph from './CountryGraph';
import CountryHistory from './CountryHistory';
import CountryInfo from './CountryInfo';
import CountryTitle from './CountryTitle';

import colors from '../../../utilities/colors';

const CountryWidget = (props) => {
  return(
    <Container takingTurn={props.country.takingTurn}>
      <CountryTitle country={props.country} />
      <CountryInfo country={props.country} />
      <CountryGraph country={props.country} />
      <CountryHistory country={props.country} />
    </Container>
  )
}

export default CountryWidget;

const Container = styled(({ takingTurn, ...props }) => (
  <div {...props} />
))`
  margin: 16px;
  padding: 16px;
  background-color: ${props => props.takingTurn ? colors.highlightBackground : colors.widgetBackground};
  border-radius: 4px;

  width: 400px;
`;
