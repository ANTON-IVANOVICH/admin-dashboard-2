import { FC } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    ComposedChart,
} from 'recharts';
import {
    useFetchAllUsersQuery,
    useFetchAllPostsQuery,
    useFetchAllProductsQuery,
} from '../../store/services/serviceAPI';
import { todoAPI } from '../../store/services/TodoService';
import './chart.scss';

type Props = {
    dataName: string;
};

const Chart: FC<Props> = ({ dataName }) => {
    const { data: userData } = useFetchAllUsersQuery('');
    const { data: postData } = useFetchAllPostsQuery('');
    const { data: productData } = useFetchAllProductsQuery('');
    const { data: todoData } = todoAPI.useFetchAllTodosQuery('');

    // Вынести логику вычислений метрик для чартов в другой файл
    // Да и вообще сделать её

    switch (dataName) {
        case 'products':
            return (
                <div className='chart'>
                    <h3>{dataName}</h3>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart
                            width={500}
                            height={300}
                            data={productData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='title' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey='count' fill='#8884d8' />
                            <Bar dataKey='price' fill='#82ca9d' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        case 'posts':
            return (
                <div className='chart'>
                    <h3>{dataName}</h3>
                    <ResponsiveContainer width='100%' height='100%'>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={postData}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke='#f5f5f5' />
                            <XAxis dataKey='title' scale='band' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey='views' barSize={20} fill='#413ea0' />
                            <Line
                                type='monotone'
                                dataKey='publication_date'
                                stroke='#ff7300'
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            );
        case 'todos':
            return (
                <div className='chart'>
                    <h3>{dataName}</h3>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart width={150} height={40} data={todoData}>
                            <Bar dataKey='user_id' fill='#8884d8' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        default:
            return (
                <div className='chart'>
                    <h3>{dataName}</h3>
                    <ResponsiveContainer width='100%' height='80%'>
                        <LineChart data={userData}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Legend />
                            <Line
                                type='monotone'
                                dataKey='getMoney'
                                stroke='#00ff62'
                            />
                            <Line
                                type='monotone'
                                dataKey='lostMoney'
                                stroke='#ff0000'
                            />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
    }
};

export default Chart;
