import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import "../styles/componentStyles/Dashboard.css"

const Dashboard = () => {
  const totalValue = 2000; 
  const paidValue = 900; 
  const unpaidValue = totalValue - paidValue;

  const chartData = [
    { name: 'Ödenen', value: paidValue },
    { name: 'Ödenmemiş', value: unpaidValue },
  ];

  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const name = payload[0].name;

      return (
        <div className="custom-tooltip">
          <p>{name}: {value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="dashboard-body">
        <div className='dashboard-header'>
          <h5 className="dashboard-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
            Genel Borç Durumu
          </h5>
          <p className="dashboard-total">Toplam Borç: {totalValue}</p>
          <p className="dashboard-pay">Ödenen Borç: {paidValue}</p>
        </div>

        <div className='rechart-container'>
          <PieChart width={200} height={200}>
            <Pie
              dataKey="value"
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              isAnimationActive={false}
              label={({ name, value }) => `${name}: ${value}`}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#82ca9d', '#ff6666'][index % 2]} />
              ))}
            </Pie>
            <Tooltip content={renderCustomTooltip} />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
