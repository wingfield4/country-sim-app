import Typography from '../../common/mui/Typography';

const CountryInfo = (props) => {
  return (
    <>
      <Typography variant="caption">
        {props.country.takingTurn ? 'Taking turn...' : 'Waiting for turn'}
      </Typography>
    </>
  )
}

export default CountryInfo;
