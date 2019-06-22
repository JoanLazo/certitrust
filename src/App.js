import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login';

const App = () => {

  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const result = await axios(
          '',
        );
        console.log(result.data.results);
        setData(result.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  


return (
  <div className="">
    <Login data={data} /> 
</div>
  
  );
}

export default App;
