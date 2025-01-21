import Dashboard from './pages/Dashboard/Dashboard';
import RegularFacultyAllocation from './pages/RegularFacultyAllocation/RegularFacultyAllocation';
import ExFacultyAllocation from './pages/ExFacultyAllocation/ExFacultyAllocation';
import FacultyAllocation from './pages/FacultyAllocation/FacultyAllocation';
import {Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Heading from './components/Heading/Heading';

function App() {

  return (
    <div>
      <Heading/>
      <Sidebar/>

      <Routes>
        <Route path="/" element={<h1>Tanuvi Goyal</h1>}/>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FacultyAllocation" element={<FacultyAllocation />} />
        <Route path="/RegularFacultyAllocation" element={<RegularFacultyAllocation />} />
        <Route path="/ExFacultyAllocation" element={<ExFacultyAllocation />} />
        
      </Routes>

    </div>
  );
}

export default App;
