import React, { useState } from "react";
import './FilterColumn.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { ReactComponent as ArrowIcon } from '../../../../icons/arrow-right.svg';
import { ReactComponent as ClearIcon } from '../../../../icons/x.svg';


function FilterColumn({passStateFunc, passRegionFilterFunc, passDomicileFilterFunc}: {passStateFunc : Function, passRegionFilterFunc : Function, passDomicileFilterFunc : Function}) {

  const [showClear, setShowClear] = useState(false);
  
  const showManagersSection = () => {
    passStateFunc();
  }

  const applyRegionCheckbox = (checkboxTarget: HTMLInputElement, filterLabel: string) => {
    passRegionFilterFunc(filterLabel);
    if(checkboxTarget.checked) {
      setShowClear(true);
    }
    else {
      var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
      if(checkboxes.length === 0){
        setShowClear(false);
      }
    }
  }

  const applyDomicileCheckbox = (checkboxTarget: HTMLInputElement, filterLabel: string) => {
    passDomicileFilterFunc(filterLabel);
    if(checkboxTarget.checked) {
      setShowClear(true);
    }
    else {
      var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
      if(checkboxes.length === 0){
        setShowClear(false);
      }
    }
  }

  const clearAllCheckboxes = () => {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(input => {
      (input as HTMLInputElement).checked = false;
    });
    passRegionFilterFunc('');
    passDomicileFilterFunc('');
    setShowClear(false);
  }

    return (
      <div className="FilterColumn">
        <div className="FilterHeader">
          <div className="FilterHeaderText">Filter</div>
          {showClear && 
          <button className="ClearAllButton" onClick={clearAllCheckboxes}>
            <ClearIcon style={{"margin": "auto"}}/>
            <p>Clear All </p>
          </button>}
        </div>
        <div className="Subtitle"> Region </div>
        <div>
          <FilterCheckbox onCheckCheckbox={applyRegionCheckbox} filterLabel="UK Equities" filterSH="UK"/>
          <FilterCheckbox onCheckCheckbox={applyRegionCheckbox} filterLabel="Global Equities" filterSH="Global"/>
          <FilterCheckbox onCheckCheckbox={applyRegionCheckbox} filterLabel="European Equities" filterSH="Europe"/>
          <FilterCheckbox onCheckCheckbox={applyRegionCheckbox} filterLabel="Emerging Markets Equities" filterSH="Emerging Markets"/>
          <FilterCheckbox onCheckCheckbox={applyRegionCheckbox} filterLabel="Asian Equities" filterSH="Asia"/>
        </div>
        <div className="Subtitle"> Domicile </div>
        <div>
          <FilterCheckbox onCheckCheckbox={applyDomicileCheckbox} filterLabel="Dublin (Irish ICAV)" filterSH="Dublin"/>
          <FilterCheckbox onCheckCheckbox={applyDomicileCheckbox} filterLabel="London (UK OIEC)" filterSH="London"/>
        </div>
        <div className="ShowManagers">
          <button onClick={showManagersSection}> 
            <p>Show Managers</p>
            <ArrowIcon className="ArrowIcon" style={{"backgroundColor": "teal",
                "marginTop": "auto",
                "marginBottom": "auto",
                "marginLeft": "20%",
                "borderRadius" : "12px",
                "transform": "scale(1.5)"}} stroke="white"/>
          </button>
        </div>
      </div>
    );
  }

export default FilterColumn;