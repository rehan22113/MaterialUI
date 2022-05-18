import React,{useEffect, useState} from 'react'

const PricingPlan =()=>{
  const [Button,setButton] = useState({
    btn:"py-1 px-4 focus:outline-none",
    SelectBtn:"py-1 px-4 bg-indigo-500 text-white focus:outline-none"
  })
const [Annual, setAnnual] = useState({
  basic:79,
  pro:149,
  platinum:399
});
const [month,setMonth] = useState("mo")
const AnnulaBtn=()=>{
  setButton({btn:"py-1 px-4 bg-indigo-500 text-white focus:outline-none",SelectBtn:"py-1 px-4 focus:outline-none"})
  setAnnual({
    basic:279,
    pro:999,
    platinum:1500
  })
  setMonth("yr")
}
const MonthlyBtn=()=>{
  setButton({
    btn:"py-1 px-4 focus:outline-none",
    SelectBtn:"py-1 px-4 bg-indigo-500 text-white focus:outline-none"
  })
  setAnnual({
    basic:79,
    pro:149,
    platinum:399
  })
  setMonth("mo")

}
const [plans, setPlans] = useState({
  Basic:"h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden",
  pro:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
  platinum:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
  plan:"basic",
  basicBtn:"flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded",
  proBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded",
  platinumBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
});
const PlanSelection=(plan)=>{
     if(plan==="basic"){
       setPlans({
        Basic:"h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden",
        pro:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
        platinum:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
        plan:"basic",
        basicBtn:"flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded",
        proBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded",
        platinumBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
       })
     }
     if(plan==="pro"){
      setPlans({
       Basic:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
       pro:"h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden",
       platinum:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
       plan:"pro",
       basicBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded",
       proBtn:"flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded",
       platinumBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
      })
    }
    if(plan==="platinum"){
      setPlans({
       Basic:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
       pro:"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden",
       platinum:"h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden",
       plan:"platinum",
       basicBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded",
       proBtn:"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded",
       platinumBtn:"flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
      })
    }
    

}
useEffect(() => {

}, []);
    return <>
       <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button className={Button.SelectBtn} onClick={MonthlyBtn}>Monthly</button>
        <button className={Button.btn} onClick={AnnulaBtn}>Annually</button>
      </div>
    </div>
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className={plans.Basic} onClick={()=>{PlanSelection("basic")}}>
        {plans.plan==="basic"?(
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Basic Business</span>):("")}
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Basic</h2>
          <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          <span>${Annual.basic}</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/{month}</span></h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button className={plans.basicBtn}>Contact Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      {/* Pro business */}
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className={plans.pro} onClick={()=>{PlanSelection("pro")}}>
        {plans.plan==="pro"?(
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Pro Business</span>):("")}
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>${Annual.pro}</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/{month}</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button className={plans.proBtn}>Contact Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className={plans.platinum} onClick={()=>{PlanSelection("platinum")}}>
        {plans.plan==="platinum"?(
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Platinum Business</span>):("")}
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Platinum</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>${Annual.platinum}</span>
            <span className="text-lg ml-1 font-normal text-gray-500">/{month}</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button className={plans.platinumBtn}>Contact Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
}
export default PricingPlan