import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import type { RootState } from '../../../stores/index';
import { Icon } from '../../icons/audioPlayer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../../../stores/player';
import { data5 } from '../../../typings/data/data';

function Card({ item, title }) {
  const [heart, setHeart] = useState(false);
  const styleImage = title => {
    switch (title) {
      case 'Gần Đây':
        return 'relative lg:h-36 md:h-36 w-full overflow-hidden object-cover object-center transform group-hover:scale-125 group-hover:opacity-40 duration-1000';
      case 'Mới Phát Hành':
        return 'relative lg:h-14 md:h-14 w-full overflow-hidden object-cover object-center group-hover:opacity-40 duration-1000';
      default:
        return 'relative lg:h-full md:h-48 w-full overflow-hidden object-cover object-center transform group-hover:scale-125 group-hover:opacity-40 duration-1000';
    }
  };
  const styleCard = title => {
    switch (title) {
      case 'Gần Đây':
        return 'relative h-30 w-36 rounded-lg overflow-hidden group';
      case 'Mới Phát Hành':
        return 'relative h-14 w-14 rounded-lg overflow-hidden group';
      default:
        return 'relative h-52 w-52 rounded-lg overflow-hidden group';
    }
  };
  const styleCard2 = title => {
    switch (title) {
      case 'Mới Phát Hành':
        return 'pl-5 py-2 flex';
      case 'Gần Đây':
        return 'p-4 pb-6 sm:w-1/2 lg:w-[15%]';
      default:
        return 'p-4 pb-6 sm:w-1/2 lg:w-1/3';
    }
  };
  const styleText = title => {
    switch (title) {
      case 'Mới Phát Hành':
        return 'pt-1 text-left text-white transition ease-in block pl-3';
      default:
        return 'pt-1 text-left text-white transition ease-in block';
    }
  };
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector(
    (state: RootState) => state.player
  );

  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };
  const handleHeart = () => {
    if (!heart) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  };
  const addData = () => {
    data5.push(current);
  };
  return (
    <div className={`${styleCard2(title)}`} key={item.id}>
      <div className={`${styleCard(title)}`}>
        <div
          className={`absolute items-center justify-evenly inset-0 flex text-white z-10 ${
            current?.id === item.id && playing ? 'opacity-1' : 'opacity-0'
          } group-hover:opacity-100`}
        >
          <div
            onClick={handleHeart}
            className={`text-[20px] p-1 cursor-pointer ${
              heart ? 'text-pink-400 fill-pink-400' : ''
            } hover:bg-white hover:bg-opacity-50 hover:rounded-full`}
          >
            {title === 'Mới Phát Hành' ? '' : <AiOutlineHeart />}
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <button
              onClick={() => {
                updateCurrent();
                addData();
              }}
              className="w-[40px] h-[40px] flex border-2 border-white rounded-full items-center justify-center text-white"
            >
              <Icon
                name={current?.id === item.id && playing ? 'liner' : 'play'}
                size={25}
              />
            </button>
          </div>
          <div className="text-[20px] p-1 cursor-pointer hover:bg-white hover:bg-opacity-50 hover:rounded-full">
            {title === 'Mới Phát Hành' ? '' : <HiOutlineDotsHorizontal />}
          </div>
        </div>
        <img
          className={`${styleImage(title)} ${
            current?.id === item.id && playing ? 'opacity-40' : ''
          }`}
          src={item.linkimg}
          key={item.id}
        />
      </div>
      <div className={`${styleText(title)}`}>
        <h1 className="text-sm font-semibold cursor-pointer hover:text-indigo-700">
          {item.title}
        </h1>
        <span className="text-sm font-semibold cursor-pointer text-[#9ca3af]">
          {item.more}
        </span>
      </div>
    </div>
  );
}

export default Card;
