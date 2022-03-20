import styled from 'styled-components';

import PublicIcon from '@mui/icons-material/Public'

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '../common/mui/ListItemText';

import colors from '../../utilities/colors';

const SimulationNavigation = (props) => {
  return (
    <Container>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => props.onSelectCountry(null)}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: colors.accent3, color: colors.accent3Text }}>
                <PublicIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
        {props.countries.map((country, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton onClick={() => props.onSelectCountry(country)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: colors.accent1, color: colors.accent1Text }}>
                  {country.name.substring(0, 1)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={country.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default SimulationNavigation;

const Container = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 232px;
  background-color: ${colors.widgetBackground};
`;
