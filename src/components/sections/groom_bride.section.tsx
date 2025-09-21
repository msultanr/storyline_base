import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

import IconGroomBride from "@/assets/icon_groom_bride.svg";
import GroomImg from "@/assets/couple/groom.jpg";
import BrideImg from "@/assets/couple/bride.jpg";
import QuotesImg from "@/assets/couple/quotes.jpg";
import { BRIDE_FATHER, BRIDE_MOTHER, BRIDE_NAME, BRIDE_USERNAME, GROOM_FATHER, GROOM_MOTHER, GROOM_NAME, GROOM_USERNAME } from "@/components/libs/constants/others.const";

const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });
const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });

export default function GroomBrideSection() {
    return (
        <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            {/* Quotes banner */}
            <div className="relative h-[60vh]">
                <Image src={QuotesImg} alt="quotes background" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                    <p className={`${cormorantUpright.className} text-white text-center text-lg leading-relaxed`}>
                        “Dan diantara ayat-ayat-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu merasa nyaman kepadanya,
                        dan dijadikan-Nya di antaramu mawadah dan rahmah. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”
                        <br />
                        <span className={`${jasmineRosemary.className} mt-3 inline-block text-white/80`}>Q.S. Ar-Rum: 21</span>
                    </p>
                </div>
            </div>

            {/* Bride Section */}
            <section className="relative h-[100vh]">
                <Image src={BrideImg} alt="Bride" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
                    <p className={`${jasmineRosemary.className} text-white/90 text-4xl`}>The Bride</p>
                    <h2 className={`${cormorantUpright.className} text-white text-4xl md:text-5xl mt-2`}>{BRIDE_NAME}</h2>
                    <p className={`${cormorantUpright.className} text-white/90 text-base md:text-lg mt-4`}>Putri dari</p>
                    <p className={`${cormorantUpright.className} text-white/90 text-base md:text-lg`}>Bapak {BRIDE_FATHER} & Ibu {BRIDE_MOTHER}</p>
                    <Link href={`https://www.instagram.com/${BRIDE_USERNAME.replace(/@/g, '')}`} target="_blank" className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/30">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9Z"/></svg>
                        <span>{BRIDE_USERNAME}</span>
                    </Link>
                </div>
            </section>

            {/* Groom Section */}
            <section className="relative h-[100vh]">
                <Image src={GroomImg} alt="Groom" fill priority className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
                    <p className={`${jasmineRosemary.className} text-white/90 text-4xl`}>The Groom</p>
                    <h2 className={`${cormorantUpright.className} text-white text-4xl md:text-5xl mt-2`}>{GROOM_NAME}</h2>
                    <p className={`${cormorantUpright.className} text-white/90 text-base md:text-lg mt-4`}>Putra dari</p>
                    <p className={`${cormorantUpright.className} text-white/90 text-base md:text-lg`}>Bapak {GROOM_FATHER} & Ibu {GROOM_MOTHER}</p>
                    <Link href={`https://www.instagram.com/${GROOM_USERNAME.replace(/@/g, '')}`} target="_blank" className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/30">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9Z"/></svg>
                        <span>{GROOM_USERNAME}</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
