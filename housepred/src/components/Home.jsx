import React, { useState } from 'react';
import { symptoms } from "../Utils/data"; 
import { useNavigate } from "react-router-dom";
import runPrediction from "../Utils/predictAlgorithm"; 

const Home = () => {
  const navigate = useNavigate(); 
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms((prev) => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom] 
    );
  };

  const handlePredict = () => {
    const probabilities = runPrediction(selectedSymptoms); 
    console.log("Prediction Results:", probabilities); 
    navigate('/result', { state: { probabilities } });
  };

  return (
    <div>
      <div className="w-6/12 ml-[375px] mt-[25px] border border-slate-950 p-8 rounded-md shadow-lg bg-[#e1e6ed]">
        <div>
          <label className="font-bold text-2xl">Select Symptoms</label>
        </div>
        <br />
        {symptoms.map((symptom) => (
          <button
            className={`m-2 p-2 border rounded-md ${selectedSymptoms.includes(symptom) ? 'bg-blue-500 text-white' : 'border-zinc-800'}`}
            key={symptom}
            onClick={() => handleSymptomToggle(symptom)} 
          >
            {symptom}
          </button>
        ))}
      </div>
      <button
        className="border border-slate-700 rounded-md py-3 px-4 ml-[700px] m-4 mt-6 bg-[#6c809a] text-white font-bold"
        onClick={handlePredict} 
      >
        Predict
      </button>
    </div>
  );
};

export default Home;
