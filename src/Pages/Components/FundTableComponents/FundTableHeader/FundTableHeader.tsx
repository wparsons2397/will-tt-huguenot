import React from "react";
import './FundTableHeader.css';


function FundTableHeader() {
    return (
      <div className="FundTableHeader">
        <div className="HeaderName"> Fund name / Benchmark </div>
        <div className="HeaderItem"> Domicile </div>
        <div className="HeaderItem"> Region </div>
        <div className="HeaderItem"> Holdings </div>
        <div className="HeaderItem"> Fund size </div>
        <div className="HeaderItem"> Launch date </div>
        <div className="Spacer"/>
      </div>
    );
  }

export default FundTableHeader;