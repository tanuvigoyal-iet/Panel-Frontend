import Dashboard from './pages/Dashboard/Dashboard';
import RegularCLassList from './pages/RegularClassList/RegularClassList';
import ExClassList from './pages/ExClassList/ExClassList';
import RegularFacultyAllocation from './pages/RegularFacultyAllocation/RegularFacultyAllocation';
import ExFacultyAllocation from './pages/ExFacultyAllocation/ExFacultyAllocation';
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
        <Route path="/RegularClassList" element={<RegularCLassList />} />
        <Route path="/ExClassList" element={<ExClassList />} />
        <Route path="/RegularFacultyAllocation" element={<RegularFacultyAllocation />} />
        <Route path="/ExFacultyAllocation" element={<ExFacultyAllocation />} />
        
      </Routes>

    </div>
  );
}

export default App;
