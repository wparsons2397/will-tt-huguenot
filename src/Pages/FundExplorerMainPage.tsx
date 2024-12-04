import React, { useState, useEffect } from "react";
import Header from "./Components/StandardComponents/Header/Header";
import Banner from "./Components/StandardComponents/Banner/Banner";
import './FundExplorerMainPage.css';
import FilterColumn from "./Components/SidebarFilter/FilterColumn/FilterColumn";
import FundsSectionDisplay from "./Components/FundsSectionDisplay/FundsSectionDisplay";
import ManagersListSection from "./Components/ManagerItems/ManagersListSection/ManagersListSection";
import Footer from "./Components/StandardComponents/Footer/Footer";


function FundExplorerMainPage() {

  let emptyString: string[];
  emptyString = [];
  const [showManagers, setShowManagers] = useState(false);
  const [regionFilters, setRegionFilters] = useState(emptyString);
  const [domicileFilters, setDomicileFilters] = useState(emptyString);

  const showManagersSection = () => {
    setShowManagers(!showManagers);
  }

  const applyRegionFilter = (filterLabel: string) =>
  {
    const foundIndex = regionFilters.indexOf(filterLabel);
    if(filterLabel === '')
    {
      setRegionFilters(regionFilters.filter((elem) => elem === filterLabel));
    }
    else if(foundIndex === -1)
    {
      setRegionFilters(regionFilters.concat(filterLabel));
    }
    else {
      setRegionFilters(regionFilters.filter((elem) => elem !== filterLabel));
    }
  }

  const applyDomicileFilter = (filterLabel: string) =>
    {
      const foundIndex = domicileFilters.indexOf(filterLabel);
      if(filterLabel === '')
      {
        setDomicileFilters(domicileFilters.filter((elem) => elem === filterLabel));
      }
      else if(foundIndex === -1)
      {
        setDomicileFilters(domicileFilters.concat(filterLabel));
      }
      else {
        setDomicileFilters(domicileFilters.filter((elem) => elem !== filterLabel));
      }
    }


    return (
      <div>
        <Header/>
        <Banner/>
        {showManagers === true && 
          <ManagersListSection/>
        }
        <div className="DualContent">
          <FilterColumn passStateFunc={showManagersSection} passRegionFilterFunc={applyRegionFilter} passDomicileFilterFunc={applyDomicileFilter}/>
          <FundsSectionDisplay activeRegionFilters={regionFilters} activeDomicileFilters={domicileFilters}/>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }

export default FundExplorerMainPage;