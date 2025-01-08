import React from 'react'
import img1 from "../assets/child-Photoroom.png"
function MissionAndVision() {
  return (
    <div className="flex-col h-screen w-screen ">
        {/* heading  */}
        <div className=" ">
            <h1  className="text-center align-middle text-6xl font-extrabold font-serif text-purple-900">Mission And Vision</h1>
        </div>
        {/* main container  */}
        <div className="flex mt-20 p-5 w-full">
        {/* image  */}
           <div className=" w-1/2">
                <img src={img1}
                    className="align-middle items-center justify-center justify-items-center"
                />
           </div>
        
           <div class="grid grid-cols-2 gap-4 p-4 w-1/2">
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-white font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-richblack-800 ">
                Online events (Investor Connect, researcher connect,webinars, quests, short games,spread/salute/complement target events,advertisement engagement events etc).
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-white font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-richblack-800 ">
                Online tournaments (gaming events, Q&A events)
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-white font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-richblack-800">
                Medical service Blood donation request circulation and responses
                </div>
                <div class=" h-54 rounded-3xl flex items-center justify-center text-center text-white font-normal transition-transform transform hover:scale-95 hover:shadow-2xl bg-richblack-800 ">
                Viral Blogs posts and articles
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionAndVision