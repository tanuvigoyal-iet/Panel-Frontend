import {useEffect,useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FilterSession from '../../components/FilterSession/FilterSession';
import RegularCards from '../../components/RegularCards/RegularCards';
import ExCards from '../../components/ExCards/ExCards';

const FacultyAllocation = () => {
    const [selected, setSelected] = useState({
        course: 'BE',
        courseType: 'Full time',
        status: 'Regular'
    });
    const handleSelectionChange = (selections) => {
        setSelected(selections); 
        console.log(selections);
    };
    
  return (
    <div>
    
    <div>
      <div>
        FACULTY ALLOCATION
      </div>
      <div>
        <FilterSession/>
      </div>
    </div>

    <div>
        <Navbar onSelectionChange={handleSelectionChange}/>
    </div>

    <div>
        {selected.status === 'Regular' && <RegularCards/>}
        {selected.status === 'Ex' && <ExCards />}
    </div>

    </div>
  );
};

export default FacultyAllocation;