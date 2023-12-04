
import React from 'react'
import DashboardStatsGrid from '../../components/RevenueStatisticsStatsGrid'
import RecentOrders from '../../components/RevenueStatisticsOrders'
import BuyerProfilePieChart from '../../components/RevenueStatisticsPieChart'
// import PopularProducts from '../../components/RevenueStatisticsProducts'

export default function RevenueStatistics() {
	const handleAuthorization = (role) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          if(name === role) {
            return true
          }
        }
        window.location.href = 'http://localhost:3000/login';
      }
      if(handleAuthorization('SPSO_cookie_id') == true) {
		  return (
	  
			  <div className="flex flex-col gap-4">
				  <DashboardStatsGrid />
				  <div class="grid grid-cols-11 gap-4">
					  <div class="col-span-8">
						  <RecentOrders />
					  </div>
					  <div class="col-span-3">
						  <BuyerProfilePieChart />
						  {/* <br></br>
						  <PopularProducts /> */}
					  </div>
				  </div>
	  
			  </div>
		  );    
      }
}