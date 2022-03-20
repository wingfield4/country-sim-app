import styled from 'styled-components';

import MuiTypography from '@mui/material/Typography';

import colors from '../../../utilities/colors';

const Typography = (props) => {
  return (
    <StyledTypography {...props} />
  )
}

export default Typography;

const StyledTypography = styled(MuiTypography)`
  && {
    color: ${colors.text};
  }
`;
