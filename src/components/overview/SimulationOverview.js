import ResourceTable from "./ResourceTable";
import Typography from '../common/mui/Typography';

const SimulationOverview = (props) => {
  return (
    <>
      <Typography variant="h3">
        Starting State of the World
      </Typography>
      <ResourceTable countries={props.countries} />
    </>
  )
}

export default SimulationOverview;
