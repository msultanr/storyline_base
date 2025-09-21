"use client";

import Image from "next/image";
import localFont from 'next/font/local';
import Drawer from 'react-modern-drawer';

// Styles
import 'react-modern-drawer/dist/index.css';
const schoolbell = localFont({ src: "../../assets/fonts/Schoolbell-Regular.ttf" });
const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
const shorelinesScript = localFont({ src: "../../assets/fonts/Shorelines Script Bold.otf" });
const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });

import CoverHero from "@/assets/cover_hero.jpg";
import MobileLayout from "@/components/layouts/mobile.layout";
import { useCoverStore } from "@/components/libs/stores/cover.store";
import { useMusicStore } from "@/components/libs/stores/music.store";
import { NEWLYWEDS_TITLE } from "@/components/libs/constants/others.const";
import { DATE_COVER } from "../libs/constants/event.const";

export default function CoverSection({ to }: { to?: string }) {
    const { setMusic } = useMusicStore();
    const { isCover, setCover } = useCoverStore();

    const handleOpenInvitation = () => {
        setMusic(true);
        setCover(false);
    }

    return (
        <Drawer open={isCover} direction="left" zIndex={100} customIdSuffix="cover-drawer" size="100%" className="">
            <div className="fixed top-0 left-0 w-full h-full">
                <MobileLayout className="overflow-hidden h-screen relative" id="cover">
                    {/* Background Image dengan Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={CoverHero}
                            alt="couple cover"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-8 text-center">
                        <div className="max-w-2xl mx-auto space-y-6"
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-delay="300"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-sine"
                        >
                            {/* "The Wedding of" */}
                            <h1 className={`${jasmineRosemary.className} text-white text-5xl md:text-7xl lg:text-4xl font-normal`}
                                data-aos="fade-down"
                                data-aos-delay="600"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                The Wedding of
                            </h1>

                            {/* Nama Pasangan */}
                            <h1 className={`${cormorantUpright.className} text-white text-5xl md:text-7xl lg:text-8xl font-normal leading-tight`}
                                data-aos="fade-up"
                                data-aos-delay="900"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                Ine & Leo
                            </h1>

                            {/* "Dear" */}
                            <p className={`${cormorantUpright.className} text-white text-lg md:text-xl font-normal`}
                                data-aos="fade-up"
                                data-aos-delay="1200"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                Dear
                            </p>

                            {/* "Tamu Undangan" */}
                            <p className={`${cormorantUpright.className} text-white text-2xl md:text-3xl font-semibold`}
                                data-aos="fade-up"
                                data-aos-delay="1500"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                Tamu Undangan
                            </p>

                            {/* Button Open Invitation */}
                            <div className="pt-8"
                                data-aos="fade-up"
                                data-aos-delay="1800"
                                data-aos-duration="900"
                                data-aos-offset="0">
                                <button
                                    onClick={handleOpenInvitation}
                                    className={`${cormorantUpright.className} inline-flex items-center gap-3 px-8 py-4 bg-white/20 hover:bg-white/30 text-white text-lg md:text-xl font-normal rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl`}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    Open Invitation
                                </button>
                            </div>
                        </div>
                    </div>
                </MobileLayout>
            </div>
        </Drawer>
    );
}
