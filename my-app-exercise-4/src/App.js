import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./pages/exercise1";
import Exercise2 from "./pages/exercise2";
import Exercise3 from "./pages/exercise3";
import Exercise4 from "./pages/exercise4";
import Exercise5 from "./pages/exercise5";
import Exercise1Data from "./pages/exercise1data";
import Exercise2Data from "./pages/exercise2data";
import Exercise3Data from "./pages/exercise3data";
import SumDisplay from "./pages/exercise3data1";
import DisplayResult from "./pages/Exercise3data2";
import DisplayQueryParameters from "./pages/exercise3data3";
import React, { Component } from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Exercise1 />} />
          <Route path="/Exercise2" element={<Exercise2 />} />
          <Route path="/Exercise3" element={<Exercise3 />} />
          <Route path="/Exercise4" element={<Exercise4 />} />
          <Route path="/Exercise5" element={<Exercise5 />} />
          <Route path="/Exercise1Data" element={<Exercise1Data />} />
          <Route path="/Exercise2Data" element={<Exercise2Data />} />
          <Route path="/Exercise3Data" element={<Exercise3Data />} />
          <Route path="/Exercise3Data1" element={<SumDisplay />} />
          <Route path="/Exercise3Data2" element={<DisplayResult />} />
          <Route path="/Exercise3Data3" element={<DisplayQueryParameters />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

/*class App extends Component {
  componentDidMount() {
    // Call the promise function when the component mounts
    this.getRandomNumber()
      .then(number => {
        console.log("Random number larger than 5:", number);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  getRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
      if (randomNumber > 5) {
        resolve(randomNumber); // Resolve with the random number if it's larger than 5
      } else {
        reject("Error"); // Reject with an error message if the number is 5 or less
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Promise Example</h1>
        <p>Please check the console for the result.</p>
      </div>
    );
  }
}*/
export default App;