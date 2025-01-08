import React from "react";
import { Timeline } from "../components/ui/Timeline";
import img1 from "../assets/resercher.png"
import img2 from "../assets/investor.png"
import img3 from "../assets/professionals.png"
import img4 from "../assets/Entrepreneur.png"
import features from "../assets/features-Photoroom.png"
// import img5 from "../assets/instructor.png"
export function TimelineDemo() {
  const data = [
    {
        title: "Features",
        content: (
          <div className=" flex-col h-[380px]  ">
            <p className="text-neutral-800  dark:text-neutral-200 text-xl font-normal mb-8">
              Look at this...
            </p>
    
            <div className=" bg-slate-700 relative items-center justify-items-center justify-center">
              <img
                src={features}
                alt="hero template"
                className="rounded-lg justify-center absolute ml-10 h-96  justify-items-center object-cover shadow-3xl transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500"
              />
            </div>
          </div>
        ),
      },
    {
      title: "Target Customer",
      content: (
        <div className="transition-transform p-2 transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-300 to-white-500">
          <p className="text-neutral-800 dark:text-neutral-200 text-xl  font-normal mb-8">
          Meet our ideal consumers, the heart of our vision!
          </p>
          <div className="grid p-5 grid-cols-2 justify-items-center gap-4">
            <img
              src={img1}
              alt="startup template"
              className="rounded-lg object-cover border-richblack-900 border-2  shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500"
            />
            <img
              src={img2}
              alt="startup template"
              className="rounded-lg object-cover border-richblack-900 border-2 shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500"
            />
            <img
              src={img3}
              alt="startup template"
              className="rounded-lg object-cover border-richblack-900 border-2 shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500"
            />
            <img
              src={img4}
              alt="startup template"
              className="rounded-lg object-cover border-richblack-900 border-2  shadow-2xl transition-transform transform hover:scale-95 hover:shadow-2xl bg-gradient-to-r from-white via-blue-500 to-white-500"
            />
          </div>
        </div>
      ),
    },
    
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         {[
    //           "✅ Card grid component",
    //           "✅ Startup template Aceternity",
    //           "✅ Random file upload lol",
    //           "✅ Himesh Reshammiya Music CD",
    //           "✅ Salman Bhai Fan Club registrations open",
    //         ].map((item, index) => (
    //           <div
    //             key={index}
    //             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
    //           >
    //             {item}
    //           </div>
    //         ))}
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} className="mt-3" />
    </div>
  );
}
