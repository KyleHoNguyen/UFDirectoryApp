import RemoveBuilding from "./RemoveBuilding";

function ViewBuilding({data, selectedBuilding, buildingUpdate}) {

  //Finds selectedBuilding from the data using .find() function
  //Needed to use Arrray.from() because data was not registered as an array
  const selectedCard = Array.from(data).find(building => building.id === selectedBuilding);
  //If there is no building selected then display empty card
  if(!selectedCard){
    return(
      <div className="card">
        <div className="card-header">View Building:</div>
          <div className='card-body'>
          <i>Click on a name to view more information</i>
          <p>{''}</p>
          <p><b>Code: </b></p>
          <p><b>Name: </b></p>
          <p><b>Address: </b></p>
          <p><b>Coordinates: </b></p>

          <RemoveBuilding 
          data={data}
          id = {selectedBuilding}
          buildingUpdate= {buildingUpdate}
          />
      </div>
    </div>
    );
  }
  //if there IS a selected building then return this card
  return (
    <div className="card">
      <div className="card-header">View Building:</div>
      <div className='card-body'>
        <i>Click on a name to view more information</i>
        <p>{''}</p>
        {/* always display building code and name */}
        <p><b>Code: </b>{selectedCard.code}</p>
        <p><b>Name: </b>{selectedCard.name}</p>

        {/* only display these if they exist */}
        {selectedCard.address ? <p><b>Address:</b> {selectedCard.address}</p> : null}
        {selectedCard.coordinates ? <p><b>Coordinates:</b> {selectedCard.coordinates.latitude} ,  {selectedCard.coordinates.longitude}</p>: null}

        {/* the remove building button */}
        <RemoveBuilding 
        data={data}
        id = {selectedBuilding}
        buildingUpdate= {buildingUpdate}
        />
      </div>
    </div>
  );
}

export default ViewBuilding;
