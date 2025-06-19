"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceDescriptions = [
  {
    name: "Website",
    items: [
      { label: "Landing Page Design & Development", type: "included" },
      { label: "E-commerce Website", type: "included" },
      { label: "Portfolio Website", type: "included" },
      { label: "Blog / News Website", type: "included" },
      { label: "Booking / Appointment System", type: "included" },
      { label: "SEO Optimization (Basic On-Page SEO)", type: "included" },
      { label: "Speed Optimization", type: "included" },
      { label: "Custom Website Development", type: "included" },
    ],
  },
  {
    name: "Mobile App",
    items: [
      { label: "Android / iOS App Development", type: "included" },
      { label: "E-commerce Mobile App", type: "included" },
      { label: "Food Delivery App", type: "included" },
      { label: "Job Posting App", type: "included" },
      { label: "Social Media or Chat App", type: "included" },
      { label: "QR-Based Ordering System", type: "included" },
      { label: "OTP Login & Firebase Auth", type: "included" },
      { label: "Custom App Development", type: "included" },
    ],
  },
  {
    name: "Desktop App",
    items: [
      { label: "Inventory Management System", type: "included" },
      { label: "POS (Point of Sale) System", type: "included" },
      { label: "Employee Management App", type: "included" },
      { label: "School/College Management App", type: "included" },
      { label: "Custom CRM Software", type: "included" },
      { label: "Learning Management System (LMS)", type: "included" },
      { label: "Chat & Community Platform", type: "included" },
      { label: "Custom Desktop Application", type: "included" },
    ],
  },
  {
    name: "Custom Software Solution",
    items: [
      {
        label: "Non Profitable - Related to Humanity (Free Of Cost)",
        type: "included",
      },
      { label: "Other Software Solution", type: "included" },
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

  const featuresToDisplay = selected
    ? selected.items.filter((item) => item.type === "included")
    : [];

  return (
    <div>
      <legend className="text-base/6 text-neutral-500">Service</legend>
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
