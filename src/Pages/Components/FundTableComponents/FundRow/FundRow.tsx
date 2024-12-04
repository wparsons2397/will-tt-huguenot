import React from "react";
import './FundRow.css';
import { ReactComponent as ArrowIcon } from '../../../../icons/arrow-right.svg';
import { StringLiteral } from "typescript";

interface rowData {
  data:  {
    fundName: string;
    fundSubName: string;
    fundDomicile: string;
    fundFullDomicile: string;
    fundRegion: string;
    fundFullRegion: string;
    fundHoldings: number;
    fundSize: string;
    fundLaunchDate: string;
    fundRowColor: string;
  }
} 

/* 
region: asia -> color blue-green
region: europe -> petrol-blue
region: emerging markets -> teal
region: global -> orange
region: UK -> light-blue
*/

function FundRow({ data }: rowData) {
    return (
      <div className="FundRow" style={{"borderLeft": `4px solid var(--${data.fundRowColor})`}}>
        <div className="FundName">
          <div className="FundNameTop"> {data.fundName} </div>
          <div className="FundNameBottom"> {data.fundSubName} </div>
        </div>
        <div className="FundRowItemDomicile">{data.fundDomicile}</div>
        <div className="FundRowItemRegion">{data.fundRegion}</div>
        <div className="FundRowItem"> {data.fundHoldings} </div>
        <div className="FundRowItem"> GBP {data.fundSize} </div>
        <div className="FundRowItem"> {data.fundLaunchDate} </div>
        <button className="RowButton"><ArrowIcon stroke="teal"/> </button>
      </div>
    );
  }

export default FundRow;