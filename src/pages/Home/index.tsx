import { FC, useState } from 'react';
import Cards from '../../components/Cards';
import Chart from '../../components/Chart';
import Tasks from '../../components/Tasks';
import Tickets from '../../components/Tickets';
import './home.scss';

const Home: FC = () => {
    const [dataName, setDataName] = useState('users');

    return (
        <>
            <Cards setDataName={setDataName} />
            <Chart dataName={dataName} />
            <div className='info_container'>
                <Tickets />
                <Tasks />
            </div>
        </>
    );
};

export default Home;
