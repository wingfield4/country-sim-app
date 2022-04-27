import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Error from '../components/common/Error';
import GetStarted from '../components/home/GetStarted';
import LoadingSimulation from '../components/home/LoadingSimulation';
import SimulationData from '../components/home/SimulationData';

import api from '../utilities/api';
import defaultConfiguration from '../utilities/defaultConfiguration';

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(defaultConfiguration);

  const navigate = useNavigate();

  const runSimulation = () => {
    setError(false);
    setLoading(true);
    api.startSimulation(config)
      .then(res => {
        setLoading(false);
        navigate('/simulation');
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }

  const planAhead = () => {
    setCountries(null);
    setError(false);
    setLoading(true);
    api.planAhead(config)
      .then(res => {
        setCountries(res.data.countryPool.countries);
        setError(false);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }

  return (
    <>
      {!loading && !countries &&
        <GetStarted
          config={config}
          setConfig={setConfig}
          onPlanAhead={planAhead}
          onRunSimulation={runSimulation}
        />
      }
      {loading &&
        <LoadingSimulation />
      }
      {error &&
        <Error message={error} />
      }
      {countries &&
        <SimulationData countries={countries} />
      }
    </>
  )
}

export default Home;
