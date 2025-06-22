"use client"
import React, { useState } from "react";
import { supabase } from "@/lib/superbaseConfig";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import serviceDescriptions from "@/config/serviceDescriptions";
import PageIntro from "./PageIntro";


const ContactForm = () => {
   
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact").insert([formData]);

    setLoading(false);
    if (error) {
      alert("Error submitting form");
      console.error(error);
    } else {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });
    }
  };

  const data = serviceDescriptions;

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <TextInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <TextInput label="Company" name="company" value={formData.company} onChange={handleChange} required />
          <TextInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}  />

          <div className="border border-neutral-300 px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Service</legend>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {["Website Development", "App Development", "Desktop Software ", "Other"].map((service) => (
                  <RadioInput
                    key={service}
                    label={`${service} `}
                    name="service"
                    value={service}
                    checked={formData.service === service}
                    onChange={handleChange}
                    required
                  />
                ))}
              </div>
            </fieldset>
          </div>

          <div className="hidden border border-neutral-300 px-6 py-8">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "₹5,000 – ₹10,000", value: "5-10" },
                  { label: "₹10,000 – ₹25,000", value: "10-25" },
                  { label: "₹25,000 – ₹50,000", value: "25-50" },
                  { label: "More than ₹50,000", value: "50-100" },
                ].map(({ label, value }) => (
                  <RadioInput
                    key={value}
                    label={label}
                    name="budget"
                    value={value}
                    checked={formData.budget === value}
                    onChange={handleChange}
                    required
                  />
                ))}
              </div>
            </fieldset>
          </div>

          <TextInput label="Message" name="message" value={formData.message} onChange={handleChange} required />
          <br />

          <fieldset className=" mt-5 px-6 py-4">
            <legend className=" text-sm/4 text-neutral-500">
              Note: If your project serves humanity or contributes to the well-being of others — and lacks a profitable motive — we would be honored to support you free of cost. Let’s build something meaningful together.
            </legend>
          </fieldset>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Let’s work together"}
          </Button>
          <br />

          {success && (
            
            <PageIntro >
              <h1  >Thank You</h1>
         <p>we&rsquo;ll contact you within an hour.</p>
      </PageIntro>
           
          )}
        </div>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
