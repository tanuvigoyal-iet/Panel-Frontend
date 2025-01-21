import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';

const RegularFacultyAllocation = () => {

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