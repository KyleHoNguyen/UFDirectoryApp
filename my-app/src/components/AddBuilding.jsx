import React, {useState, useRef} from 'react';
function AddBuilding({data, buildingUpdate, maxID, setMaxID}){
    // creates array of reference for the input
    const newBuilding = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    // deepcopy of data
    var temp = JSON.parse(JSON.stringify(data));

    // defining error messages
    const [errorCode, setErrorCode] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorLat, setErrorLat] = useState('');
    const [errorLong, setErrorLong] = useState('');

    // if submit button is pressed
    function handleSubmit(event){
        event.preventDefault();
        // saves the inputted info 
        const enteredCode = newBuilding[0].current.value;
        const enteredName = newBuilding[1].current.value;
        const enteredLat = newBuilding[3].current.value;
        const enteredLong = newBuilding[4].current.value;

        // series of if statements to validate input
        if(enteredCode.length < 3 || enteredCode.length > 4){
            setErrorCode('*Code must be 3-4 characters long*');
        }
        else if(enteredName == ''){
            setErrorName('*Must have name*');
            setErrorCode('');
        }
        else if(isNaN(enteredLat) || isNaN(enteredLong)){
            setErrorLat('*Must be a number*');
            setErrorLong('*Must be a number*');
            setErrorCode('');
            setErrorName('');
        }
        else{
            // creates building
            var tempBuilding = {
                id: maxID + 1,
                code: newBuilding[0].current.value.toUpperCase(),
                name: newBuilding[1].current.value,
                coordinates: {
                    latitude: newBuilding[3].current.value, 
                    longitude: newBuilding[4].current.value,
                },
                address: newBuilding[2].current.value
                
            };
            // appends the building to the end of the copied data and updates it as new data
            const updatedData = [...temp, tempBuilding];
            buildingUpdate(updatedData);
            setMaxID(maxID + 1);

            // resets input 
            newBuilding[0].current.value = '';
            newBuilding[1].current.value = '';
            newBuilding[2].current.value = '';
            newBuilding[3].current.value = '';
            newBuilding[4].current.value = '';
            
            // resets error messages
            setErrorCode('');
            setErrorName('');
            setErrorLong('');
            setErrorLat('');
            
        }

    }
    return(
        // uses a form for input
        // series of input boxes and error messages
        // creates the submit button with a bootstrap icon
        <form className= "card" onSubmit={handleSubmit}>
            <div className = "card-header">Add Building:</div>
            <div className='card-body'>
                <i>Enter building details</i>
                <p>{''}</p>
                <div className="form-group">
                    <label>Code (Required):</label>
                    <input type="text" id="code" placeholder="Code" ref={newBuilding[0]}/>
                </div>
                {errorCode && <div className="error-message">{errorCode}</div>}
                <div className="form-group">
                    <label>Name (Required):</label>
                    <input type="text" id="name" placeholder="Name" ref={newBuilding[1]}/>
                    
                </div>
                {errorName && <p className="error-message">{errorName}</p>}
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" id="address" placeholder="Address" ref={newBuilding[2]}/>
                </div>
                <div className="form-group">
                    <label>Latitude:</label>
                    <input type="text" id="latitude" placeholder="Latitude" ref={newBuilding[3]}/>
                    
                </div>
                {errorLat && <p className="error-message">{errorLat}</p>}
                <div className="form-group">
                    <label>Longitude:</label>
                    <input type="text" id="longitude" placeholder="Longitude" ref={newBuilding[4]}/>
                    
                </div>
                {errorLong && <p className="error-message">{errorLong}</p>}
                <button className="button1" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z"/>
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z"/>
                        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                    </svg>
                    Add Building
                </button>
            </div>
        </form>
    );

}
export default AddBuilding;