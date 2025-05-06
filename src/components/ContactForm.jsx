// import React from "react";
// import FadeIn from "./FadeIn";
// import TextInput from "./TextInput";
// import RadioInput from "./RadioInput";
// import Button from "./Button";

// const ContactForm = () => {
//   return (
//     <FadeIn>
//       <form>
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Work inquiries
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Name" name="name" autoComplete="name" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
//           <TextInput
//             label="Company"
//             name="company"
//             autoComplete="organization"
//           />
//           <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
//           <TextInput label="Message" name="message" />
//           <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
//             <fieldset>
//               <legend className="text-base/6 text-neutral-500">Budget</legend>
//             </fieldset>
//             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
//               <RadioInput label="$25K – $50K" name="budget" value="25" />
//               <RadioInput label="$50K – $100K" name="budget" value="50" />
//               <RadioInput label="$100K – $150K" name="budget" value="100" />
//               <RadioInput label="More than $150K" name="budget" value="150" />
//             </div>
//           </div>
//         </div>
//         <Button type="submit" className="mt-10">
//           Let’s work together
//         </Button>
//       </form>
//     </FadeIn>
//   );
// };

// export default ContactForm;

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form action="https://formsubmit.co/kumarwebworks@gmail.com" method="POST">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label=" &#8377;5,000 – &#8377;10,000" name="budget" value="25" />
              <RadioInput label="&#8377;10,000 – &#8377;25,000" name="budget" value="50" />
              <RadioInput label="&#8377;25,000 – &#8377;50,000" name="budget" value="100" />
              <RadioInput label="More than &#8377;50,000" name="budget" value="150" />
            </div>
            <input type="text" name="_honey" className="hidden"/>
<input type="hidden" name="_captcha" value="false"/>
<input type="hidden" name="_next" value="http://kumarwebworks.com/thanks"/>
          </div>
        </div>
        <Button type="submit" className="mt-10" >
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
