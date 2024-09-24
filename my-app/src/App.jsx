import React, { useState } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import './App.css';

function App({ data }) {
  // creates useState variables to hold filterText, selectedBuilding, building list, and maxID
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0); 
  const [buildingList, setBuildingList] = useState(data);
  const [maxID, setMaxID] = useState(0);

  //updata functions for filterText, selectedBilding, and buildlingList
  function filterUpdate(value) {
    setFilterText(value);
  }
  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }
  function buildingUpdate(list){
    setBuildingList(list);
  }

  return (
    // header
    <div className="bg">
      <div className="title ">
        <div className = "header">
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 43.5 15" height="36" width="36" alt="U F Logo"><g fill="#FFF"><path d="M31.1 24.2v-7.5h6.8v-4.9h-6.8V4.9h7.5v2.7h4.9V0H23.7v4.9h1.8v19.3h-1.8v4.9h9.1v-4.9h-1.7zM21.1 18.1V4.9h1.8V0h-9.2v4.9h1.8v11.6c0 4.9-.6 7.2-4 7.2s-4-2.3-4-7.2V4.9h1.8V0H0v4.9h1.8v13.2c0 2.9 0 5.3 1.4 7.4 1.5 2.4 4.3 3.9 8.3 3.9 7.1 0 9.6-3.7 9.6-11.3z"></path></g></svg>
          </h1>
          <span className='title-name'>
            UF.DIRECTORY
          </span>
        </div>
      </div>
      {/* search bar component */}
      <Search 
      filterUpdate={filterUpdate} 
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td><b>Code</b></td>
                  <td><b>Building</b></td>
                </tr>
              </thead>
              {/* table of buildings */}
              <tbody className="list">
                <BuildingList
                  data={buildingList}
                  filterText = {filterText}
                  selectedUpdate={selectedUpdate}
                  maxID = {maxID}
                  setMaxID = {setMaxID}
                />
              </tbody>
              </table>
            </div>
          </div>
          {/* viewBuilding and AddBuilding cards */}
          <div className=" column2">
            <ViewBuilding 
              data={buildingList}
              selectedBuilding = {selectedBuilding}
              buildingUpdate = {buildingUpdate}
            />
            <AddBuilding
              data={buildingList}
              buildingUpdate = {buildingUpdate}
              maxID = {maxID}
              setMaxID = {setMaxID}
            />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;