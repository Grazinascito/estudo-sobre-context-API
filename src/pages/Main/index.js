import "./style.css";
import EditProfile from "../../components/EditProfile/index";
import UserProfile from "../../components/UserProfile";

function Main() {
  return (
    <main>
      <div className="items-main left">
        <EditProfile />
      </div>
      <div className="items-main">
        <UserProfile />
      </div>
      
    </main>
  );
}

export default Main;
