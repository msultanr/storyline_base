import Image from "next/image";
import localFont from "next/font/local";

import LoveStoryImg from "@/assets/couple/love_story.jpg";

const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });
const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });

export default function LoveStorySection() {
    return (
        <div id='love_story' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            {/* Quotes banner */}
            <div className="relative h-[100vh]">
                <Image src={LoveStoryImg} alt="quotes background" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 items-center justify-center px-6 py-12">
                    <p className={`${cormorantUpright.className} text-white text-xl md:text-2xl mt-2`}>
                    Awal Bertemu </p>
                    <p className={`${cormorantUpright.className} text-white/75 text-base md:text-lg mt-4`}>
                    Tidak ada yang menyangka, sebuah pertemuan biasa dalam komunitas sosial justru menjadi awal dari kisah luar biasa ini.</p>
                    <p className={`${cormorantUpright.className} text-white text-xl md:text-2xl mt-2`}> Menjalin Hubungan</p>
                    <p className={`${cormorantUpright.className} text-white/75 text-base md:text-lg mt-4`}>
                    Awalnya hanya sekadar teman berbagi cerita, perlahan rasa itu tumbuh, tanpa kami sadari sudah menjadi bagian penting dalam hidup masing-masing. <br></br>
                    </p>
                    <p className={`${cormorantUpright.className} text-white text-xl md:text-2xl mt-2`}>
                    Lamaran</p><p className={`${cormorantUpright.className} text-white/75 text-base md:text-lg mt-4`}>
                    Dengan keberanian dan doa, lamaran sederhana menjadi titik baru yang mengukuhkan keyakinan kami untuk bersama dalam suka maupun duka. <br></br>
                    </p>
                    <p className={`${cormorantUpright.className} text-white/90 text-base md:text-lg mt-4`}>
                    Pernikahan</p> <p className={`${cormorantUpright.className} text-white/75 text-base md:text-lg mt-4`}>
                    Dengan penuh rasa syukur dan bahagia, kami siap mengikat janji suci, mempersembahkan kisah cinta ini untuk menjadi perjalanan seumur hidup.
                    </p>
                </div>
            </div>
        </div>
    );
}
