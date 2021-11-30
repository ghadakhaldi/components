import './App.css';
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";
function App() {
  return (
    <div className="App">
      <div className="profile">
 <ProfilePhoto/>
 <FullName/>
 <Address/>
 </div>
    </div>
  );
}

export default App;
