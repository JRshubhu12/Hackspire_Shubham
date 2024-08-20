import { Box } from "@mui/material";
import {} from "react";
// import background from "../../assets/bg.png" 

const HomeCard = () => {
  return (
    <Box>
      <section className="max-w-xl items-center my-44 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Find your Description
        </h2>

        <form>
          <div className="grid grid-rows-2 gap-6 mt-4 sm:grid-rows-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Mobile Number
              </label>
              <input
                id="phoneno"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Prescription Number
              </label>
              <input
                id="prescription"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Upload
            </button>
          </div>
        </form>
      </section>
    </Box>
  );
};

export default HomeCard;
