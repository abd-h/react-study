
import './App.css';
import AddProject from './components/AddProject';
import CreateNewProject from './components/CreateNewProject';

function App() {
  return (
    <div className="outline flex  space-x-8 h-1/1 gap-72">
      <AddProject />
      <CreateNewProject />
    </div>
  );
}

export default App;
