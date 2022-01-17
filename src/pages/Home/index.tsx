import { FC, useState } from 'react';
import Cards from '../../components/Cards';
import Chart from '../../components/Chart';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Tasks from '../../components/Tasks';
import Tickets from '../../components/Tickets';
import './home.scss';

const Home: FC = () => {
  const [dataName, setDataName] = useState('users');

  return (
    <>
      <Sidebar/>
      <div className='container'>
        <Header/>
        <Cards setDataName={setDataName}/>
        <Chart dataName={dataName} />
        <div className="info_container">
          <Tickets/>
          <Tasks/>
        </div>
      </div>
    </>
  )
}

export default Home
