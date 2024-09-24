import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn={firname:"surya"};
  return (
    <section className='home'>
      <div className='home-content'>
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firname||'Guest'}
       subtext ="Access and manage your account and transctions efficiently"></HeaderBox>
       <TotalBalanceBox 
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={1250.67}
      />
      </div>
      
    </section >
  )
}

export default Home 