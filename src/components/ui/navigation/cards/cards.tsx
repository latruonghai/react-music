import React from 'react'
import { data } from '../../../../typings/data/data'
import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';


const cards = ({ title, datas }) => {

    const styleImage = (title) => {
        switch (title) {
            case 'Gần Đây':
                return 'relative lg:h-36 md:h-36 w-full overflow-hidden object-cover object-center transform group-hover:scale-125 group-hover:opacity-40 duration-1000'
            default:
                return 'relative lg:h-full md:h-48 w-full overflow-hidden object-cover object-center transform group-hover:scale-125 group-hover:opacity-40 duration-1000'
        }
    }

    const styleCard = (title) => {
        switch (title) {
            case 'Gần Đây':
                return 'relative h-30 w-36 rounded-lg overflow-hidden group'
            default:
                return 'relative h-52 w-52 rounded-lg overflow-hidden group'
        }
    }


    return (
        <section className="flex-col pl-[17rem]">
            <span className="text-xl text-white pl-6">{ title}</span>
            <div className="flex">
            {datas.map((item) => {
                return (
                    <div className="p-4 pb-6 sm:w-1/2 lg:w-1/3 " key={item.id}>
                        <div className={`${styleCard(title)}`}>
                        <div className="absolute items-center justify-evenly inset-0 flex text-white z-10 opacity-0 group-hover:opacity-100">
                            <div className="text-[20px] p-1 cursor-pointer hover:bg-white hover:bg-opacity-50 hover:rounded-full">
                                <AiOutlineHeart/>
                            </div>
                            <div className="text-[40px] cursor-pointer hover:opacity-80">
                                <BsPlayCircle/>
                            </div>
                            <div className="text-[20px] p-1 cursor-pointer hover:bg-white hover:bg-opacity-50 hover:rounded-full">
                                <HiOutlineDotsHorizontal/>
                            </div>
                        </div>
                            <img className={`${styleImage(title)}`}
                                src={item.linkimg}
                                key={item.id} />
                    </div>
                    <div className="pt-1 text-left text-white transition ease-in block">
                        <h1 className="text-sm font-semibold cursor-pointer hover:text-indigo-700">{item.title}</h1>
                        <span className="text-sm font-semibold cursor-pointer text-[#9ca3af]">{ item.more}</span>    
                    </div>
                </div>
                )
            })};
            </div>
        </section>   
  )
}

export default cards