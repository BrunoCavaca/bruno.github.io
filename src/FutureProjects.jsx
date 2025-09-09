import React from "react";
import PageWrapper from "./components/PageWrapper";

export default function FutureProjects() {
  return (
    <PageWrapper title="Ongoing & Future Projects">
        <p>These are just some preliminary ideas, if you have any suggestions, or would like to potentially work with me, feel free to contact me!</p>
      <ul className="list-disc list-inside space-y-2 gap-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <li>MediMind: A SmartWatch compatible medication consumption and renewal reminder app with family tracking features to assist those with memory difficulties.</li>
        <li>Tumour Detector: An AI/ML-Powered Detection Model for detecting tumours as early as possible.</li>
        <li>Fire Risk Detector: An ML-Powered Satellite Imagery and Weather Forecast System capable of detecting fires before they start. </li>
      </ul>
    </PageWrapper>
  );
}