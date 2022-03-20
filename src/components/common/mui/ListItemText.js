import MuiListItemText from '@mui/material/ListItemText';

import colors from '../../../utilities/colors';

const ListItemText = (props) => {
  return (
    <MuiListItemText
      primaryTypographyProps={{
        style: {
          color: colors.text
        }
      }}
      {...props}
    />
  )
}

export default ListItemText;
