import { symptoms, diseases } from "./data";

const sigmoid = (z) => 1 / (1 + Math.exp(-z));

class LogisticRegression {
  constructor(lr = 0.1, nIter = 1000) {
    this.lr = lr;
    this.nIter = nIter;
  }

  fit(X, y) {
    if (!X.length || !X[0].length) {
      throw new Error("Invalid input data: X cannot be empty.");
    }

    this.theta = Array(X[0].length).fill(0);

    for (let i = 0; i < this.nIter; i++) {
      const z = X.map(xRow => xRow.reduce((sum, x, idx) => sum + x * this.theta[idx], 0));
      const predictions = z.map(sigmoid);

      const gradient = Array(this.theta.length).fill(0);
      X.forEach((xRow, idx) => {
        xRow.forEach((x, j) => {
          gradient[j] += ((predictions[idx] - y[idx]) * x) / y.length;
        });
      });

      this.theta = this.theta.map((thetaVal, idx) => thetaVal - this.lr * gradient[idx]);
    }
  }

  predictProba(X) {
    if (!this.theta || !this.theta.length) {
      throw new Error("Model is not trained yet. Call fit() before predictProba().");
    }

    return X.map(xRow =>
      sigmoid(xRow.reduce((sum, x, idx) => sum + x * this.theta[idx], 0))
    );
  }
}

const data = {

  'fever': [1, 0, 1, 1, 0, 1, 1],
  'cough': [1, 0, 0, 1, 0, 1, 0],
  'headache': [0, 1, 1, 0, 1, 1, 0],
  'sore_throat': [1, 0, 1, 1, 0, 1, 1],
  'fatigue': [1, 0, 1, 1, 0, 0, 1],
  'muscle_pain': [1, 1, 1, 0, 0, 1, 0],
  'loss_of_taste': [1, 0, 1, 1, 0, 0, 1],
  'shortness_of_breath': [0, 1, 1, 0, 0, 1, 1],
  'chills': [1, 0, 1, 0, 0, 1, 1], 
  'nausea': [0, 1, 1, 0, 1, 0, 1], 
  'vomiting': [1, 0, 0, 1, 0, 1, 0], 
  'diarrhea': [0, 1, 1, 0, 1, 0, 1], 
  'dizziness': [1, 0, 1, 1, 0, 1, 1], 
  'skin_rash': [1, 0, 1, 1, 0, 1, 0], 
  'sweating': [1, 0, 0, 1, 1, 1, 0], 
  'joint_pain': [1, 1, 0, 1, 0, 0, 1], 
  'runny_nose': [0, 1, 1, 0, 1, 0, 0], 
  'sneezing': [1, 0, 1, 1, 0, 1, 0], 
  'chest_pain': [0, 1, 1, 0, 1, 0, 0], 
  'throat_pain': [1, 0, 1, 0, 0, 1, 1], 
  'blurred_vision': [0, 0, 1, 0, 1, 0, 1], 
  'abdominal_pain': [1, 0, 0, 1, 0, 1, 0], 
  'itchy_eyes': [0, 1, 1, 0, 1, 0, 0], 
  'night_sweats': [1, 0, 1, 1, 0, 1, 0],
  'fatigue': [1, 0, 1, 0, 1, 1, 1], 
  'memory_loss': [0, 1, 0, 1, 1, 0, 1], 
  'numbness': [1, 0, 1, 0, 0, 1, 0], 
  'difficulty_breathing': [1, 1, 0, 0, 1, 1, 1], 
  'swollen_lymph_nodes': [0, 1, 1, 0, 1, 0, 1], 
  'hair_loss': [1, 0, 1, 1, 0, 0, 1], 
  'dry_skin': [0, 1, 0, 1, 1, 0, 1], 
  'feeling_faint': [1, 0, 1, 0, 1, 1, 0], 
  'ear_pain': [1, 0, 0, 1, 0, 1, 1], 
  'frequent_urination': [0, 1, 1, 0, 1, 0, 0], 
  'blurry_vision': [1, 0, 1, 1, 0, 1, 1],
  'memory_fog': [0, 0, 1, 0, 1, 0, 1], 
  'mood_swings': [1, 0, 1, 1, 0, 0, 1], 
  'difficulty_swallowing': [0, 1, 0, 1, 1, 0, 1], 
  'increased_thirst': [1, 0, 1, 1, 0, 1, 0], 
  'metallic_taste': [0, 1, 1, 0, 1, 0, 1], 
  
  'Flu': [1, 0, 0, 1, 0, 1, 0],
  'Tumor': [0, 1, 1, 0, 0, 1, 0],
  'Lead_to_Cancer': [1, 0, 1, 1, 0, 0, 1],
  'Jaundice': [0, 0, 1, 0, 1, 0, 1],
  'Pneumonia': [1, 0, 1, 0, 1, 1, 0], 
  'Hepatitis': [0, 1, 0, 1, 1, 0, 1], 
  'Tuberculosis': [1, 1, 1, 0, 0, 1, 1], 
  'Malaria': [1, 0, 0, 1, 0, 1, 0], 
  'Diabetes': [1, 0, 1, 0, 1, 1, 1], 
  'COVID-19': [1, 1, 1, 1, 0, 1, 0], 
  'Heart_Disease': [0, 1, 1, 0, 1, 0, 1], 
  'Anemia': [1, 0, 0, 1, 0, 1, 0], 
  'Kidney_Disease': [1, 0, 1, 1, 0, 0, 1],
  'Liver_Cirrhosis': [0, 1, 0, 1, 1, 0, 1], 
  'Stroke': [1, 0, 1, 0, 1, 1, 0], 
};

const symptomsList = Object.keys(data).filter(key => !['Flu', 'Tumor', 'Lead_to_Cancer', 'Jaundice', 'Pneumonia', 'Hepatitis', 'Tuberculosis', 'Malaria', 'Diabetes', 'COVID-19', 'Heart_Disease', 'Anemia', 'Kidney_Disease', 'Liver_Cirrhosis', 'Stroke'].includes(key));
const diseasesList = Object.keys(data).filter(key => ['Flu', 'Tumor', 'Lead_to_Cancer', 'Jaundice', 'Pneumonia', 'Hepatitis', 'Tuberculosis', 'Malaria', 'Diabetes', 'COVID-19', 'Heart_Disease', 'Anemia', 'Kidney_Disease', 'Liver_Cirrhosis', 'Stroke'].includes(key));

const X = Array.from({ length: data[symptomsList[0]].length }, (_, i) =>
  [1, ...symptomsList.map(symptom => data[symptom][i])]
);

const yDict = diseasesList.reduce((acc, disease) => {
  acc[disease] = data[disease];
  return acc;
}, {});

const models = {};
diseasesList.forEach(disease => {
  const model = new LogisticRegression(0.1, 1000);
  model.fit(X, yDict[disease]);
  models[disease] = model;
});

const runPrediction = (userSymptoms) => {
  const user_data = [1, ...symptomsList.map(symptom => userSymptoms.includes(symptom) ? 1 : 0)];
  
  const diseaseProbabilities = {};
  diseasesList.forEach(disease => {
    const probability = models[disease].predictProba([user_data])[0];
    diseaseProbabilities[disease] = (probability * 100).toFixed(2);
  });

  return diseaseProbabilities;
};

export default runPrediction;

