import React from "react";
import './ManagersListSection.css';
import ManagerSquare from "../ManagerSquare/ManagerSquare";
import FilterManagerButtons from "../../FilterManagerButtons/FilterManagerButtons";
import * as managersData from "../../../../constants/ManagersData";

function ManagersListSection() {
    return (
      <div className="ManagersListSection">
        <div className="FilterByManager">
          <p className="FilterByManagerText">Filter by Manager</p>
          <FilterManagerButtons/>
          {/* <p>All A B C D F J K L M N P R S T U W</p> */}
        </div>
        <div className="ListOfManagers">
          <ManagerSquare data={managersData.managerOne}/>
          <ManagerSquare data={managersData.managerTwo}/>
          <ManagerSquare data={managersData.managerThree}/>
          <ManagerSquare data={managersData.managerFour}/>
          <ManagerSquare data={managersData.managerFive}/>
          <ManagerSquare data={managersData.managerSix}/>
          <ManagerSquare data={managersData.managerSeven}/>
        </div>
      </div>
    );
  }

export default ManagersListSection;