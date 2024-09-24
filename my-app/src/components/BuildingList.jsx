import { useEffect, useState } from "react";

function BuildingList( {data, filterText, selectedUpdate, maxID, setMaxID} ) {
  // filteredData tha uses useState for everytime it changes
  const [filteredData, setFilteredData] = useState(data);

  // useEffect() to only render when filterText or data changes
  // uses .filter() to set newFilteredData as the array
  // of buildings that have the code or building name
  useEffect(() => {
    // returns list of filtered building code or name
    var newFilteredData = Array.from(data).filter(building => building.name.toLowerCase().includes(filterText.toLowerCase()) || building.code.toLowerCase().includes(filterText.toLowerCase()));

    // sets list after sortig it alphabetically
    newFilteredData.sort((a, b) => a.code.localeCompare(b.code));
    setFilteredData(newFilteredData);
  }, [filterText, data]);
  
  // Loops through directory and prints out code and building ID
  const buildingList = filteredData
    .map(directory => {
      function handleClick(){
        selectedUpdate(directory.id);
      }
      // Keeps track of max ID
      if( directory.id > maxID){
        setMaxID(directory.id);
      }
      return (
          <tr key={directory.id}>
            <td>{directory.code} </td>
            <td onClick={handleClick}> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;