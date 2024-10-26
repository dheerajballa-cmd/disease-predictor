import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { diseases, diseaseDetails } from '../Utils/data';

const Result = () => {
  const location = useLocation();
  const { probabilities } = location.state || { probabilities: {} };
  const [selectedDisease, setSelectedDisease] = useState(null);

  // Check if probabilities is not an object or is empty
  if (!probabilities || typeof probabilities !== 'object') {
    return <div className="text-center text-lg mt-10 text-gray-500">No prediction results available.</div>;
  }

  // Filter diseases with probability greater than 80
  const highProbabilityDiseases = Object.entries(probabilities).filter(([_, prob]) => prob > 80);

  return (
    <div className="result-container border border-gray-300 rounded-lg shadow-xl w-10/12 max-w-3xl m-auto mt-12 p-10 bg-gradient-to-br from-gray-400 to-gray-400">
      <h2 className="text-4xl font-extrabold text-center tracking-wide mb-8 drop-shadow-lg">
        Disease Prediction Probabilities
      </h2>
      {highProbabilityDiseases.length > 0 ? (
        <ul className="list-disc pl-10 space-y-4">
          {highProbabilityDiseases.map(([disease, prob]) => (
            <li className="list-none" key={disease}>
              <div 
                onClick={() => setSelectedDisease(selectedDisease === disease ? null : disease)} 
                className="cursor-pointer p-4 rounded-lg shadow-md bg-white hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="font-semibold text-lg text-gray-800">{disease}</span>: 
                <span className="text-indigo-700 ml-3 font-medium">{prob}%</span>
              </div>
              {selectedDisease === disease && diseaseDetails[disease] && (
                <div className="mt-2 p-4 bg-gray-100 rounded-md border border-gray-300">
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">{disease}</h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Description:</span> {diseaseDetails[disease].description}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Recommended Diet:</span> {diseaseDetails[disease].diet}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-lg mt-10">
          You do not have any severe diseases. Stay healthy!
        </div>
      )}
    </div>
  );
};

export default Result;
