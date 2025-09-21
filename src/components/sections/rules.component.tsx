import localFont from "next/font/local";
import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
import food from "@/assets/rules/food.jpg";
import masjid from "@/assets/rules/masjid.jpg";
import pakaian from "@/assets/rules/pakaian.jpg";
import pray from "@/assets/rules/pray.jpg";
import Image from "next/image";


export default function RulesSection() {
    return (
        <>
        <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            {/* Quotes banner */}
            <div className="relative h-[60vh]">
            <MobileLayout className="px-4 py-5 mt-10" id="rules">
                <HeadingTitle title="ADAB MENGHADIRI PERNIKAHAN" className={`${babyDoll.className} mx-auto flex items-center justify-center text-center mb-4`} />
                <div data-aos="fade-right" className={`${babyDoll.className} rounded-xl bg-white shadow-lg p-5 flex flex-wrap gap-4`} >
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:justify-between">
                        <div data-aos="fade-right" className="flex gap-4 items-center w-full sm:w-1/2">
                            <Image
                                src={pakaian}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            />
                            <p className="">Memakai pakaian sopan& menutup aurat</p>
                        </div>
                        <div data-aos="fade-left" className="flex gap-4 items-center w-full sm:w-1/2">
                            <Image
                                src={masjid}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            />
                            <p className="">Memperhatikan waktu sholat</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:justify-between">
                        <div data-aos="fade-right" className="flex gap-4 items-center w-full sm:w-1/2">
                            <Image
                                src={food}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            />
                            <p className="">Memperhatikan adab makan & minum</p>
                        </div>
                        <div data-aos="fade-left" className="flex gap-4 items-center w-full sm:w-1/2">
                            <Image
                                src={pray}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            />
                            <p className="">Mendoakan pengantin</p>
                        </div>
                    </div>
                </div>
            </MobileLayout>
            </div>
            </div>
        </>
    )
}