"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceDescriptions = [
  {
    name: "Web Designing",
    features: [
      "UI/UX Design",
      "Responsive Layouts",
      "Wireframing & Prototyping",
      "Color Theory & Typography",
      "Design Tools (Figma, Adobe XD)",
    ],
  },
  {
    name: "Frontend Development",
    features: [
      "HTML, CSS, JavaScript",
      "React / Vue / Angular",
      "State Management (Redux, Context)",
      "Responsive Design",
      "Animations & Transitions",
    ],
  },
  {
    name: "Backend Development",
    features: [
      "RESTful API Development",
      "Node.js / Java / Python / PHP",
      "Database Integration (MongoDB, MySQL, PostgreSQL)",
      "Authentication & Authorization",
      "Server-side Logic & Error Handling",
    ],
  },
  {
    name: "Full Stack Development",
    features: [
      "Frontend + Backend Integration",
      "End-to-End Application Development",
      "API Design & Consumption",
      "Deployment & DevOps Basics",
      "Testing & Debugging",
    ],
  },
];

export default function SelectService() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelection = (event) => {
    setSelectedService(event.target.value);
  };

  const selected = serviceDescriptions.find(
    (service) => service.name === selectedService
  );

  return (
    <div>
      <fieldset>
        <legend className="text-base/6 text-neutral-500">Services</legend>
      </fieldset>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {serviceDescriptions.map((service, index) => (
          <label key={index} className="flex gap-x-3 cursor-pointer">
            <input
              type="radio"
              name="Services"
              value={service.name}
              onChange={handleSelection}
              className="h-6 w-6 appearance-none rounded-full border border-neutral-950/20 checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            />
            <span className="text-base/6 text-neutral-950">{service.name}</span>
          </label>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                What’s Included in {selected.name}
              </legend>
            </fieldset>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
              {selected.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-2 bg-neutral-100 rounded"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
