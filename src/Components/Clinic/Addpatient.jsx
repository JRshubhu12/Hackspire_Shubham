import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    mobileno: '',
    weight: '',
    height: '',
    condition: '',
    file: '',
  });

  const [file, setFile] = useState(null);
  const [prescriptionNo, setPrescriptionNo] = useState(''); // Add state for prescription number

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    // Generate a 10-digit alphanumeric prescription number
    const generatePrescriptionNo = () => {
      return Math.random().toString(36).substring(2, 12).toUpperCase();
    };
    
    setPrescriptionNo(generatePrescriptionNo()); // Set the generated prescription number
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...patient, prescriptionNo }), // Include prescriptionNo in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to add patient');
      }

      navigate('/clinic-home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box className="bg-gray-800 py-20">
      <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Add a Patient
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="text"
                name="name"
                placeholder="Patient Name"
                value={patient.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="number"
                name="age"
                placeholder="Age"
                value={patient.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="text"
                name="gender"
                placeholder="Gender"
                value={patient.gender}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="number"
                name="mobileno"
                placeholder="Mobile-No"
                maxLength={10}
                value={patient.mobileno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="number"
                name="weight"
                placeholder="Weight"
                maxLength={10}
                value={patient.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="number"
                name="height"
                placeholder="Height"
                maxLength={10}
                value={patient.height}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="text"
                name="condition"
                placeholder="Condition"
                value={patient.condition}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-gray-800 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring"
                type="file"
                name='file'
                accept=".pdf,image/*"
                onChange={handleFileChange}
                required
              />
            </div>

            {file && (
              <div className="mt-4">
                <h4 className="text-gray-6000 dark:text-gray-200">Preview:</h4>
                <div className="border border-gray-300 rounded-lg p-4 mt-2 bg-gray-50 dark:bg-gray-700">
                  {file.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-auto" />
                  ) : file.type === 'application/pdf' ? (
                    <embed
                      src={URL.createObjectURL(file)}
                      type="application/pdf"
                      className="w-full h-96"
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-200">Uploaded file: {file.name}</p>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-200">
                  <span className="font-bold">Prescription No:</span>
                  <span className="ml-2 p-2 border border-white-300 rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-600">{prescriptionNo}</span>
                </p> {/* Display prescription number in a box */}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-2 mt-6 text-sm font-medium tracking-wide text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Add Patient
            </button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default AddPatient;