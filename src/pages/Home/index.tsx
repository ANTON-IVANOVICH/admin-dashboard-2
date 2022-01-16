import { FC } from 'react';
import Cards from '../../components/Cards';
import Chart from '../../components/Chart';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Tasks from '../../components/Tasks';
import Tickets from '../../components/Tickets';
import './home.scss';

const Home: FC = () => {
  return (
    <>
      <Sidebar/>
      <div className='container'>
        <Header/>
        <Cards/>
        <Chart/>
        <div className="info_container">
          <Tickets/>
          <Tasks/>
        </div>
      </div>
    </>
  )
}

export default Home
