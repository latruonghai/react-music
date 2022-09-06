import React from 'react'
import {useState} from 'react'
import {useMemo} from 'react'
import { Icon } from '../../../icons/audioPlayer'
import {useAudio} from 'react-use';
import {secondsToTime} from './utils';
import CustomRange from '../range';

const AudioPlayer = () => {
  
  const [audio, state, controls, ref] = useAudio({
    src: 'https://rr1---sn-4g5ednld.googlevideo.com/videoplayback?expire=1662477653&ei=9RAXY-GuKY7t7QSk2rawAg&ip=196.196.53.131&id=o-ADFV5y-CtNO5geEKF_PG_SXwU6G1AiuYtCYJppbkxGRA&itag=140&source=youtube&requiressl=yes&mh=-F&mm=31%2C26&mn=sn-4g5ednld%2Csn-aigl6nzl&ms=au%2Conr&mv=m&mvi=1&pl=24&initcwndbps=1583750&spc=lT-Khn5zbregrIzGfRuc29QSaIovVfM&vprv=1&mime=audio%2Fmp4&ns=Egv9Ev7NDRQ1cgkMFAZWUCcH&gir=yes&clen=4293894&dur=265.264&lmt=1660975570258270&mt=1662455603&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=5532434&n=--2AlyIrCNKlng&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgXIeTeZHNKt2gVeI-giud71o22sjkXTf0f1Sg2Ak7_qICIHu9GAivHrYrbVj6EEm001vFtfgUlHg7YyX7BeT-jZjo&sig=AOq0QJ8wRQIhAJzFRjU8be1GBly7mZyLimb9Qx9KyYzHTwWYti7Vg18oAiBGOX2xnSgELs0g54lR4RvazmbFYsW3I37BXZ98itb7gg%3D%3D',
  });

  const volumeIcon = useMemo(() => { 
    if (state.volume === 0 || state.muted) {
      return 'volumeMuted'
    }
    else if (state.volume > 0 && state.volume < 0.33) {
      return 'volumeLow'
    }
    else if (state.volume >= 0.33 && state.volume < 0.66) {
      return 'volumeNormal'
    }
    else {
      return 'volumeFull'
    }
  }, [state.volume, state.muted])
  
  return (
      <div className="flex px-4 justify-between items-center h-full">
          <div className="min-w-[11.25] w-[30%]">
            left
        </div>
          <div className="max-w-[45rem] w-[35%] flex flex-col items-center">
            <div className="flex items-center gap-x-4">
                  <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400">
                    <Icon size={16} name="shuffle"/>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400">
                    <Icon size={16} name="playerPrev"/>
                  </button>
                  <button onClick={controls[state?.playing ? 'pause' : 'play']}  className="w-9 h-9 flex border-2 border-white rounded-full items-center justify-center text-white hover:border-pink-400 hover:text-pink-400">
                    <Icon size={16} name={ state?.playing ? 'pause' : 'play'} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400">
                    <Icon size={16} name="playerNext"/>
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 hover:text-pink-400">
                    <Icon size={16} name="repeat"/>
                  </button>
            </div>
            <div className="w-full flex items-center gap-x-2 mt-1.5">
          {audio}
          <div className="text-[0.8rem] text-white font-medium">
            {secondsToTime(state?.time)}
          </div>
              <CustomRange step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time} 
                        onChange={value => controls.seek(value)}/>  
          <div className="text-[0.8rem] text-white font-medium">
            {secondsToTime(state?.duration)}
          </div>
            </div>
        </div>
          <div className="min-w-[11.25] w-[30%] flex justify-end items-center">
              <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400">
                <Icon size={16} name="lyrics"/>
              </button>
              <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400">
                <Icon size={16} name="window"/>
              </button>
              <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400">
                <Icon size={16} name={volumeIcon} />
              </button>
        <div className="w-[93px] max-w-full">
          <CustomRange step={0.01}
            min={0}
            max={1}
            value={state.muted ? "0" : state?.volume}
            onChange={value => {
              controls.unmute()
              controls.volume(value)
            }} /> 
        </div>
               <button className="w-9 h-9 flex items-center justify-center text-white text-opacity-70
                hover:text-opacity-100 hover:text-pink-400">
                <Icon size={20} name="list"/>
              </button>
        </div>
      </div>
  )
}

export default AudioPlayer