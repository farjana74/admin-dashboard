import logo from './logo.svg';
import './App.css';

import DashboardHeader from './Pages/Dashboard/DashboardHeader/DashboardHeader';
import DashboardAside from './Pages/Dashboard/DashboardAside/DashboardAside';
import DashboardContent from './Pages/Dashboard/DashboardContent/DashboardContent';

function App() {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <DashboardAside></DashboardAside>
      <DashboardContent></DashboardContent>
      <DashboardContent></DashboardContent>
    </div>
  );
}

export default App;
