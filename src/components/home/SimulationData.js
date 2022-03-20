import { useState } from 'react';
import styled from 'styled-components';

import CountryData from '../country/CountryData';
import Performance from './Performance';
import SimulationNavigation from './SimulationNavigation';
import SimulationOverview from '../overview/SimulationOverview';

const SimulationData = (props) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [show, setShow] = useState('Overview');

  const handleSelectCountry = (country) => {
    setShow('Country');
    setSelectedCountry(country);
  }

  return (
    <Container>
      <SimulationNavigation
        countries={props.countries}
        onSelectCountry={country => handleSelectCountry(country)}
        onSelectPage={setShow}
      />

      {show === 'Overview' &&
        <SimulationOverview countries={props.countries} />
      }
      {show === 'Performance' &&
        <Performance countries={props.countries} />
      }
      {show === 'Country' &&
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
