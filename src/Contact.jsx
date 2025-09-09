import React from "react";
import PageWrapper from "@/components/PageWrapper.jsx";
import { Mail, Github, Linkedin, ArrowRight, FileDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import cv from '/src/assets/bruno_cv.pdf';

export default function ContactPage() {
  return (
    <PageWrapper title="Contact">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg">Reach me via:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:brunocav2004@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Mail className="mr-2" size={18} /> Email
            </Button>
          </a>
          <a href="https://github.com/BrunoCavaca" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-gray-800 text-white hover:bg-gray-900">
              <Github className="mr-2" size={18} /> GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/bruno-cavaca-04ba55191" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
              <Linkedin className="mr-2" size={18} /> LinkedIn
            </Button>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 gap-3 mt-10">
        <p className="text-lg ">Alternatively, if you'd just like to see my resume:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={cv} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              <FileDown className="mr-2" size={18} /> View Resume
            </Button>
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}