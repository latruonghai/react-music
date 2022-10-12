import React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { Icon } from '../../../icons/audioPlayer';
import type { RootState } from '../../../../stores/index';
import { useAudio } from 'react-use';
import { secondsToTime } from './utils';
import CustomRange from '../range';
import { useDispatch, useSelector } from 'react-redux';
import {
  setControls,
  setSongIndex,
  setPlaying,
  setCurrent,
} from '../../../../stores/player';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { data3 } from '../../../../typings/data/data';

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
const [repeat1, setRepeat1] = useState({ index: 0 });
  const [shuffle, setShuffle] = useState(false);
  const [random, setRandom] = useState(0);
  const { current, isNextSong } = useSelector(
    (state: RootState) => state.player
  );

  const [audio, state, controls] = useAudio({
    src: current?.src,
  });

  const handleClick = () => {
    let i = repeat1.index < 2 ? (repeat1.index += 1) : 0;
    setRepeat1({ index: i });
  };

  useEffect(() => {
    dispatch(setSongIndex(0));
  }, []);

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  useEffect(() => {
    if (isNextSong) {
      console.log(isNextSong);
      updateCurrentNext();
    }
  }, [isNextSong]);
  const updateCurrentPre = () => {
    if (current.index === 0 && repeat1.index === 1) {
      dispatch(
        setCurrent(
          data3.find(value => {
            return value.index === data3.length - 1;
          })
        )
      );
    } else if (current.index === 0) {
      return;
    } else {
      dispatch(
        setCurrent(
          data3.find(value => {
            return value.index === current.index - 1;
          })
        )
      );
    }
  };

  const updateCurrentNext = () => {
    if (shuffle) {
      setRandom(Math.floor(Math.random() * 12));
      dispatch(
        setCurrent(
          data3.find(value => {
            return value.index === random;
          })
        )
      );
    } else {
      if (current.index === data3.length - 1 && repeat1.index === 1) {
        dispatch(
          setCurrent(
            data3.find(value => {
              return value.index === 0;
            })
          )
        );
      } else if (current.index === data3.length - 1) {
        return;
      } else if (repeat1.index === 2) {
        dispatch(setCurrent(current));
      } else {
        dispatch(
          setCurrent(
            data3.find(value => {
              return value.index === current.index + 1;
            })
          )
        );
      }
    }
  };
  const handleShuffle = () => {
    if (!shuffle) {
      setShuffle(true);
    } else {
      setShuffle(false);
    }
  };
  const handleHeart = () => {
    if (!heart) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  };
  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return 'volumeMuted';
    } else if (state.volume > 0 && state.volume < 0.33) {
      return 'volumeLow';
    } else if (state.volume >= 0.33 && state.volume < 0.66) {
      return 'volumeNormal';
    } else {
      return 'volumeFull';
    }
  }, [state.volume, state.muted]);

  const repeatIcon = useMemo(() => {
    if (repeat1.index === 0) {
      return 'repeat';
    } else if (repeat1.index === 1) {
      return 'repeat';
    } else {
      return 'repeat1';
    }
  }, [repeat1.index]);
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="min-w-[11.25] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="w-16 h-16 overflow-hidden object-cover object-center">
              <img src={current.linkimg} alt="" />
            </div>
            <div className="pl-2">
              <h6 className="text-[1rem] font-semibold cursor-pointer hover:text-indigo-700 line-clamp-1">
                {current.title}
              </h6>
              <p className="text-[0.75rem] font-semibold cursor-pointer text-[#9ca3af]">
                {current.more}
              </p>
            </div>
            <div className="flex items-center ml-3">
              <button
                onClick={handleHeart}
                className={`w-9 h-9 flex items-center justify-center ${
                  heart ? 'text-pink-400' : 'text-white'
                } text-opacity-70
                hover:text-opacity-100 hover:text-pink-400`}
              >
                <Icon size={16} name="heart" />
              </button>
              <div className="text-[20px] p-1 cursor-pointer hover:text-pink-400">
                <HiOutlineDotsHorizontal />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-[45rem] w-[35%] flex flex-col items-center">
        <div className="flex items-center gap-x-4">
          <button
            onClick={handleShuffle}
            className={`w-9 h-9 flex items-center justify-center text-white ${
              shuffle ? 'text-pink-400' : 'text-opacity-70'
            }  hover:text-pink-400`}
          >
            <Icon size={16} name="shuffle" />
          </button>
          <button
            onClick={updateCurrentPre}
            className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400"
          >
            <Icon size={16} name="playerPrev" />
          </button>
          <button
            onClick={controls[state?.playing ? 'pause' : 'play']}
            className="w-9 h-9 flex border-2 border-white rounded-full items-center justify-center text-white hover:border-pink-400 hover:text-pink-400"
          >
            <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
          </button>
          <button
            onClick={updateCurrentNext}
            className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400"
          >
            <Icon size={16} name="playerNext" />
          </button>
          <button
            onClick={() => {
              handleClick();
            }}
            className={`w-9 h-9 flex items-center justify-center text-white ${
              repeat1.index === 1 || repeat1.index === 2
                ? 'text-pink-400'
                : 'text-opacity-70'
            }  hover:text-pink-400`}
          >
            <Icon size={16} name={repeatIcon} />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2 mt-1.5">
          {audio}
          <div className="text-[0.8rem] text-white font-medium">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={value => controls.seek(value)}
          />
          <div className="text-[0.8rem] text-white font-medium">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25] w-[30%] flex justify-end items-center">
        <button
          className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400"
        >
          <Icon size={16} name="lyrics" />
        </button>
        <button
          className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400"
        >
          <Icon size={16} name="window" />
        </button>
        <button
          onClick={controls[state.muted ? 'unmute' : 'mute']}
          className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400"
        >
          <Icon size={16} name={volumeIcon} />
        </button>
        <div className="w-[93px] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? '0' : state?.volume}
            onChange={value => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button
          className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400"
        >
          <Icon size={20} name="list" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
