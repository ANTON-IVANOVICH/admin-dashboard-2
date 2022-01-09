import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userAPI } from '../../store/services/UserService';
import './chart.scss'

const Chart: FC = () => {
  const { data: users } = userAPI.useFetchAllUsersQuery('')

  return (
    <div className='chart'>
      <h3>Today's Trends</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={users} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="money" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
