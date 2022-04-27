import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import styled from 'styled-components'

import CountryWidget from '../components/simulation/CountryWidget';
import Loading from '../components/common/mui/Loading';

import api from '../utilities/api';

const client = new Client({
  brokerURL: api.SOCKET_URL
});

const Simulation = () => {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    client.onConnect = () => {
      console.log('connected!');
      client.subscribe(`/response/worldState`, (newMessage) => {
        setGameState(JSON.parse(newMessage.body));
      });
    }

    console.log('activate!');
    client.activate();

    return () => {
      client.deactivate();
    }
  }, []);

  return (
    <>
      {!gameState &&
        <Loading />
      }
      {gameState &&
        <WidgetContainer>
          {gameState.countryPool.countries.map(country => (
            <CountryWidget
              key={country.id}
              country={country}
            />
          ))}
        </WidgetContainer>
      }
    </>
  )
}

export default Simulation;

const WidgetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;