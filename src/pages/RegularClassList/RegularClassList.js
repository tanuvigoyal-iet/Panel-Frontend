
import {useEffect,useState} from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice/dataSlice';
const RegularClassList = () => {

  // const API_URL = "http://localhost:3002/api/RegularClassList";

  // const [loading, setLoading] = useState(false);
  // const [classes, setClasses] = useState([]);

  // async function fetchData(){
  //   setLoading(true);
  //   try {
  //     const response=await fetch(API_URL);
  //     const data=await response.json();
  //     setClasses(data);
  //     console.log("mera data")
  //     console.log(classes);

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
             return <Card deptData={dept} key={index} />
           }) 
        }
        </div>
        )
    }
    </div>
  );
};

export default RegularClassList;