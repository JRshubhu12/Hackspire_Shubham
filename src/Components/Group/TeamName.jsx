import { Box } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamName = () => {
  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamData.map((member, index) => (
              <div key={index} className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {member.name}
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    {member.position}
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

const teamData = [
  {
    name: "Ahmed Omer",
    position: "CEO",
    photo:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80",
    linkedin: "https://www.linkedin.com/in/ahmedomer",
    github: "https://github.com/ahmedomer",
  },
  {
    name: "Jane Doe",
    position: "Co-founder",
    photo:
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    linkedin: "https://www.linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
  },
  {
    name: "Steve Ben",
    position: "UI/UX",
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
    linkedin: "https://www.linkedin.com/in/steveben",
    github: "https://github.com/steveben",
  },
  {
    name: "Patterson Johnson",
    position: "Software Engineer",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    linkedin: "https://www.linkedin.com/in/pattersonjohnson",
    github: "https://github.com/pattersonjohnson",
  },
];

export default TeamName;
