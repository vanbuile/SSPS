import React from 'react';

import DashboardStatsGrid from '../../components/PrinterStatisticsStatsGrid';
import TransactionChart from '../../components/PrinterStatisticsChart';
import PrinterStatisticsOrders from '../../components/PrinterStatisticsOrders';
import PrinterStatisticsCol from '../../components/PrinterStatisticsCol';




export default function PrinterStatistics() {
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
						  <TransactionChart />
					  </div>
					  <div class="col-span-3">
						  < PrinterStatisticsCol  />
					  </div>
					  <div class="col-span-10">
						  <PrinterStatisticsOrders  /> 
					  </div>
				  </div>
	  
			  </div>
	  
	  
		  )
      }
}