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

import CoWorkingSpace from './components/CoWorkingSpace';
import PrivateOffice from './components/PrivateOffice';
import MeetingRoom from './components/MeetingRoom';
import Footer from './components/Footer';
import Bannerform from './components/Bannerform';




function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Properties></Properties>
     <Banner></Banner>
     <Bannerform></Bannerform>
     <Profession></Profession>
     <CommercialShop></CommercialShop>
     <CommercialOffice></CommercialOffice>
     <CommercialLand></CommercialLand>
     <CommercialBuilding></CommercialBuilding>
     <IndustialBuilding></IndustialBuilding>
     <IndustialLand></IndustialLand>
     <CoWorkingSpace></CoWorkingSpace>
     <PrivateOffice></PrivateOffice>
     <MeetingRoom></MeetingRoom>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
