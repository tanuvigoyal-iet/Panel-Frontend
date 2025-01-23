
import {useEffect,useState} from 'react';
import Spinner from '../Spinner/Spinner';
import ExCard from '../ExCard/ExCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';
const ExCards = () => {

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const API_URL = 'http://localhost:3002/api/ExClassList';
    dispatch(fetchData(API_URL));
  }, [dispatch]);

  console.log(data);

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return null; // or return a fallback UI
  }

  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];  
      }
      acc[item.year].push(item);  
      return acc;
    }, {})
  );
  console.log("ex year wise data is here ")
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
           groupedData.map((yearData,index)=>{
            return <ExCard yearData={yearData} key={index} />
           }) 
        }
        </div>
        )
    }
    </div>

    </div>
  );
};

export default ExCards;