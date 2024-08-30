import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/phase-one/NavBar';

function App() {
  return (
   <> 
       <main >
        <Outlet/>
       </main>
   </>
  );
}

export default App;
