import { useEffect, useState } from 'react';
import styled from 'styled-components';

import MenuItem from '../common/mui/MenuItem';
import Select from '../common/mui/Select';
import Slider from '../common/mui/Slider';
import RadioGroup from '../common/mui/RadioGroup';
import Typography from '../common/mui/Typography';

import api from '../../utilities/api';
import colors from '../../utilities/colors';
import oracles from '../../utilities/oracles';

const Configuration = ({
  config,
  setConfig
}) => {
  const [configFiles, setConfigFiles] = useState();

  useEffect(() => {
    api.getConfigFiles()
      .then(res => setConfigFiles(res.data))
      .catch(err => console.log(err));
  }, [setConfigFiles])

  return (
    <Container>
      <Typography variant="h4">
        Configuration
      </Typography>
      <SettingsContainer>

        {/* CHOOSE GENERATION METHOD */}
        <ColumnContainer>
          <RadioGroup
            label="State Generation Method"
            items={[
              { value: 'csv', label: 'CSV File' },
              { value: 'generated', label: 'Randomly Generated' },
            ]}
            value={config.generationMethod}
            onChange={e => setConfig({ ...config, generationMethod: e.target.value })}
          />

          <Typography style={{ marginTop: 8 }}>Search Depth</Typography>
          <Slider
            value={config.searchDepth}
            onChange={(_, newValue) => setConfig({ ...config, searchDepth: newValue })}
            valueLabelDisplay="auto"
            min={1}
            max={50}
            style={{ width: 256, marginBottom: 16 }}
          />

          <Select
            id="oracle-select"
            labelId="oracle-select-label"
            label="Oracle"
            value={config.oracle}
            onChange={e => setConfig({ ...config, oracle: e.target.value})}
          >
            {oracles.map((oracle, index) => (
              <MenuItem
                key={index}
                value={oracle}
              >
                {oracle}
              </MenuItem>
            ))}
          </Select>
        </ColumnContainer>

        {/* GENERATED METHOD OPTIONS */}
        {config.generationMethod === 'generated' &&
          <>
            <ColumnContainer style={{ flex: 1 }}>
              <Typography>Number of Countries</Typography>
              <Slider
                value={config.numberOfCountries}
                onChange={(_, newValue) => setConfig({ ...config, numberOfCountries: newValue })}
                valueLabelDisplay="auto"
                marks
                min={1}
                max={26}
                style={{ width: 256 }}
              />

              <Typography>Electronics Range</Typography>
              <Slider
                value={config.electronicsRange}
                onChange={(_, newValue) => setConfig({ ...config, electronicsRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Electronics Waste Range</Typography>
              <Slider
                value={config.electronicsWasteRange}
                onChange={(_, newValue) => setConfig({ ...config, electronicsWasteRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Housing Range</Typography>
              <Slider
                value={config.housingRange}
                onChange={(_, newValue) => setConfig({ ...config, housingRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Housing Waste Range</Typography>
              <Slider
                value={config.housingWasteRange}
                onChange={(_, newValue) => setConfig({ ...config, housingWasteRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Metallic Alloys Range</Typography>
              <Slider
                value={config.metallicAlloysRange}
                onChange={(_, newValue) => setConfig({ ...config, metallicAlloysRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Metallic Alloys Waste Range</Typography>
              <Slider
                value={config.metallicAlloysWasteRange}
                onChange={(_, newValue) => setConfig({ ...config, metallicAlloysWasteRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Metallic Elements Range</Typography>
              <Slider
                value={config.metallicElementsRange}
                onChange={(_, newValue) => setConfig({ ...config, metallicElementsRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Population Range</Typography>
              <Slider
                value={config.populationRange}
                onChange={(_, newValue) => setConfig({ ...config, populationRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />

              <Typography>Timber Range</Typography>
              <Slider
                value={config.timberRange}
                onChange={(_, newValue) => setConfig({ ...config, timberRange: newValue })}
                valueLabelDisplay="auto"
                style={{ width: '100%' }}
                min={0}
                max={500}
              />
            </ColumnContainer>
          </>
        }

        {/* CSV METHOD OPTIONS */}
        {config.generationMethod === 'csv' &&
          <>
            <ColumnContainer style={{ width: 256 }}>
              {configFiles &&
                <Select
                  id="config-file-select"
                  labelId="config-file-select-label"
                  label="Config File Name"
                  value={config.configFileName}
                  onChange={e => setConfig({ ...config, configFileName: e.target.value})}
                >
                  {configFiles.map((fileName, index) => (
                    <MenuItem
                      key={index}
                      value={fileName}
                    >
                      {fileName}
                    </MenuItem>
                  ))}
                </Select>
              }
            </ColumnContainer>
          </>
        }
      </SettingsContainer>
    </Container>
  )
}

export default Configuration;

const Container = styled.div`
  background-color: ${colors.widgetBackground};
  padding: 16px;
  margin-top: 32px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid ${colors.border};
`;

const ColumnContainer = styled.div`
  margin-right: 24px;
`;

const SettingsContainer = styled.div`
  display: flex;
  padding-top: 8px;
`;
