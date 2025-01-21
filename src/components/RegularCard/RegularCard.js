import { NavLink } from "react-router-dom";

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

  
  

  const sortedData1=sectionWiseData[0].sort((a, b) => a.year - b.year);
  const sortedData2=sectionWiseData[1].sort((a, b) => a.year - b.year);

  return (
    <div>

      <div>
        <p>{deptData[0].deptName}</p>
      </div>

      <div>
        <p>SEC A</p>
        <p>SEC B</p>
      </div>

      <div>
        <div>
          {
            sortedData1.map((classData) => {
            return (
              <NavLink to="/RegularFacultyAllocation">
                <div key={classData.classId}>
                  {`${classData.year} year`}
                </div>
              </NavLink>
            );
          })}
        </div>

        <div>
          {
            sortedData2.map((classData) => {
            return (
              <NavLink to="/RegularFacultyAllocation">
                <div key={classData.classId}>
                  {`${classData.year} year`}
                </div>
              </NavLink>
            );
          })}
        </div> 
      </div>

    </div>
  );
};

export default RegularCard;