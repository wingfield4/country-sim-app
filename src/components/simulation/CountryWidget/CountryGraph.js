import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const CountryGraph = (props) => {

  let data = [{
    name: 'Current',
    quality: Math.round(props.country.stateQuality)
  }];

  let prevQuality = props.country.stateQuality;
  for(let i = 0; i < props.country.actionHistory.length - 1 && i < 6; i++) {
    let action = props.country.actionHistory[props.country.actionHistory.length - 1 - i];
    let newQuality = prevQuality - action.delta;
    data.unshift({
      name: `-${i+1}`,
      quality: Math.round(newQuality)
    });
    prevQuality = newQuality;
  }

  return (
    <LineChart
      width={400}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={['dataMin - 20', 'dataMax + 20']}
      />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="quality" stroke="#82ca9d" />
    </LineChart>
  )
}

export default CountryGraph;
