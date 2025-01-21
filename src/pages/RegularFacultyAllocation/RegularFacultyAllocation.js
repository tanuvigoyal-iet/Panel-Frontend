import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';

const RegularFacultyAllocation = () => {
    
  // const API_URL="http://localhost:3002/api/RegularClassList/RegularFacultyAllocation";

  // const [loading, setLoading] = useState(false);
  // const [classes, setClasses] = useState([]);

  // async function fetchData(){
  //   setLoading(true);
  //   try {
  //     const response=await fetch(API_URL);
  //     const data=await response.json();
  //     setClasses(data);
  //     console.log(classes)

  //   } catch (error) {
  //     console.log("error fetching data");
  //     setClasses([]);
  //   }
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const API_URL = 'http://localhost:3002/api/RegularClassList/RegularFacultyAllocation';
    dispatch(fetchData(API_URL));
  }, [dispatch]);

  console.log(data);
   

  return (
    <div>
  
    </div>
    );
  };
  
export default RegularFacultyAllocation;