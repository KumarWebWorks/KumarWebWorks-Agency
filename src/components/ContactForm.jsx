 "use client"
import React, { use } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import serviceDescriptions from "@/config/serviceDescriptions";
import SelectService from "./SelectService";

const ContactForm = () => {

  const data = serviceDescriptions;
  console.log(data)
    

  //  const handleService = (service) =>{
  //   // if(service === 4) data="full stack Devloment"
   
  //  }
  return (
    <FadeIn>
      <form action="https://formsubmit.co/kumarwebworks@gmail.com" method="POST"
      
      >
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
          />
          
          
           <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
           
          
             <SelectService/>
              
              
              
              
          
              
            
            </div>

           {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Services</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="Web Designing"
                name="Services"
                value="Web  Designing"
                required
                
              />
              <RadioInput
                label="Frontend Devlopment"
                name="Services"
                value="Frontend Devlopment"
              />
              
              
              <RadioInput
                label="Backend Devlopment"
                name="Services"
                value="Backend Devlopment"
              />
             
              <RadioInput
                label="Full stack  Devlopment"
                name="Services"
                value="Full stack  Devlopment"
              />
              
              
              <fieldset>
              <legend className="text-base/6 text-neutral-500">"fgk"</legend>
            </fieldset>
              
            </div>
            </div> */}
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="&#8377;5,000 – &#8377;10,000"
                name="budget"
                value="5-10"
                required
                
                
              />
              <RadioInput
                label="&#8377;10,000 – &#8377;25,000"
                name="budget"
                value="10-25"
              />
              <RadioInput
                label="&#8377;25,000 – &#8377;50,000"
                name="budget"
                value="25-50"
              />
              <RadioInput
                label="More than &#8377;50,000"
                name="budget"
                value="50-100"
              />
            </div>
            
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://kumarwebworks.com/thanks"
            />
          </div>
           <TextInput label="Message" name="message" required />
        </div>
          <fieldset className=" mt-5 px-6 py-8">
              <legend className= " text-sm/4 text-neutral-500"> Note: If your project serves humanity or contributes to the well-being of others — and lacks a profitable motive — we would be honored to support you free of cost. Let’s build something meaningful together. 
       </legend>
            </fieldset>
           
            
        <Button type="submit" className="mt-5"
        
        >
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
