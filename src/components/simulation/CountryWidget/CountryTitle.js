import Typography from '../../common/mui/Typography';

const CountryTitle = (props) => {
  return(
    <>
      <Typography
        variant="h2"
        style={{ fontSize: 32 }}
      >
        {props.country.name}
      </Typography>
    </>
  )
}

export default CountryTitle;
