import React from 'react'
import "../Each/Each.css"
import Card from "../card/Card"

function Each() {
  return (
    <div className='home'>
       
       <div className='home_section'>
         <Card src="https://uploads-ssl.webflow.com/5e72ed345a0058a3332497f7/5f1121f04276131f19e622ce_LetaFood%20BIA-min.jpg" title="Delivery Services" description="All your purchases will be delivered within 24 hours"/>
         <Card src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/the-top-10-most-popular-online-payment-solutions-5e9978d564973-1520x800.png" title="Payment Services" description="Pay cash on Delivery or using the M-Pesa Till No"/>
         <Card src="https://jobsarena.co.ke/wp-content/uploads/2021/12/Customer-Service-Jobs-In-Kenya.jpg" title="Customer Support" description="We are here for you feel free to reach out incase of any issue"/>

       </div>
      </div>
  )
}

export default Each
