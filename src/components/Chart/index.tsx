import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.scss'

const data = [
  { name: 'Jan', "Active Users": 4000, },
  { name: 'Feb', "Active Users": 3000, },
  { name: 'Mar', "Active Users": 2000, },
  { name: 'Apr', "Active Users": 2780, },
  { name: 'May', "Active Users": 1890, },
  { name: 'Jun', "Active Users": 2390, },
  { name: 'Jul', "Active Users": 3490, },
  { name: 'Aug', "Active Users": 3490, },
  { name: 'Sep', "Active Users": 3490, },
  { name: 'Oct', "Active Users": 100, },
  { name: 'Nov', "Active Users": 3490, },
  { name: 'Dec', "Active Users": 3490, },
];

const Chart: FC = () => {
  return (
    <div className='chart'>
      <h3>Today's Trends</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="Active Users" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
