
import {useEffect,useState} from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
const RegularClassList = () => {

  const API_URL = "http://localhost:3002/api/RegularClassList";

  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);

  async function fetchData(){
    setLoading(true);
    try {
      const response=await fetch(API_URL);
      const data=await response.json();
      setClasses(data);
      console.log("mera data")
      console.log(classes);

    } catch (error) {
      console.log("error fetching data");
      setClasses([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const groupedData = Object.values(
    classes.reduce((acc, item) => {
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
        </div>)
    }
    </div>
  );
};

export default RegularClassList;