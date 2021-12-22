import React, { useState } from 'react'
import './App.css';
import AddUser from './components/User/AddUser';
import Card from './components/UI/Card';
import AddSidebar from './components/SIdebar/AddSidebar';
import { LoginContext } from './Context/LoginContext';
function App() {
  const [Display, setDisplay] = useState(false);
    const [email, setEmail] = useState('');
  return (
    <div className="App">
      <LoginContext.Provider value={{Display, setDisplay, email, setEmail}}>
      {Display === true ? (  <div className="first_section"><AddSidebar /></div>) : (<></>)}
      {/* {!Display &&  <div className="first_section"><AddSidebar /></div>} */}
        <div className="second_section"> <Card>
          <AddUser />
        </Card>
        </div>
      </LoginContext.Provider>
    </div>
  );
}
export default App;