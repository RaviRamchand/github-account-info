import './App.css';
import { useEffect, useState } from 'react';
import GetData from './GetData';

//Used to send data to the github api
var userName = "RaviRamchand";

/**
 * 
 * @returns A form that asks the user for a github id they want to query and calls the GetData component to display the information to the user
 */
function App() {
  // Handles changes to the Github ID form field
  const [name, setName] = useState(userName);

  /**
   * Is called when the user clicks the "Search User" button
   * Prevents the normal button action from happening, assigns the name the user inputted to the userName variable and clears name when done
   * @param {*} e -Event object
   */
  const search = (e) => {
    e.preventDefault();
    userName = name;
    setName("");
  };

  //Handles the JSON data coming in for Github user
  const [data, setData] = useState(null);

  /**
   * Used to call the Github api with the name the user inputted and calls it again whenever userName is changed 
   */
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then(setData);
  }, [userName]);

  return (
    <div className="App">
      <h1>Github Profile Info</h1>

      <form onSubmit={search}>
        <label>Github ID: </label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        &nbsp;&nbsp;
        <button>Search User</button>
      </form>
      <hr />
      {
        (data) ?
          <GetData name={data.name}
            image={data.avatar_url}
            bio={data.bio}
            followers={data.followers}
            following={data.following}
            url={data.html_url}
            blog={data.blog}
          />
          : ""
      }
    </div>
  );
}

export default App;
