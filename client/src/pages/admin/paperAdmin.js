import React from 'react'
import AddingTypeForm from '../../components/AddingTypeForm';
import RemovingTypeForm from '../../components/RemovingTypeForm';
import AdjustingDefaultPageNumForm from '../../components/AdjustingDefaultPageNumForm';
export default function PaperAdmin() {
	const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
        }
    };
	return (
		<div>
			<div className="flex text-[20px] justify-between">
                		<button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={() => scrollToComponent("AddingTypeForm")}>Thêm kiểu file</button>
		                <button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={() => scrollToComponent("RemovingTypeForm")}>Xóa kiểu file</button>
		                <button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={() => scrollToComponent("AdjustingDefaultPageNumForm")}>Điều chỉnh số lượng trang in</button>
	            	</div>
			<div id="AddingTypeForm">
				<AddingTypeForm />
			</div>
			<div id="RemovingTypeForm">
				<RemovingTypeForm />
			</div>
			<div id="AdjustingDefaultPageNumForm">
				<AdjustingDefaultPageNumForm />
		    	</div>
		</div>
	)
}
