import React from 'react'
import ProgressTracking from '../../components/ProgressTracking'
import HistorySect from '../../components/HistorySect'
import HomeUpdates from '../../components/HomeUpdates'
import TrendingBlogs from '../../components/TrendingBlogs'
import HomeSubscription from '../../components/HomeSubscription'

const Home = () => {
  return (
    <div className='h-full overflow-auto no-scrollbar'>
      <div className=''>
        <div className='mt-3 mb-8 ml-4 md:mt-[73px] md:ml-[48px] md:mb-[81px]'>
          <h1 className='text-[32px] md:text-[48px] text-[#795CD0]'>Welcome to Selfreka:</h1>
          <p className='text-[#A3A3A3]'>Your personalized space for growth and self discovery</p>
        </div>
        <ProgressTracking />
      </div>
        <HistorySect />
        <HomeUpdates />
        <TrendingBlogs />
        <HomeSubscription />
    </div>
  )
}

export default Home