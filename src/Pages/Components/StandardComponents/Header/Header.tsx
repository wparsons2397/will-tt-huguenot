import React from "react";
import './Header.css';
import { ReactComponent as SearchIcon } from '../../../../icons/search.svg';
import { ReactComponent as UpChevron } from '../../../../icons/chevron-up.svg';
import { ReactComponent as DownChevron } from '../../../../icons/chevron-down.svg';
import { ReactComponent as UserIcon } from '../../../../icons/user.svg';



function Header() {
    return (
      <div className="Header">
        <div className="LogoPng">
          <img src={`images/JOH_logo.svg`}></img>
        </div>
        <div className="HeaderDropdownList">
          <button className="HeaderDropdownButton">About  <DownChevron/> </button>
          <button className="HeaderDropdownButton">
            <div className="Underlined">Funds </div> <UpChevron/>
          </button>
          <button className="HeaderDropdownButton">Insights  <DownChevron/></button>
          <button className="HeaderDropdownButton">Resources  <DownChevron/></button>
          <button className="HeaderDropdownButton">Contact</button>
        </div>
        <div className="UKProfessionalOval">
          <UserIcon className="UserIcon" style={{"borderRadius": "50%",
                                                "border": "1px solid var(--teal)",
                                                "backgroundColor": "var(--teal)",
                                                "color": "var(--white)",
                                                "transform": "scale(1.3)"}}/>
          <div className="OvalText"> UK | Professional </div>
        </div>
        <SearchIcon className="HeaderSearch"/>
      </div>
    );
  }

export default Header;