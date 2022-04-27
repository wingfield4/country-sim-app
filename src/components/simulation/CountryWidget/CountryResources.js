import styled from 'styled-components';

import colors from '../../../utilities/colors';
import resourceAbbreviations from '../../../utilities/resourceAbbreviations';

const CountryResources = (props) => {
  const sortedKeys = Object.keys(props.country.resourcePool.valueMap);
  sortedKeys.sort();

  return (
    <Container>
      {sortedKeys.map((key, index) => (
        <ResourceContainer>
          <ResourceNameContainer>
            {resourceAbbreviations[key] || key}
          </ResourceNameContainer>
          <ResourceValueContainer>
            {props.country.resourcePool.valueMap[key]}
          </ResourceValueContainer>
        </ResourceContainer>
      ))}
    </Container>
  )
}

export default CountryResources;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const ResourceContainer = styled.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${colors.border};
  overflow: hidden;
  width: 90px;
`;

const ResourceNameContainer = styled.div`
  padding: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  background-color: ${colors.accent1};
  color: ${colors.accent1Text};
`;

const ResourceValueContainer = styled.div`
  padding: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  color: ${colors.captionText};
`;
