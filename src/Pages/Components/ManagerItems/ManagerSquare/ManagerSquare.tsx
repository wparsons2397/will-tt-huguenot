import React from "react";
import './ManagerSquare.css';

interface managerData {
  data:  {
    managerName: string;
    managerRegion: string;
    managerImagePath: string;
    managerRegionColor: string;
  }
} 

function ManagerSquare({ data }: managerData) {
    return (
      <div className="ManagerSquare" style={{"borderLeft": `4px solid var(--${data.managerRegionColor})`}}>
        <div className="ManagerPicture">
          <img src={data.managerImagePath}></img>
        </div>
        <div className="ManagerName"> {data.managerName} </div>
        <div className="ManagerRegion"> {data.managerRegion} </div>
      </div>
    );
  }

export default ManagerSquare;