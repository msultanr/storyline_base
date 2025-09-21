import Image from "next/image";
import localFont from "next/font/local";

import MobileLayout from "@/components/layouts/mobile.layout";
import imgCountdown from "@/assets/countdown_img.jpg";
import useTimer from "@/components/libs/hooks/countdown.hook";
import { AKAD_DATE } from "@/components/libs/constants/event.const";

const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf"});
const CormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf"});

export default function CountdownSection() {
    const { days, hours, minutes } = useTimer(new Date(`${AKAD_DATE}T08:00:00`));

    return (
        <MobileLayout>
            <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            <div className="relative h-[60vh]">
                <Image src={imgCountdown} alt="countdown image" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="">
                        <div className="flex flex-col items-center justify-center xxs:gap-y-2 py-2">
                            <p className={`${CormorantUpright.className} text-white text-3xl xss:text-5xl text-nowrap tracking-wider p-2`}>COUNT DOWN</p>
                        </div>
                        <div className={`${CormorantUpright.className} text-white flex items-center justify-center xxs:gap-6 gap-3`}>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Days</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{days}</h5>
                            </div>

                            <p className="text-4xl mt-5">:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Hours</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{hours}</h5>
                            </div>

                            <p className="text-4xl mt-6">:</p>

                            <div className="xs:w-16 w-14 font-semibold cursor-pointer rounded-xl text-center xs:py-2 py-1 leading-snug text-white">
                                <p className="text-sm xxs:text-base sm:text-xl tracking-wide">Minutes</p>
                                <h5 className="xxs:text-2xl text-sm font-normal">{minutes}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </MobileLayout>
    );
}