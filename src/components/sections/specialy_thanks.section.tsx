import Image from 'next/image';
import localFont from 'next/font/local';

import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";

import IconDinanti from "@/assets/logo/logo_dinanti.svg";
import { Icon } from '@iconify/react';
import { NEWLYWEDS_TITLE } from '@/components/libs/constants/others.const';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import thxImg from '@/assets/album/foto background 2.jpg';

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });

export default function SpecialyThanksSection() {
    return (
           <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw] ">
                <div className="relative h-[75vh]">
                <Image src={thxImg} alt="specialy thanks background" fill priority className="object-cover object-center" /> 
                    <MobileLayout className={`${cormorantUpright.className} text-center text-white`}>
                    <HeadingTitle title="Terima Kasih" className={`${cormorantUpright.className} flex flex-col items-center justify-center font-light text-4xl xxs:text-5xl sm:text-6xl xxs:mt-1 text-white py-8`} />

                    <div className='flex flex-col items-center justify-center gap-y-3 xxs:gap-y-2 text-xs xxs:text-sm sm:text-base mt-3 text-white py-10'>
                        <p>Merupakan sebuah kehormatan, dan kebahagiaan bagi kami
                            apabila Bapak, Ibu, Saudara/i berkenan hadir dan memberikan
                            do’a restunya.</p>
                        <br />
                        <p className='text-balance'>Atas kehadiran dan do’a restunya, kami ucapkan terima kasih.</p>
                    </div>

                    <p className={`${jasmineRosemary.className} my-5 text-4xl xxs:text-6xl`}>{NEWLYWEDS_TITLE}</p>

                    <footer className='flex flex-col items-center justify-center text-[0.6rem] xxs:text-xs sm:text-sm text-white'>
                        {/* <p>Turut berbahagia segenap keluarga besar</p>
                        <p className={`${shorelinesScript.className} text-lg xxs:text-xl`}>Nafi &Alif</p> */}
                        <div className='flex items-center flex-col justify-center gap-x-2'>
                            <p className='flex items-center gap-x-1'>Made with <span><Icon icon="icon-park-outline:oval-love-two" /></span> by</p>
                            <Link href="https://dinanti.id" target='_blank'>
                                <Image src={IconDinanti} alt='logo dinanti' sizes='100vw' className='w-14 invert' />
                            </Link>
                            <p className='mt-2 text-xs'>Design by Dinanti</p>
                        </div>
                    </footer>
                    </MobileLayout>
                </div>
            </div>
        
    );
}