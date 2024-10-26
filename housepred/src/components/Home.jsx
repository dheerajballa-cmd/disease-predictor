// Import necessary modules from React and React Router
import React, { useState } from 'react';
import { symptoms } from "../Utils/data"; // Import symptoms data from a utility file
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import runPrediction from "../Utils/predictAlgorithm"; // Import prediction algorithm function

// Define the Home component
const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing
  const [selectedSymptoms, setSelectedSymptoms] = useState([]); // State to keep track of selected symptoms

  // Function to handle toggling the selection of symptoms
  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms((prev) => 
      prev.includes(symptom) // If the symptom is already selected
        ? prev.filter(s => s !== symptom) // Remove it from the selection
        : [...prev, symptom] // Otherwise, add it to the selection
    );
  };

  // Function to handle the prediction logic when the user clicks the Predict button
  const handlePredict = () => {
    const probabilities = runPrediction(selectedSymptoms); // Run prediction based on selected symptoms
    console.log("Prediction Results:", probabilities); // Log the prediction results for debugging
    navigate('/result', { state: { probabilities } }); // Navigate to the result page with prediction data
  };

  return (
    <div>
      {/* Container for symptom selection */}
      <div className="w-6/12 ml-[375px] mt-[25px] border border-slate-950 p-8 rounded-md shadow-lg bg-[#e1e6ed]">
        <div>
          <label className="font-bold text-2xl">Select Symptoms</label>
        </div>
        <br />
        {/* Render buttons for each symptom */}
        {symptoms.map((symptom) => (
          <button
            className={`m-2 p-2 border rounded-md ${selectedSymptoms.includes(symptom) ? 'bg-blue-500 text-white' : 'border-zinc-800'}`}
            key={symptom}
            onClick={() => handleSymptomToggle(symptom)} // Toggle symptom selection on click
          >
            {symptom} {/* Display the symptom name on the button */}
          </button>
        ))}
      </div>
      {/* Predict button to trigger the prediction logic */}
      <button
        className="border border-slate-700 rounded-md py-3 px-4 ml-[700px] m-4 mt-6 bg-[#6c809a] text-white font-bold"
        onClick={handlePredict} // Handle the prediction when clicked
      >
        Predict
      </button>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
