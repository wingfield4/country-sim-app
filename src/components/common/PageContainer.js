import styled from 'styled-components';

import colors from '../../utilities/colors';

const PageContainer = (props) => {
  return (
    <Container {...props} />
  )
}

export default PageContainer;

const Container = styled.div`
  background-color: ${colors.pageBackground};
  min-height: calc(100% -  32px);
  padding: 16px;
`;
