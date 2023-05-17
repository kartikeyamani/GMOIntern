import sample from '../sample.json'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';

interface Root2 {
  userId: number
  id: number
  title: string
  body: string
}
const columns: GridColDef[] = [
  { 
    field: 'userId',
    headerName: 'USERID', 
    width: 90 
  },
  {
    field: 'id',
    headerName: 'Id',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 110,
    editable: true,
  },
];
const rows:Root2[]=sample;



export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
