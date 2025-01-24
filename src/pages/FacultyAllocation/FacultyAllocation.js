import {useEffect,useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FilterSession from '../../components/FilterSession/FilterSession';
import RegularCards from '../../components/RegularCards/RegularCards';
import ExCards from '../../components/ExCards/ExCards';

const FacultyAllocation = () => {
    const [selected, setSelected] = useState({
        courseName: 'BE',
        courseType: 'full time',
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
        {selected.status === 'Regular' && <RegularCards selected={selected} />}
        {selected.status === 'Ex' && <ExCards selected={selected} />}
    </div>

    </div>
  );
};

export default FacultyAllocation;