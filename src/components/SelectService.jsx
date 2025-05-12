"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const serviceDescriptions = [
  {
    name: "Web Designing",
    items: [
      { label: "UI/UX Design", type: "included" },
      { label: "Responsive Layouts", type: "included" },
      { label: "Wireframing & Prototyping", type: "included" },
      { label: "Color Theory & Typography", type: "included" },
      { label: "Design Tools (Figma, Adobe XD)", type: "included" },
      { label: "React / Vue / Angular", type: "excluded" },
      { label: "RESTful API Development", type: "excluded" },
      { label: "Authentication & Authorization", type: "excluded" },
      { label: "Deployment & DevOps Basics", type: "excluded" },
    ],
  },
  {
    name: "Frontend Development",
    items: [
      { label: "HTML, CSS, JavaScript", type: "included" },
      { label: "React / Vue / Angular", type: "included" },
      { label: "State Management (Redux, Context)", type: "included" },
      { label: "Responsive Design", type: "included" },
      { label: "Animations & Transitions", type: "included" },
      { label: "Server-side Logic & Error Handling", type: "excluded" },
      { label: "Database Integration (MongoDB, MySQL)", type: "excluded" },
      { label: "Authentication & Authorization", type: "excluded" },
      { label: "UI/UX Design", type: "excluded" },
    ],
  },
  {
    name: "Backend Development",
    items: [
      { label: "RESTful API Development", type: "included" },
      { label: "Node.js / Java / Python / PHP", type: "included" },
      { label: "Database Integration (MongoDB, MySQL, PostgreSQL)", type: "included" },
      { label: "Authentication & Authorization", type: "included" },
      { label: "Server-side Logic & Error Handling", type: "included" },
      { label: "Wireframing & Prototyping", type: "excluded" },
      { label: "React / Vue / Angular", type: "excluded" },
      { label: "Responsive Layouts", type: "excluded" },
      { label: "Animations & Transitions", type: "excluded" },
    ],
  },
  {
    name: "Full Stack Development",
    items: [
      { label: "Frontend + Backend Integration", type: "included" },
      { label: "End-to-End Application Development", type: "included" },
      { label: "API Design & Consumption", type: "included" },
      { label: "Deployment & DevOps Basics", type: "included" },
      { label: "Testing & Debugging", type: "included" },
      { label: "Design Tools (Figma, Adobe XD)", type: "excluded" },
      { label: "Wireframing & Prototyping", type: "excluded" },
      { label: "Color Theory & Typography", type: "excluded" },
      { label: "Animations & Transitions", type: "excluded" },
    ],
  },
];

export default function SelectService() {
  const [selectedService, setSelectedService] = useState("");
  const [showIncluded, setShowIncluded] = useState(true);

  const handleSelection = (event) => {
    setSelectedService(event.target.value);
    setShowIncluded(true); // reset toggle on service change
  };

  const selected = serviceDescriptions.find(
    (service) => service.name === selectedService
  );

  const featuresToDisplay = selected
    ? selected.items.filter(item => item.type === (showIncluded ? "included" : "excluded"))
    : [];

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
            <fieldset className="flex items-center justify-between">
              <legend className="text-sm text-neutral-500">
                {showIncluded
                  ? `What’s Included in ${selected.name}`
                  : `What’s Not Included in ${selected.name}`}
              </legend>

              {/* Toggle Button */}
              <motion.button
                type="button"
                onClick={() => setShowIncluded((prev) => !prev)}
                className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  showIncluded ? "bg-green-600" : "bg-red-600"
                }`}
                initial={false}
                animate={{ backgroundColor: showIncluded ? "#22c55e" : "#ef4444" }}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  style={{
                    x: showIncluded ? "24px" : "0px",
                  }}
                />
              </motion.button>
            </fieldset>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
              {featuresToDisplay.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                  className="px-3 py-2 bg-neutral-100 rounded"
                >
                  {feature.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
