import { useState } from 'react';
import styled from 'styled-components';

import CountryData from '../country/CountryData';
import SimulationNavigation from './SimulationNavigation';
import SimulationOverview from '../overview/SimulationOverview';

const SimulationData = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <Container>
      <SimulationNavigation
        countries={props.countries}
        onSelectCountry={country => setSelectedCountry(country)}
      />

      {!selectedCountry &&
        <SimulationOverview countries={props.countries} />
      }
      {selectedCountry &&
        <CountryData country={selectedCountry} />
      }
    </Container>
  )
}

export default SimulationData;

const Container = styled.div`
  padding-left: 256px;
  height: calc(100vh - 88px);
`;
