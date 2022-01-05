import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userlist from './Userlist';
import Usercreate from './Usercreate';
import Useredit from './Useredit';

function App() {
  return (
<BrowserRouter>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
            
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/users" element={<Userlist />}></Route>
                <Route path="/usercreate" element={<Usercreate/>}></Route>
                <Route path="/useredit/:id" element={<Useredit/>}></Route>
                <Route path="/userdelete/:id" element={<Useredit/>}></Route>
              </Routes>
           
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
