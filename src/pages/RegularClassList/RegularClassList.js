
import {useEffect,useState} from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';
const RegularClassList = () => {

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const API_URL = 'http://localhost:3002/api/RegularClassList';
    dispatch(fetchData(API_URL));
  }, [dispatch]);

  console.log(data);


  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.deptName]) {
        acc[item.deptName] = [];  
      }
      acc[item.deptName].push(item);  
      return acc;
    }, {})
  );

  console.log(groupedData)

  return (
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
             return <Card deptData={dept} key={dept.deptId} />
           }) 
        }
        </div>
        )
    }
    </div>
  );
};

export default RegularClassList;