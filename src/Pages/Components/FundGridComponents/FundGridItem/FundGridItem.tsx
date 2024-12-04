import React from "react";
import './FundGridItem.css';
import { ReactComponent as ArrowIcon } from '../../../../icons/arrow-right.svg';
import { ReactComponent as DocumentIcon } from '../../../../icons/file-text.svg';

interface gridData {
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


function FundGridItem({ data }: gridData) {
    return (
        <div className="FundGridItem">
            <div className="NavyGridBanner">
                <div className="FundNameTop"> {data.fundName} </div>
                <div className="FundNameBottom">{data.fundFullDomicile}</div>
                <div className={`${data.fundDomicile}`}/>
            </div>
            <div className={`${data.fundRegion}`}/>
            <div className="GridInfo" style={{"borderLeft": `4px solid var(--${data.fundRowColor})`}}>
                <div className="HeaderRow">
                    <div>Fund Size</div>
                    <div>Holdings</div>
                    <div>Launch Date</div>
                </div>
                <div className="DataRow">
                    <div>GBP {data.fundSize}</div>
                    <div>{data.fundHoldings}</div>
                    <div>{data.fundLaunchDate}</div>
                </div>
                <div className="FactSheetRow">
                    <div className="FactSheetGroup">
                        <DocumentIcon className="DocumentIcon"/>
                        <div className="FactSheetText">Monthly Portfolio Fact Sheet </div>
                    </div>
                    <button className="GridButton"><ArrowIcon stroke="teal"/></button>
                </div>
            </div>
        </div>
    );
  }

export default FundGridItem;