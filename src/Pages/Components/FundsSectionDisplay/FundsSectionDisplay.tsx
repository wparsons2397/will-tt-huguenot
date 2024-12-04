import React, { MouseEvent, useState } from "react";
import './FundsSectionDisplay.css';
import FundTable from "../FundTableComponents/FundTable/FundTable";
import FundGrid from "../FundGridComponents/FundGrid/FundGrid";
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as MenuIcon } from '../../../icons/menu.svg';
import { ReactComponent as GridIcon } from '../../../icons/grid.svg';


function FundsSectionDisplay({activeRegionFilters, activeDomicileFilters}: {activeRegionFilters: Array<string>, activeDomicileFilters: Array<string>}) {
  
  const [showGrid, setShowGrid] = useState(false);

  const onClickGrid = (e: MouseEvent<HTMLElement>) => {
    if(e.currentTarget.id !== null) {
      if (!e.currentTarget.classList.contains("Selected")) {
        e.currentTarget.classList.add("Selected");
        document.getElementById("List")?.classList.remove("Selected");
        setShowGrid(true);
      }
    }
  }

  const onClickList = (e: MouseEvent<HTMLElement>) => {
    if(e.currentTarget.id !== null) {
      if (!e.currentTarget.classList.contains("Selected")) {
        e.currentTarget.classList.add("Selected");
        document.getElementById("Grid")?.classList.remove("Selected");
        setShowGrid(false);
      }
    }
  }

    return (
      <div className="FundsSectionDisplay">
        <div className="FundsSectionDisplayFilters">
          <div className="SearchBarContent">
            <SearchIcon className="SearchIcon"/>
            <input
              className="SearchBar"
              type="text"
              placeholder="Search by fund name, ISIN, benchmark, manager"
            />
          </div>
          <div className="DoubleButtons">
            <button className="Grid" id="Grid" onClick={onClickGrid}> 
              <MenuIcon style={{"backgroundColor": "teal", "margin": "auto", "borderRadius" : "12px", "transform": "scale(1.5)"}} stroke="white"/> 
              <p>Grid View</p>
            </button>
            <button className="List Selected" id="List" onClick={onClickList}>
              <p>List View</p>
              <GridIcon style={{"backgroundColor": "teal", "margin": "auto", "borderRadius" : "12px", "transform": "scale(1.5)"}} stroke="white"/> 
            </button>
          </div>
        </div>
        {showGrid && <FundGrid activeRegionFilters={activeRegionFilters} activeDomicileFilters={activeDomicileFilters}/>}
        {!showGrid && <FundTable activeRegionFilters={activeRegionFilters} activeDomicileFilters={activeDomicileFilters}/>}
      </div>
    );
  }

export default FundsSectionDisplay;