import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { useState ,useEffect} from 'react';

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

  const sectionData= sortedSectionWiseData.filter((sectionData)=>{
    const sec=sectionData[0].section;
    return sec===section && sectionData;
  })

//   sectionData.sort((a, b) => a.year - b.year);
//   const flatSectionData = sectionData[0];

//   const [colorCounts, setColorCounts] = useState({
//     red: 0,
//     yellow: 0,
//     green: 0
//   });

//   useEffect(() => {
//     // Only run if flatSectionData actually changes
//     if (flatSectionData && flatSectionData.length > 0) {
//       const counts = flatSectionData.reduce(
//         (acc, item) => {
//           if (item.allocationStatus === 0) acc.red++;
//           if (item.allocationStatus === 1) acc.yellow++;
//           if (item.allocationStatus === 2) acc.green++;
//           return acc;
//         },
//         { red: 0, yellow: 0, green: 0 }
//       );
//       setColorCounts(counts);
//     }
//   }, []);

//   console.log("baby")

//   console.log(flatSectionData)

//   console.log("ye lo counts: " + colorCounts);

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
      <p>Total sections - {sections.length} </p>
      </div>

      <div>
      {flatSectionData.map((item) => (
        <p key={item.classId}
        style={{
        color: item.allocationStatus === 0 ? '#ED1A1D' : 
               item.allocationStatus === 1 ? '#D9DC22' : 
               item.allocationStatus === 2 ? '#608F0D' : '#B0B0B0'
        }}
        >
        <NavLink to="/RegularFacultyAllocation"  style={{ textDecoration: 'none', color: 'inherit' }}>
           {item.year === 1 && '1st year'}
           {item.year === 2 && '2nd year'}
           {item.year === 3 && '3rd year'}
           {item.year === 4 && '4th year'}
        </NavLink>
  </p>
))}
      </div>

    </div>
  );
};

export default RegularCard;