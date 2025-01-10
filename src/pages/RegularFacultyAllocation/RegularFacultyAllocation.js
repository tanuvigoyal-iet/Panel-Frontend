import { useState, useEffect } from 'react';

const RegularFacultyAllocation = () => {
    
  const API_URL="http://localhost:3002/api/RegularClassList/RegularFacultyAllocation";

  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);

  async function fetchData(){
    setLoading(true);
    try {
      const response=await fetch(API_URL);
      const data=await response.json();
      setClasses(data);

    } catch (error) {
      console.log("error fetching data");
      setClasses([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);
   

  return (
    <div>
  
    </div>
    );
  };
  
export default RegularFacultyAllocation;