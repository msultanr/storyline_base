import Image from "next/image";
import localFont from "next/font/local";

import HurufArab from "@/assets/huruf-arab.jpg";
import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });

export default function PrayerSection() {
    return (
        <>
            <MobileLayout className="px-4 py-10" id="rules">
                <HeadingTitle title="DOA PENGANTIN" className={`${babyDoll.className} mx-auto flex items-center justify-center text-center mb-5`} />
                <Image
                    src={HurufArab}
                    alt="Huruf Arab"
                    sizes='250px'
                    className="w-48 mx-auto mb-5"
                    data-aos="fade-left"
                />

                <p data-aos="fade-in" className="text-center text-balance text-xl mb-5">
                    بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
                </p>
                <p data-aos="fade-right" className={`${babyDoll.className} text-center text-sm md:text-base text-pretty w-11/12 mx-auto mt-3`}>
                    &quot;Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan semoga Allah menyatukan kalian dalam kebaikan.&quot;
                </p>
            </MobileLayout>
        </>
    )
}