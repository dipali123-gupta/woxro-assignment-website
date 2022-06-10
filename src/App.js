import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Properties from './components/Properties';
import Profession from './components/Profession';
import CommercialShop from './components/CommercialShop';
import CommercialOffice from './components/CommercialOffice';
import CommercialLand from './components/CommercialLand';
import CommercialBuilding from './components/CommercialBuilding';
import IndustialBuilding from './components/IndustrialBuilding';
import IndustialLand from './components/IndustrialLand';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Properties></Properties>
     <Banner></Banner>
     <Profession></Profession>
     <CommercialShop></CommercialShop>
     <CommercialOffice></CommercialOffice>
     <CommercialLand></CommercialLand>
     <CommercialBuilding></CommercialBuilding>
     <IndustialBuilding></IndustialBuilding>
     <IndustialLand></IndustialLand>
    </div>
  );
}

export default App;
