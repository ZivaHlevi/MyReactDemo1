import "./Header.css";
import { FiSettings } from "react-icons/fi";
import { GiAbstract053 } from "react-icons/gi";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>THIS IS HEADER- Full Stack Course</h1>
      <div className="icons">
        <a href="">
          <FiSettings size={36} />
        </a>
        <span>
          <GiAbstract053 size={36}/>
        </span>
      </div>
    </div>
  );
}

export default Header;
