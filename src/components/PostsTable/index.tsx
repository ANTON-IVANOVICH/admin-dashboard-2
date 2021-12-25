import { FC } from 'react';
import { Button } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { postAPI } from '../../services/PostService';
import './postsTable.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'title', width: 170 },
  { field: 'body', headerName: 'body', width: 700 },
];

const PostsTable: FC = () => {
  const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllUsersQuery('')

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error!!!</h2>;

  return (
    <>
      <div style={{ height: 600, width: '100%', marginBottom: '20px' }}>
        <DataGrid rows={posts} columns={columns} pageSize={9} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
      <Button onClick={refetch} variant="outlined" >Refetch data</Button>
    </>
  );
};

export default PostsTable;

