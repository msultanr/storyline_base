"use client";

import localFont from 'next/font/local';
import dynamic from "next/dynamic";
import Image from "next/image";

import { Helpers } from '@/components/libs/helpers/index.helper';
import ringAnimationJson from "@/assets/icon-animation/ring-animation.json";
import cheersAnimationJson from "@/assets/icon-animation/cheers-animation.json";
import { AKAD_DATE, AKAD_TIME, START_TIME_RECEPTION, MAPS_LOCATION, ADDRESS_LOCATION, END_TIME_RECEPTION } from '@/components/libs/constants/event.const';
import { Icon } from '@iconify/react';
import HeadingTitle from '../micro/heading_title.micro';
import eventImage from '@/assets/couple/event.jpg';

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false }); 

export default function EventSection() {

    return (
        <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            <div className="relative h-[100vh]">
                <div
                    className="absolute inset-0 bg-fixed bg-contain bg-center"
                    style={{ backgroundImage: `url(${eventImage.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                <div className="relative z-10 w-full flex flex-col items-center justify-start pt-8 text-white" id='event'>
                    {/* AKAD */}
                    <div className='w-20 xxs:w-24 invert'>
                        {/* <div ref={animationContainer} /> */}
                        <DynamicLottie
                            loop
                            animationData={ringAnimationJson}
                            autoplay
                            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                    </div>

                    <HeadingTitle className={` ${cormorantUpright.className} drop-shadow`} title='AKAD' />

                    <div className={` ${cormorantUpright.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                        <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                            <div className='w-fit overflow-hidden'>
                                <div className='underline text-center drop-shadow-md' data-aos="fade-left">Minggu, {Helpers.formatDateRange(AKAD_DATE, null, 'id')} <br /> Pukul {AKAD_TIME}</div>
                            </div>
                        </div>

                        <div className='w-11/12 overflow-hidden'>
                            <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance drop-shadow-md'>
                                {ADDRESS_LOCATION}
                            </p>
                        </div>

                        <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className=' inline-flex items-center gap-3 px-8 py-4 bg-white/20 hover:bg-white/30 text-white text-lg md:text-xl font-normal rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl'>
                            <Icon icon="simple-icons:googlemaps" />
                            Maps
                        </button>
                    </div>

                    {/* RECEPTION */}
                    <div className='w-20 xxs:w-24 mt-3 xxs:mt-5 invert'>
                        <DynamicLottie
                            loop
                            animationData={cheersAnimationJson}
                            autoplay
                            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                    </div>

                    <HeadingTitle className={` ${cormorantUpright.className} drop-shadow`} title='RESEPSI' />

                    <div className={` ${cormorantUpright.className} flex flex-col items-center justify-center my-2 gap-y-3`}>

                        <div className='flex items-center justify-center font-medium h-fit overflow-hidden xxs:text-xl sm:text-2xl'>
                            <div className='w-fit overflow-hidden'>
                                <div className='underline text-center drop-shadow-md' data-aos="fade-left">
                                    Minggu, {Helpers.formatDateRange(AKAD_DATE, null, 'id')}
                                    <br /> Pukul {START_TIME_RECEPTION} - {END_TIME_RECEPTION}
                                </div>
                            </div>
                        </div>

                        <div className='w-11/12 overflow-hidden'>
                            <p data-aos="fade-down" className='text-xs xxs:text-sm sm:text-base text-center text-balance drop-shadow-md'>
                                {ADDRESS_LOCATION}
                            </p>
                        </div>

                        <button data-aos="fade-down" onClick={() => Helpers.redirectToBlank(MAPS_LOCATION)} className=' inline-flex items-center gap-3 px-8 py-4 bg-white/20 hover:bg-white/30 text-white text-lg md:text-xl font-normal rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl'>
                            <Icon icon="simple-icons:googlemaps" />
                            Maps
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}