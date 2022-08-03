import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
    ResponsiveContainer,AreaChart, Area, BarChart, Bar } from 'recharts';





    var pdata = [
      {
        name: 'TATA MOTORS',
        student: 13,
        fees: 10
      },
      {
        name: 'ASHOK LEYLAND',
        student: 15,
        fees: 12
      },
      {
        name: 'VOLVO',
        student: 9,
        fees: 10
      },
      {
        name: 'HYUNDAI',
        student: 10,
        fees: 5
      },
      {
        name: 'KIA MOTORS',
        student: 9,
        fees: 4
      },
      {
        name: 'EICHER',
        student: 10,
        fees: 8
      },
    ];
  
    

function App() {
  return (
    
    

    

  
    <div>
      <div>
        
        <h1>
    share prices of automobiles industries
    </h1>
    
   
        
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "grey" }} />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="student"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  
  );
}

export default App;
