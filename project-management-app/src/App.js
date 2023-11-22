// import './App.css';
import AddNewProject from './components/AddNewProject';
import CreateNewProject from './components/CreateNewProject';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CreateNewProject />
      <AddNewProject />
    </div>
  );
}

export default App;
