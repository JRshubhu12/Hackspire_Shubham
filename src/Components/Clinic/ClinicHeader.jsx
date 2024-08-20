import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";

const ClinicHeader = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Patient",
    joinedDate: "2023-01-01"
  };

  return (
    <Box className="bg-gray-800 text-white">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <Typography variant="h6" className="text-3xl font-semibold lg:text-4xl">
            Get Your Diagnosis Results with Ease
          </Typography>
          <Typography variant="body1" className="mt-6 text-gray-300">
            Our platform allows patients to access their diagnosis results securely online. Medical staff can upload results, ensuring timely and accurate information delivery.
          </Typography>
        </div>
      </div>

      {/* Dashboard Section */}
      <Box className="bg-gray-700 py-12">
        <div className="container px-6 mx-auto">
          <Typography variant="h2" className="text-xl font-semibold text-center mb-8">
            User Dashboard
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <Card className="bg-gray-800 text-gray-200">
                <CardContent>
                  <Typography variant="h6" className="font-semibold">Name:</Typography>
                  <Typography variant="body1">{user.name}</Typography>
                  <Typography variant="h6" className="font-semibold mt-4">Email:</Typography>
                  <Typography variant="body1">{user.email}</Typography>
                  {/* <Typography variant="h6" className="font-semibold mt-4">Role:</Typography> */}
                  <Typography variant="body1">{user.role}</Typography>
                  {/* <Typography variant="h6" className="font-semibold mt-4">Joined Date:</Typography> */}
                  <Typography variant="body1">{user.joinedDate}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default ClinicHeader;
