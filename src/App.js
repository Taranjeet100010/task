import './App.css';
import AddUser from './components/User/AddUser';
import Card from './components/UI/Card';
import AddSidebar from './components/SIdebar/AddSidebar';
function App() {
  return (
    <div className="App">
      <div className="first_section"><AddSidebar /></div>
      <div className="second_section"> <Card>
        <AddUser />
      </Card>
      </div>
    </div>
  );
}
export default App;