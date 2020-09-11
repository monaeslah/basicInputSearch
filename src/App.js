import React from 'react';
import ReactDOM from "react-dom";
import cities from "./cities.json"

 function App() {
   const [searchTerm, setSearchTerm] = React.useState("");
   const [searchResults, setSearchResults] = React.useState([]);
   const handleChange = e => {
     setSearchTerm(e.target.value);
   };
   React.useEffect(() => {
     let results =[]
     if(searchTerm)
       results= cities.filter(city =>city.toLowerCase().includes(searchTerm));
     else
      results=[] 
     setSearchResults(results.length?[results[0]]: []);
   
   }, [searchTerm]);
   return (
     <div className="App">
         <input type="text" value={searchTerm} onChange={handleChange} />
         <input type="text" className="autocomplete" disabled value={searchResults.join(' ')} />
      
     </div>
   );
 }
 

export default App;
