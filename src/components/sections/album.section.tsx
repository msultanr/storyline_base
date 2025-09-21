"use client";

import Image from "next/image";
import localFont from "next/font/local";

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });

// Import album images
import album1 from "@/assets/album/DSC07816.jpg";
import album2 from "@/assets/album/DSC07839.jpg";
import album3 from "@/assets/album/DSC07882.jpg";
import album4 from "@/assets/album/DSC08322.jpg";
import album6 from "@/assets/album/DSC08499.jpg";
import album7 from "@/assets/album/DSC08555 2.jpg";
import album8 from "@/assets/album/DSC08588.jpg";
import album9 from "@/assets/album/DSC08678.jpg";
import album10 from "@/assets/album/DSC08705.jpg";
import album11 from "@/assets/album/Foto background 1.jpg";
import album12 from "@/assets/album/Foto background 2.jpg";

const albumImages = [
    album1, album2, album3, album4,
    album6, album7, album8,
    album9, album10, album11, album12
];

export default function AlbumSection() {
    return (
        <div id='album' className="relative md:ml-[65vw] w-full md:w-[35vw] bg-white">
            <Image src={album12} alt="album background" fill priority className="object-cover object-center" />
            <div className="relative h-[100vh]">
            {/* Header */}
            <div className="flex flex-col items-center py-8 px-6">
                <p className={`${cormorantUpright.className} text-5xl md:text-4xl text-white text-center`}>
                    Our Gallery
                </p>
                <div className="w-24 h-0.5 bg-[#E8B787] mt-4"></div>
            </div>

            {/* Photo Grid */}
            <div className="px-4 pb-8">
                <div className="grid grid-cols-3 gap-2">
                    {albumImages.map((image, index) => (
                        <div 
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Image
                                src={image}
                                alt={`Gallery photo ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 33vw, 11vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom spacing for scroll */}
            <div className="h-20"></div>
        </div>
        </div>
    );
}
