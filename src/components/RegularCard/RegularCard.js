import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from 'react';

const RegularCard = ({deptData}) => {

  const sectionWiseData = Object.values(
    deptData.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = []; 
      }
      acc[item.section].push(item);       
      return acc;
    }, {})
  );

  const sortedSectionWiseData = sectionWiseData.sort((a, b) => {
    return a[0].section.localeCompare(b[0].section);
  });

  // Create an array of all possible sections
  const sections = sortedSectionWiseData.map((sectionData) => {
    const sectionName = sectionData[0].section; // Extracts the section (A or B)
    return sectionName;
  });

  const [section, setSection] = useState('A');

  return (
    <div>

      <div>
        <p>{deptData[0].deptName}</p>
      </div>

      <div>
      <Dropdown
        label="SEC"
        options={sections}
        onSelect={(selected) => setSection(selected)}
      />
      </div>

    </div>
  );
};

export default RegularCard;