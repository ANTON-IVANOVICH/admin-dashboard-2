import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/ActionCreators';
import './usersTable.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'name', width: 230 },
  { field: 'username', headerName: 'username', width: 170 },
  { field: 'email', headerName: 'email', width: 400 },
];
// ошибки, загрузка - вывод
const Table: FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  if (isLoading) return <h1>Loading . . .</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={9} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  );
};

export default Table;
