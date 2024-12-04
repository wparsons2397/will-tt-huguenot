import React, { useEffect } from "react";
import './FundGrid.css';
import FundGridItem from "../FundGridItem/FundGridItem";
import * as data from "../../../../constants/AllRowData";

function FundGrid({ activeRegionFilters, activeDomicileFilters }: {activeRegionFilters: Array<string>, activeDomicileFilters: Array<string>}) {

    useEffect(() => {
        let allRows = document.querySelectorAll(".FundGridEntity");
        allRows.forEach((oneGrid) => {
            const regionString = oneGrid.children[0].children[1].className;
            const domicileString = oneGrid.children[0].children[0].children[2].className;
            const gridId = oneGrid.id;
            if (activeRegionFilters.length === 0 && activeDomicileFilters.length === 0) {
                document.getElementById(gridId)?.classList.remove("Hidden");
            }
            else {
                let filterOutRegion = false;
                let filterOutDomicile = false;
                if(regionString !== null && regionString !== undefined && activeRegionFilters.length !== 0) {
                    const foundFilter = activeRegionFilters.indexOf(regionString);
                    if (foundFilter === -1) {
                        filterOutRegion = true;
                    }
                    else {
                        filterOutRegion = false;
                    }
                }
                if(domicileString !== null && domicileString !== undefined && activeDomicileFilters.length !== 0) {
                    const foundFilter = activeDomicileFilters.indexOf(domicileString);
                    if (foundFilter === -1) {
                        filterOutDomicile = true;
                    }
                    else {
                        filterOutDomicile = false;
                    }
                }
                if(filterOutRegion === false && filterOutDomicile === false)
                {
                    var temp = document.getElementById(gridId);
                    document.getElementById(gridId)?.classList.remove("Hidden");
                }
                else{
                    var temp = document.getElementById(gridId);
                    document.getElementById(gridId)?.classList.add("Hidden");
                }
            }
        });
    });

    return (
        <div className="FundGrid">
            <div className="FundGridRow">
                <div className="FundGridEntity" id="one"> <FundGridItem data={data.rowOne}/></div>
                <div className="FundGridEntity" id="two"> <FundGridItem data={data.rowTwo}/></div>
                <div className="FundGridEntity" id="three"> <FundGridItem data={data.rowThree}/></div>
            </div>
            <div className="FundGridRow">
                <div className="FundGridEntity" id="four"><FundGridItem data={data.rowFour}/></div>
                <div className="FundGridEntity" id="five"><FundGridItem data={data.rowFive}/></div>
                <div className="FundGridEntity" id="six"><FundGridItem data={data.rowSix}/></div>
            </div>
            <div className="FundGridRow">
                <div className="FundGridEntity" id="seven"><FundGridItem data={data.rowSeven}/></div>
                <div className="FundGridEntity" id="eight"><FundGridItem data={data.rowEight}/></div>
                <div className="FundGridEntity" id="nine"><FundGridItem data={data.rowNine}/></div>
            </div>
            <div className="FundGridRow">
                <div className="FundGridEntity" id="ten"><FundGridItem data={data.rowTen}/></div>
                <div className="FundGridEntity" id="eleven"><FundGridItem data={data.rowEleven}/></div>
                <div className="FundGridEntity" id="twelve"><FundGridItem data={data.rowTwelve}/></div>
            </div>
            <div className="FundGridRow">
                <div className="FundGridEntity" id="thirteen"><FundGridItem data={data.rowThirteen}/></div>
            </div>
        </div>
    );
  }

export default FundGrid;