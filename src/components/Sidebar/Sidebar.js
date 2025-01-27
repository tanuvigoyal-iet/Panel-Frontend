import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Sidebar = () => {
    return (
      <div>
      My Sidebar
      <div>

      </div>

      <div>
      <NavLink> 
        <CgProfile />
        <div>
          MY PROFILE
        </div>
      </NavLink>

      <div></div>

      <NavLink to="/Dashboard"> 
        <CgProfile />
        <div>
          DASHBOARD
        </div>
      </NavLink>

      <div></div>

      <NavLink to="/FacultyAllocation"> 
        <CgProfile />
        <div>
          FACULTY ALLOCATION
        </div>
      </NavLink>

      <div></div>

      <NavLink> 
        <CgProfile />
        <div>
          CHECK FACULTY STATUS
        </div>
      </NavLink>

      <div></div>

      <NavLink> 
        <CgProfile />
        <div>
          VIVA EXAMINER ALLOCATION
        </div>
      </NavLink>

      <div></div>

      <NavLink> 
        <CgProfile />
        <div>
          CHECK VIVA STATUS
        </div>
      </NavLink>

      <div></div>

      <NavLink> 
        <CgProfile />
        <div>
          EXTERNAL EXPERT LIST
        </div>
      </NavLink>

      <div></div>

      <NavLink> 
        <CgProfile />
        <div>
          NOTIFICATIONS
        </div>
        <div></div>
      </NavLink>

      </div>
  
      </div>
    );
  };
  
  export default Sidebar