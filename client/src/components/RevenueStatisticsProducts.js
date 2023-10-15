import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '1',
		name: 'Đào Duy long',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		hours: '2h45p',
		states: 0
	},
	{
		id: '1',
		name: 'Đào Duy long',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		hours: '0',
		states: 1
	},
	{
		id: '1',
		name: 'Đào Duy long',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		hours: '3h45p',
		states: 0
	}
]

function PopularProducts() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Sinh Viên mới truy cập</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.name}</p>
							<span
								className={classNames(
									product.states  !== 0
										? 'text-red-500':'text-green-500'
										,'text-xs font-medium'
								)}
							>
								{product.states !== 0 ? 'Đang hoạt động' : 'không hoạt động'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">
							{product.states !== 0 ? 'Đang truy cập' : 'gần nhất '+ product.hours } 
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
