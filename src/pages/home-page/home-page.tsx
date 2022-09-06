import * as React from 'react';
import { useEffect } from 'react';
import Slider from '../../components/ui/navigation/slider/slider'
import Card from '../../components/ui/navigation/cards/cards'
import { data } from '../../typings/data/data';
import { data1 } from '../../typings/data/data';
import { data2 } from '../../typings/data/data';
import '../../components/ui/navigation/navbar/navbar.scss'


const HomePage = (props: any) => {
	// useEffect(() => {
	// 	console.log('This is mounted');
	// });
	return (
		<>
			
				<Slider slides={data} />
				<Card title="Gần Đây" datas={data}/>
				<Card title="Có Thể Bạn Muốn Nghe" datas={data1}/>
				<Card title="Top 100" datas={data2}/>
				<Card title="Mới Phát Hành" datas={data}/>
		</>
	);
};
export default HomePage;
