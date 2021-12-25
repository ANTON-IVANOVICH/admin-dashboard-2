import Header from '../../components/Header';
import Table from '../../components/UsersTable';
import './users.scss';

const Users = () => {
  return (
    <div className='container'>
      <Header/>
      <Table/>
    </div>
  )
}

export default Users
