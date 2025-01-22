import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = ({ onSelectionChange }) => {
  const [selections, setSelections] = useState({
    course: 'BE',
    courseType: 'Full time',
    status: 'Regular'
  });

  const handleSelect = (label, selected) => {
    const newSelections = { ...selections, [label]: selected };
    setSelections(newSelections);
    onSelectionChange(newSelections);
  };

  return (
    <div>
      <div>
        <Dropdown
          label="Course"
          options={['BE', 'ME']}
          onSelect={(selected) => handleSelect('course', selected)}
        />
      </div>

      <div>
        <Dropdown
          label="Course Type"
          options={['Full time', 'Part time', 'Internship']}
          onSelect={(selected) => handleSelect('courseType', selected)}
        />
      </div>

      <div>
        <Dropdown
          label="Status"
          options={['Regular', 'Ex']}
          onSelect={(selected) => handleSelect('status', selected)}
        />
      </div>
    </div>
  );
};

export default Navbar;
