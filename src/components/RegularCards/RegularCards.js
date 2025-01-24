
import {useEffect,useState} from 'react';
import Spinner from '../Spinner/Spinner';
import RegularCard from '../RegularCard/RegularCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';
const RegularCards = ({selected}) => {

    const [colorCounts, setColorCounts] = useState({
        red: 0,
        yellow: 0,
        green: 0,
    });
    

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const API_URL = 'http://localhost:3002/api/RegularClassList';
    dispatch(fetchData(API_URL));
  }, [dispatch]);

  useEffect(() => {
    const counts = { red: 0, yellow: 0, green: 0 };

    data.forEach((classItem) => {
      switch (classItem.allocationStatus) {
        case 0:
          counts.red++;
          break;
        case 1:
          counts.yellow++;
          break;
        case 2:
          counts.green++;
          break;
        default:
          break;
      }
    });
    setColorCounts(counts);
  }, [data]);

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
            return <RegularCard deptData={dept} key={index} selected={selected} />
           }) 
        }
        </div>
        )
    }
    </div>

    <div>

    </div>
    <h3>Allocation Status Counts</h3>
      <p>Red (0): {colorCounts.red}</p>
      <p>Yellow (1): {colorCounts.yellow}</p>
      <p>Green (2): {colorCounts.green}</p>

    </div>
  );
};

export default RegularCards;