import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeSubscription = () => {
    const navigate = useNavigate()
    const homeSubscription = () =>{
        navigate("subscription")
    }

    const fremiumLists = [
        "Access from 1 device/ one member",
        "limited access to Selfreka Academy courses, articles, guides, and many more.",
        "No Access to Communities",
        "Weekly expert insights delivered to your email",
        "No Progress tracking and goal settings",
        "1 session/ month"
    ]

    const premiumLists = [
        "Access up to 10 devices/ team member",
        "Access all Selfreka Academy courses, live workshops, guides, and many more.", 
        "weekly expert insights delivered to your email",
        "Access to all Communities",
        "Your Progress tracking and goal settings", 
        "Unlimited counselling sessions/ month"
    ]

    const silverLists = [
        "Access up to 3 devices",
        "Access all Selfreka Academy courses, live workshops, guides, and many more",
        "Access to all private Communities",
        "weekly expert insights delivered to your email",
        "Your Progress tracking and goal settings",
        "4 counselling sessions/ month"
    ]

  return (
    <div className='py-[55.98px] px-[43px]'>
        <div className='bg-[#795CD0] w-full pt-[46.65px] pb-[99.48px] m-auto'>
            <div className='text-center'>
                <h2 className='text-[#FBE077] text-[23.32px]'>Subscriptions and Payments</h2>
                <p className='text-[#fff] text-[17.49px]'>Upgrade your subscription to gain unlimited access to prime resourses</p>
            </div>
            <div className='grid lg:grid-cols-3 items-center w-2/3 lg:w-[80%] xl:w-2/3 m-auto mt-[22.35px] gap-10 lg:gap-0'>
                <div className='h-[298.27px] overflow-auto no-scrollbar bg-white text-[#767676] py-[14.38px] px-[19px] rounded-[28.13px] font-semibold'>
                    <h3 className='pb-[20.28px] text-[#421196] text-[15.7px]'>Freemium</h3>
                    <p className='text-[26.16px] text-[#FBBC05]'>FREE</p>
                    <ul className='grid gap-[9.81px] list-disc'>{fremiumLists.map((fremiumList, index) => (<li key={index}><span>tick</span>{fremiumList}</li>))}</ul>
                </div>
                <div className='h-[335.55px] overflow-auto no-scrollbar bg-premium-background text-white py-[24.98px] px-[17.17px] rounded-[28.13px] font-semibold'>
                    <h3 className='pb-[20.28px] text-[#fff] text-[15.7px]'>Premiun</h3>
                    <p className='text-[15.7px]'>$160/Month</p>
                    <ul className='grid gap-[9.81px] list-disc'>{premiumLists.map((premiumList, index) => (<li key={index}><span>tick</span>{premiumList}</li>))}</ul>
                </div>
                <div className='h-[298.27px] overflow-auto no-scrollbar bg-white text-[#767676] py-[14.38px] px-[13.85px] rounded-[28.13px] font-semibold'>
                    <h3 className='pb-[20.28px] text-[#421196] text-[15.7px]'>Silver</h3>
                    <p className='text-[26.16px] text-[#FBBC05]'>$20/Month</p>
                    <ul className='grid gap-[9.81px] list-disc'>{silverLists.map((silverList, index) => (<li key={index}><span>tick</span>{silverList}</li>))}</ul>
                </div>
            </div>
            <div className='flex justify-center'>
            <button className='rounded-full text-[#421196] bg-[#ffcc00] px-[17.49px] mt-[23.68px] py-[7px]' onClick={homeSubscription}>Upgrade Plan</button>
            </div>
        </div>
    </div>
  )
}

export default HomeSubscription