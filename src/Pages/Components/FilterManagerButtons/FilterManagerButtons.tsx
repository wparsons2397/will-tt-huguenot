import React, { MouseEvent } from "react";
import { ReactComponent as ClearIcon } from '../../../icons/x.svg';

import './FilterManagerButtons.css';

function FilterManagerButtons() {

  const onClickChangeClass = (e: MouseEvent<HTMLElement>) => {
    if(e.currentTarget.id !== null) {
      if (e.currentTarget.classList.contains("Selected")) {
        e.currentTarget.classList.remove("Selected");
      }
      else {
        e.currentTarget.classList.add("Selected");
      }
    }
  }

  const onClickClear = (e: MouseEvent<HTMLElement>) => {
    document.querySelectorAll(".ManagerButton").forEach(button => {
      button.classList.remove("Selected");
    });
    document.getElementById("ALL")?.classList.add("Selected");
  }

    return (
      <div className="FilterManagerButtons">
        <button className="ManagerButton Selected" id="ALL" onClick={onClickChangeClass}> ALL </button>
        <button className="ManagerButton" id="A" onClick={onClickChangeClass}> A </button>
        <button className="ManagerButton" id="B" onClick={onClickChangeClass}> B </button>
        <button className="ManagerButton" id="C" onClick={onClickChangeClass}> C </button>
        <button className="ManagerButton" id="D" onClick={onClickChangeClass}> D </button>
        <button className="ManagerButton" id="F" onClick={onClickChangeClass}> F </button>
        <button className="ManagerButton" id="J" onClick={onClickChangeClass}> J </button>
        <button className="ManagerButton" id="K" onClick={onClickChangeClass}> K </button>
        <button className="ManagerButton" id="L" onClick={onClickChangeClass}> L </button>
        <button className="ManagerButton" id="M" onClick={onClickChangeClass}> M </button>
        <button className="ManagerButton" id="N" onClick={onClickChangeClass}> N </button>
        <button className="ManagerButton" id="P" onClick={onClickChangeClass}> P </button>
        <button className="ManagerButton" id="R" onClick={onClickChangeClass}> R </button>
        <button className="ManagerButton" id="S" onClick={onClickChangeClass}> S </button>
        <button className="ManagerButton" id="T" onClick={onClickChangeClass}> T </button>
        <button className="ManagerButton" id="U" onClick={onClickChangeClass}> U </button>
        <button className="ManagerButton" id="W" onClick={onClickChangeClass}> W </button>
        <button className="ManagerButtonClear" id="Clear" onClick={onClickClear}> <ClearIcon/> </button>
      </div>
    );
  }

export default FilterManagerButtons;