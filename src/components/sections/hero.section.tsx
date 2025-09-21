"use client";

import Image from "next/image";
import localFont from 'next/font/local';

import CoverHero from "@/assets/cover_hero.jpg";
import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });

export default function HeroSection() {
    return (
        <div id="home" className="relative w-full h-screen">
            <div className="fixed inset-y-0 left-0 hidden md:block w-[65vw]">
                <div className="absolute inset-0">
                    <Image
                        src={CoverHero}
                        alt="cover left"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                </div>
                <div className="absolute inset-0 flex items-center pl-12">
                    <div>
                        <p className={`${jasmineRosemary.className} text-white/90 text-xl`}>The Wedding of</p>
                        <h2 className={`${cormorantUpright.className} text-white text-5xl md:text-6xl`}>{NEWLYWEDS_TITLE}</h2>
                    </div>
                </div>
            </div>

            <div className="ml-0 md:ml-[65vw] w-full md:w-[35vw] h-screen overflow-y-auto">
                <div className="relative h-[100vh]">
                    <Image
                        src={CoverHero}
                        alt="cover right"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center px-6">
                        <p className={`${jasmineRosemary.className} text-white/90 text-4xl`}>The Wedding of</p>
                        <h3 className={`${cormorantUpright.className} text-white text-4xl`}>{NEWLYWEDS_TITLE}</h3>
                        <p className={`${cormorantUpright.className} text-white text-xl`}>Sabtu, 04 Oktober 2025</p>
                    </div>
                </div>
                <div/>
            </div>
        </div>
    );
}
