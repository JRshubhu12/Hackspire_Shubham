import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ClinicList = () => {
  const [patients, setPatients] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];

    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5001/patients');
        const data = await response.json();
        setPatients([...storedPatients, ...data]);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setPatients(storedPatients);
      }
    };

    fetchPatients();
  }, []);

  const sendPatientDetailsWhatsApp = (patient) => {
    if (!phoneNumber) {
      alert('Please enter a phone number.');
      return;
    }

    // Open the Streamlit app with the necessary patient details
    const url = new URL('http://localhost:5003');
    url.searchParams.append('phone_number', phoneNumber);
    url.searchParams.append('patient_name', patient.name);
    url.searchParams.append('patient_age', patient.age);
    url.searchParams.append('patient_gender', patient.gender);
    url.searchParams.append('patient_condition', patient.condition);
    

    window.open(url.toString(), '_blank');
  };

  return (
    <Box className="bg-gray-800 py-20">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            List of Patients
          </h1>
          {patients.length > 0 ? (
            <Box 
              className="mt-6 p-4 bg-white rounded shadow"
              sx={{ 
                maxHeight: '400px', 
                overflowY: 'scroll',
              }}
            >
              <ul className="text-black-500 dark:text-black-300">
                {patients.map((patient, index) => (
                  <li key={index} className="mt-2">
                    {patient.name} - {patient.age} - {patient.gender} - {patient.condition}
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter patient ph-no"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      />
                      <button
                        onClick={() => sendPatientDetailsWhatsApp(patient)}
                        className="ml-4 px-4 py-2 text-sm font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none"
                      >
                        Send WhatsApp
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </Box>
          ) : (
            <p className="mt-6 text-gray-500 dark:text-gray-300">No patients available</p>
          )}
          <Link to="/clinic-patient">
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Add a patient
            </button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default ClinicList;
