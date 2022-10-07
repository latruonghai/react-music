import * as React from 'react';
import Slider from '../../components/ui/navigation/slider/slider';
import ListCard from '../../components/ui/navigation/listCard/listCard';
import MusicLine from '../../components/ui/navigation/pauseLiner';
import { data } from '../../typings/data/data';
import { data1 } from '../../typings/data/data';
import { data2 } from '../../typings/data/data';
import { data3 } from '../../typings/data/data';
import { data4 } from '../../typings/data/data';
import { data5 } from '../../typings/data/data';
import '../../components/ui/navigation/navbar/navbar.scss';

const HomePage = (props: any) => {
  return (
    <>
      <Slider slides={data} />
      <ListCard title="Gần Đây" datas={data5} />
      <ListCard title="Mới Phát Hành" datas={data3} />
      <ListCard title="Có Thể Bạn Muốn Nghe" datas={data1} />
      <ListCard title="Top 100" datas={data2} />
      <ListCard title="Nhạc Mới Mỗi Ngày" datas={data4} />
    </>
  );
};
export default HomePage;
