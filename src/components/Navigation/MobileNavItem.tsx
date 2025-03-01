import React, { FC } from 'react'

interface MobileNavItemProps {
	id?: string
	label?: string
}

const MobileNavItem: FC<MobileNavItemProps> = ({ id, label }) => {
	return (
		<div className='mobile-nav-item glass-effect'>
			<div className='nav-item active'>
				<a href={`#${id}`}>{label}</a>
			</div>
		</div>
	)
}

export default MobileNavItem
