// src/Projects.jsx
import PageWrapper from "@/components/PageWrapper.jsx";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import tiagostart from "/src/assets/project_imgs/tiago_start.jpg";
import tiagointeracting from "/src/assets/project_imgs/tiago_interacting.jpg";
import tiagodelivery from "/src/assets/project_imgs/tiago_delivery.png";
import baseimage from "/src/assets/project_imgs/base_image.png";

export default function Projects() {
  const projectData = [
    {
      projectName: "Portfolio Website",
      projectDescription:
        "The very website you are on! A portfolio built with React, Tailwind, and Framer Motion to showcase my work.",
      languagesUsed: ["React", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com/BrunoCavaca/personal_website",
      liveDemo: "",
      imgPreview: [],
    },
    {
      projectName: "LibraGo: Robotic Librarian",
      projectDescription:
        "A robotic solution to combat accessibility difficulties in King's College London libraries. LibraGo has custom-trained book detection, grasping and delivery capabilities, as well as live speech processing abilities.",
      languagesUsed: ["ROS (Python)", "Linux", "Google Colab", "Label Studio"],
      githubLink: "https://github.com/BrunoCavaca/LibraGo-Robot-Librarian",
      liveDemo: "",
      imgPreview: [
        tiagostart,
        tiagointeracting,
        tiagodelivery,
      ],
    },
    {
      projectName: "LiverWise",
      projectDescription:
        "Built in collaboration with the  King\’s Paediatric Liver Centre. Developed as part of a team of 9, taking the role of communications lead between the team and the client for the duration of the 16 week project. LiverHub is a mobile app linking Healthcare Professionals with Young Individuals regarding managing Liver Disease through a range of social media style features iincluding streaming, blogging and quiz abilities.",
      languagesUsed: ["Flutter", "Firebase"],
      githubLink: "https://github.com/lukasanader/Team-TODO/tree/main",
      liveDemo: "",
      imgPreview: [baseimage],
    },
  ];

  return (
    <PageWrapper title="Previous Projects">
      {/* Project Cards */}
      <div className="flex flex-col gap-6 relative">
        {projectData.map((proj, index) => {
          const [selectedImage, setSelectedImage] = useState(0);

          const nextImage = () => {
            setSelectedImage((prev) => (prev + 1) % proj.imgPreview.length);
          };

          const prevImage = () => {
            setSelectedImage((prev) =>
              prev === 0 ? proj.imgPreview.length - 1 : prev - 1
            );
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 shadow-md rounded-2xl bg-white dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition-all">
                <CardContent className="flex flex-col items-center gap-6">
                  {/* Project Preview (Manual Carousel) */}
                  {proj.imgPreview && proj.imgPreview.length > 0 && (
                    <div className="relative w-full md:w-2/3">
                      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow flex items-center justify-center">
                        <img
                          src={proj.imgPreview[selectedImage]}
                          alt={proj.projectName}
                          className="max-h-full max-w-full object-contain"
                        />

                        {/* Prev Button */}
                        {proj.imgPreview.length > 1 && (
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600"
                          >
                            <ChevronLeft size={20} />
                          </button>
                        )}

                        {/* Next Button */}
                        {proj.imgPreview.length > 1 && (
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-600"
                          >
                            <ChevronRight size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="flex-1 text-center">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {proj.projectName}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {proj.projectDescription}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {proj.languagesUsed.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 justify-center">
                      {proj.githubLink && (
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <Github size={18} /> GitHub
                        </a>
                      )}
                      {proj.liveDemo && (
                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
