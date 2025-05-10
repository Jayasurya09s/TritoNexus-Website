
import React, { useState } from 'react';
import { BarChart, PieChart, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const ChartSection = () => {
  const [activeChart, setActiveChart] = useState('bar');

  // Sample data for the charts
  const barData = [
    { name: 'Mon', tasks: 12, completed: 8 },
    { name: 'Tue', tasks: 19, completed: 15 },
    { name: 'Wed', tasks: 15, completed: 10 },
    { name: 'Thu', tasks: 18, completed: 14 },
    { name: 'Fri', tasks: 16, completed: 12 },
  ];

  const pieData = [
    { name: 'Completed', value: 65, color: '#9b87f5' },
    { name: 'In Progress', value: 25, color: '#D946EF' },
    { name: 'Pending', value: 10, color: '#7E69AB' },
  ];

  // Custom tooltip for the bar chart
  const CustomBarTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium">{`${payload[0].payload.name}`}</p>
          <p className="text-sm text-tritonexus-purple">
            {`Tasks: ${payload[0].value}`}
          </p>
          <p className="text-sm text-tritonexus-pink">
            {`Completed: ${payload[1].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for the pie chart
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium" style={{ color: payload[0].payload.color }}>
            {payload[0].name}
          </p>
          <p className="text-sm">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics" className="section bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visualize Your <span className="text-gradient">Progress</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interactive charts provide real-time insights into your team's performance
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted/30 rounded-lg p-1.5">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeChart === 'bar'
                  ? 'bg-background shadow-sm'
                  : 'hover:bg-muted'
              }`}
              onClick={() => setActiveChart('bar')}
            >
              Task Distribution
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                activeChart === 'pie'
                  ? 'bg-background shadow-sm'
                  : 'hover:bg-muted'
              }`}
              onClick={() => setActiveChart('pie')}
            >
              Project Status
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-background to-muted/50 border border-border rounded-xl p-4 md:p-8 shadow-lg">
          {activeChart === 'bar' ? (
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" opacity={0.3} />
                  <XAxis dataKey="name" tick={{ fill: 'var(--foreground)' }} />
                  <YAxis tick={{ fill: 'var(--foreground)' }} />
                  <Tooltip content={<CustomBarTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar dataKey="tasks" name="Total Tasks" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" name="Completed" fill="#D946EF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                      const radius = outerRadius + 10;
                      const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                      const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                      return (
                        <text
                          x={x}
                          y={y}
                          fill="var(--foreground)"
                          textAnchor={x > cx ? 'start' : 'end'}
                          dominantBaseline="central"
                          className="text-xs sm:text-sm"
                        >
                          {`${(percent * 100).toFixed(0)}%`}
                        </text>
                      );
                    }}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-tritonexus-purple/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-tritonexus-purple">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-1">87%</h3>
            <p className="text-muted-foreground text-sm">Productivity Increase</p>
          </div>
          
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-tritonexus-pink/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-tritonexus-pink">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-1">32%</h3>
            <p className="text-muted-foreground text-sm">Time Saved</p>
          </div>
          
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-tritonexus-purple-dark/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-tritonexus-purple-dark">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-1">10k+</h3>
            <p className="text-muted-foreground text-sm">Active Users</p>
          </div>
          
          <div className="feature-card flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-tritonexus-pink/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-tritonexus-pink">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-1">95%</h3>
            <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ChartSection;
