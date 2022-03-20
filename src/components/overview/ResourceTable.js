import styled from 'styled-components';

import { DataGrid } from '@mui/x-data-grid';

const ResourceTable = (props) => {
  const columns = [{ field: 'country', headerName: 'Country', flex: 1 }]
    .concat(Object.keys(props.countries[0].resourcePool.valueMap).map(key => ({
      field: key,
      headerName: key,
      flex: 1
    })))
    .concat([
      { field: 'stateQuality', headerName: 'State Quality', flex: 1 }
    ]);

  const rows = props.countries.map((country, index) => ({
    id: index,
    country: country.name,
    stateQuality: country.resourcePool.stateQuality.toFixed(2),
    ...country.resourcePool.valueMap
  }));

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </Container>
  )
}

export default ResourceTable;

const Container = styled.div`
  height: 700px;
`;
