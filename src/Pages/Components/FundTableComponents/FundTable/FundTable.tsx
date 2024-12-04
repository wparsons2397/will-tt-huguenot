import React, { useState, useEffect } from "react";
import './FundTable.css';
import FundTableHeader from "../FundTableHeader/FundTableHeader";
import FundRow from "../FundRow/FundRow";
import FundTableSpacer from "../FundTableSpacer/FundTableSpacer";
import * as data from "../../../../constants/AllRowData";

function FundTable({ activeRegionFilters, activeDomicileFilters }: {activeRegionFilters: Array<string>, activeDomicileFilters: Array<string>}) {

    useEffect(() => {
        let allRows = document.querySelectorAll(".FundRowEntity");
        allRows.forEach((oneRow) => {
            const regionString = oneRow.firstChild?.childNodes[2].textContent;
            const domicileString = oneRow.firstChild?.childNodes[1].textContent;
            const rowId = oneRow.id;
            if (activeRegionFilters.length === 0 && activeDomicileFilters.length === 0) {
                document.getElementById(rowId)?.classList.remove("Hidden");
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
                    document.getElementById(rowId)?.classList.remove("Hidden");
                }
                else{
                    document.getElementById(rowId)?.classList.add("Hidden");
                }
            }
        });
    });

    return (
        <div className="FundTable">
            <FundTableHeader/>
            <div className="FundRowEntity" id="one"><FundRow data={data.rowOne}/></div>
            <div className="FundRowEntity" id="two"><FundRow data={data.rowTwo}/></div>
            <div className="FundRowEntity" id="three"><FundRow data={data.rowThree}/></div>
            <div className="FundRowEntity" id="four"><FundRow data={data.rowFour}/></div>
            <div className="FundRowEntity" id="five"><FundRow data={data.rowFive}/></div>
            <div className="FundRowEntity" id="six"><FundRow data={data.rowSix}/></div>
            <div className="FundRowEntity" id="seven"><FundRow data={data.rowSeven}/></div>
            <div className="FundRowEntity" id="eight"><FundRow data={data.rowEight}/></div>
            <div className="FundRowEntity" id="nine"><FundRow data={data.rowNine}/></div>
            <div className="FundRowEntity" id="ten"><FundRow data={data.rowTen}/></div>
            <div className="FundRowEntity" id="eleven"><FundRow data={data.rowEleven}/></div>
            <div className="FundRowEntity" id="twelve"><FundRow data={data.rowTwelve}/></div>
            <div className="FundRowEntity" id="thirteen"><FundRow data={data.rowThirteen}/></div>
            <FundTableSpacer/>
        </div>
    );
  }

export default FundTable;