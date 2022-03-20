import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import PageContainer from './components/common/PageContainer';
import Pages from './Pages';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageContainer>
          <Pages />
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
