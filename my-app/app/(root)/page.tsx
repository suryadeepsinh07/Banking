import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:"Surya", lastName: "Yonko",
    email:"Suryayonko777@gmail.com"
  };
  return (
    <section className='home'>
      <div className='home-content'>
      <header className='home-header'>
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName||'Guest'}
       subtext ="Access and manage your account and transctions efficiently"></HeaderBox>
       <TotalBalanceBox 
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={125210.67}
      />
      </header>
      Recent transctions
      </div>
      <RightSidebar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:45670.89},{currentBalance:470.89}]}
      />
    </section >
  )
}

export default Home 