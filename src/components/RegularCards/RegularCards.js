
import {useEffect,useState} from 'react';
import Spinner from '../Spinner/Spinner';
import RegularCard from '../RegularCard/RegularCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';
const RegularCards = () => {

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const API_URL = 'http://localhost:3002/api/RegularClassList';
    dispatch(fetchData(API_URL));
  }, [dispatch]);

  console.log(data);
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return null; // or return a fallback UI
  }

  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.deptName]) {
        acc[item.deptName] = [];  
      }
      acc[item.deptName].push(item);  
      return acc;
    }, {})
  );

  console.log(groupedData);

  return (
    <div>
    
    <div>
    {
        loading?
        (
        <div>
        <Spinner/>
        </div>
        ):
        (
        <div>
        {
           groupedData.map((dept,index)=>{
             return <RegularCard deptData={dept} key={index} />
           }) 
        }
        </div>
        )
    }
    </div>
    </div>
  );
};

export default RegularCards;