import * as React from 'react';
import { Link } from 'react-router-dom';
import { SideBarProps } from '../../typings';
import { ViewType } from '../../typings/layout';
import './style.scss';

const Sidebar = ({ data }: SideBarProps) => {
	return (
		<React.Fragment>
			<aside className="side-bar">
				<div className="side-bar-wrapper">
					<Link to={data?.title?.linkTo as string} className="side-bar-logo">
						{data?.title.img && (
							<img
								alt="Something"
								src={data.title.img.src}
								className={data.title.img.style as string}
							/>
						)}
						{data?.title.innerText && (
							<span className="side-bar-title">
								{data.title.innerText as string}
							</span>
						)}
					</Link>
					<ul className="space-y-2">
						{data?.items.map((item, index) => {
							return (
								<li key={index}>
									<Link
										className={(item?.style as string) || 'sider-bar-item'}
										to={item.linkTo as string}
									>
										{(item.view as ViewType) && item.view?.component}
										<span className="side-bar-item-text">
											{item.view?.value}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		</React.Fragment>
	);
};

export default Sidebar;
