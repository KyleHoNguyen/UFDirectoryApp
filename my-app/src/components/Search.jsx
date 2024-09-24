import { useRef } from "react";

function Search({ filterUpdate }) {

  // uses useRef to hold current search value
  const input = useRef('');

  function handleChange() {
    // updates filter/search 
    const inputValue = input.current.value;
    filterUpdate(inputValue);
  }

  // search bar itself
  return (
    <form>
      <span>
        <input
          type="text"
          placeholder="Search UF"
          ref={input}
          onChange = {handleChange}
        />
      </span>
    </form>
  );
}
export default Search;