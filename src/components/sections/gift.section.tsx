import Image from "next/image";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import toast, { Toaster } from "react-hot-toast";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MobileLayout from "../layouts/mobile.layout";
import giftAnimationData from "@/assets/icon-animation/gift-animation.json";
import HeadingTitle from "../micro/heading_title.micro";

import IconMastercard from "@/assets/logo/mastercard.svg";
import LogoPermata from "@/assets/logo/permata.png";
import LogoBNI from "@/assets/logo/BNI_logo.svg";

import { ADDRESS_GIFT } from "@/components/libs/constants/others.const";

import giftImg from "@/assets/album/DSC08322.jpg";

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false }); 

const inter = Inter({ subsets: ['latin'] })

export default function GiftSection() {
    const copyToClipboard = ({ value, type }: { value: string, type: "REK" | "ADDRESS" | "VIR" }) => {
        navigator.clipboard.writeText(value);
        return toast.success(type === "REK" ? `Bank account number : ${value} has been copied successful` : type === "VIR" ? `E-wallet phone number : ${value} has been copied successful` : "Address has been copied successful");
    };

    const payments = [
        { name: 'PERMATA BANK', img: LogoPermata, value: '4204790650', beneficiary: 'Ine Nurinsani' }
    ]

    return (
        <MobileLayout className={`${cormorantUpright.className} flex items-center flex-col`}>
            <div id='gift' className="relative md:ml-[65vw] w-full md:w-[35vw]">
                {/* Background with overlay */}
                <div className="relative h-[100vh]">
                    <Image src={giftImg} alt="gift background" fill priority className="object-cover object-center" />
                    <div className="absolute inset-0 bg-black/50" />
                    
                    <Toaster position="top-center" reverseOrder={false} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-2">
                        {/* Animation */}
                        <div className='w-24 xxs:w-28 sm:w-32 mb-4'>
                            <DynamicLottie
                                loop
                                animationData={giftAnimationData}
                                autoplay
                                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                            />
                        </div>

                        {/* Title */}
                        <HeadingTitle title="SEND GIFT" className={`${cormorantUpright.className} text-white text-3xl md:text-4xl font-light mb-4`} />

                        {/* Description */}
                        <p className="text-center text-white/90 text-sm md:text-base px-4 mb-6 max-w-md" data-aos="fade-down">
                            Jika memberi adalah bentuk tanda kasih Anda, fitur ini dapat memberikan Anda kemudahan
                        </p>

                        {/* Copy Address Button */}
                        <button 
                            data-aos="fade-in" 
                            onClick={() => copyToClipboard({ value: ADDRESS_GIFT, type: "ADDRESS" })} 
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300 mb-8"
                        >
                            <Icon className="text-lg" icon="solar:copy-line-duotone" />
                            <span className="font-medium">COPY ADDRESS</span>
                        </button>

                        {/* Payment Cards Carousel */}
                        <div className="w-full max-w-sm">
                            <Carousel 
                                className={`${inter.className}`} 
                                showArrows={true} 
                                infiniteLoop 
                                autoPlay 
                                showThumbs={false}
                                showStatus={false}
                                interval={5000}
                            >
                                {payments?.map((data, idx) => (
                                    <div key={idx} className="w-full">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                                            {/* Bank Logo and Mastercard */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="w-20">
                                                    <Image src={data?.img} alt={data?.name} className="w-full h-auto" />
                                                </div>
                                                <div className="w-8">
                                                    <Image src={IconMastercard} alt="mastercard" className="w-full h-auto" />
                                                </div>
                                            </div>

                                            {/* Account Details */}
                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-gray-600 text-sm mb-1">Account Number</p>
                                                    <p className="text-2xl font-bold text-gray-800">{data?.value}</p>
                                                </div>
                                                
                                                <div>
                                                    <p className="text-gray-600 text-sm mb-1">Beneficiary</p>
                                                    <p className="text-lg font-semibold text-gray-800">{data?.beneficiary}</p>
                                                </div>
                                            </div>

                                            {/* Copy Button */}
                                            <button 
                                                onClick={() => copyToClipboard({ value: data?.value, type: "REK" })} 
                                                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-[#E8B787] hover:bg-[#E8B787]/90 text-white rounded-lg font-medium transition-colors duration-300"
                                            >
                                                <Icon className="text-lg" icon="solar:copy-line-duotone" />
                                                <span>COPY ACCOUNT</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </MobileLayout>
    );
}