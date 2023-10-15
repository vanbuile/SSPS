import React from 'react'
import DashboardStatsGrid from '../../components/PrinterStatisticsStatsGrid';
import TransactionChart from '../../components/PrinterStatisticsChart';
import PrinterStatisticsOrders from '../../components/PrinterStatisticsOrders';
import PrinterStatisticsCol from '../../components/PrinterStatisticsCol';

export default function PrinterStatistics() {
	return (


		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div class="grid grid-cols-11 gap-4">
				<div class="col-span-8">
					<TransactionChart />
					<br></br>
					<PrinterStatisticsOrders />
				</div>
				<div class="col-span-3">
					< PrinterStatisticsCol />
				</div>
			</div>

		</div>


	)
}