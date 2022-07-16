import React from 'react'

export default function p5() {
  return (
    <div className="row">
      <div className=" body-font bg-[#FAFBFC]">
        <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="discover_how tracking-widest uppercase text-[20px] font-[400] py-5 mb-2">
              Discover how we can assist in your project.
            </h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white py-2 px-6 text-white bg-[#0087FF] rounded-[20px] shadow-[0_4px_4px_rgba(0,135,225,0.25)] rounded-[20px] text-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
