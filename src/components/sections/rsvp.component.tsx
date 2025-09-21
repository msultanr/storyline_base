
"use client";

import dynamic from "next/dynamic";
import moment from "moment-timezone";
import { Field, Formik } from "formik";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import MobileLayout from "../layouts/mobile.layout";
import { SPREADSHEET_ID } from "@/components/libs/constants/others.const";
import HeadingTitle from "../micro/heading_title.micro";

import rsvpAnimmationData from "@/assets/icon-animation/rsvp-animation.json";
import { useRSVPSubmitStore } from "@/components/libs/stores/rsvp_submit.store";
import { RSVP } from "@dinantitech/rsvp";
import Image from "next/image";
import { selectAvatar } from "@/components/libs/helpers/select_avatar.helper";

import rsvpImg from "@/assets/album/DSC07882.jpg";

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false }); 

type FormType = {
    name: string;
    guestCount: 1 | 2;
    attendance: 'yes' | 'no';
}

const Rsvp = new RSVP({ sheetName: 'RSVP', sheetID: SPREADSHEET_ID });

export default function RSVPSection() {
    const { isRSVPSubmit } = useRSVPSubmitStore();

    const [loading, setLoading] = useState<boolean>(false);
    const [messageLimit, setMessageLimit] = useState<number>(5);
    const [listRsvp, setListRsvp] = useState<Record<string, any>[] | null>([]);

    const handleLoadMore = () => setMessageLimit(prevLimit => prevLimit + 5);

    useEffect(() => {
        setLoading(true);
        Rsvp.getRSVP().then((val: any) => {
            const sortedData = val?.data?.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setListRsvp(sortedData);
            setLoading(false);
        });
    }, []);

    const buildWhatsappUrl = (values: FormType) => {
        const text = `RSVP%0A%0ANama: ${encodeURIComponent(values.name)}%0AJumlah tamu: ${values.guestCount}%0AKonfirmasi: ${values.attendance === 'yes' ? 'Ya, Saya akan datang' : 'Maaf, Saya tidak bisa datang'}`;
        return `https://wa.me/?text=${text}`;
    };

    return (
        <MobileLayout id="rsvp">
            <div id='couple' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            {/* Banner */}
            <div className="relative h-[90vh]">
                <Image src={rsvpImg} alt="quotes background" fill priority className="object-cover object-center" />

                {/* Panel glass */}
                <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-black p-5 sm:p-7 md:p-8">
                    <div className='w-20 xxs:w-24 mx-auto'>
                        <DynamicLottie
                            loop
                            animationData={rsvpAnimmationData}
                            autoplay
                            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                    </div>

                    <HeadingTitle title="RSVP" className={`${cormorantUpright.className} mx-auto flex items-center justify-center text-black`} />
                    <p className="mt-2 text-black/90 text-sm sm:text-base">Bagi tamu undangan yang akan hadir di acara pernikahan kami silahkan kirimkan konfirmasi kehadiran dengan mengisi form berikut :</p>

                    <div className={`${cormorantUpright.className} w-full flex flex-col justify-center items-center py-4`}>
                        <Formik
                            initialValues={{ name: '', guestCount: 1, attendance: 'yes' }}
                            validate={(values: FormType) => {
                                const errors: Record<string, any> = {};
                                if (values.name.length < 1) errors.name = "Name is required";
                                return errors;
                            }}
                            onSubmit={async (values, {}) => {
                                if (values?.name?.length > 0) {
                                    window.open(buildWhatsappUrl(values), '_blank');
                                }
                            }}
                        >
                            {({ errors, handleSubmit, values, setFieldValue }) => (
                                <form onSubmit={handleSubmit} className="relative mt-2 w-full flex flex-col justify-start items-start gap-y-5 font-primary">
                                    {/* Nama */}
                                    <div className="relative w-full text-sm xxs:text-base" data-aos="fade-in">
                                        <label className="mb-2 block">Nama</label>
                                        <Field disabled={isRSVPSubmit} autoComplete="off" id="name" name="name" type="text" className={`${errors?.name ? "border-red-300" : "border-white/70"} peer h-12 w-full rounded-md px-4 border bg-white/30 placeholder:text-black/80 text-black focus:outline-none`} placeholder="Nama Anda" />
                                        {errors.name ? <span className="text-red-200 text-xs">{errors?.name}</span> : null}
                                    </div>

                                    {/* Jumlah tamu */}
                                    <div className="relative w-full text-sm xxs:text-base" data-aos="fade-in">
                                        <label className="mb-2 block">Jumlah tamu</label>
                                        <select
                                            disabled={isRSVPSubmit}
                                            className="h-12 w-full rounded-md px-4 border border-white/70 bg-white/30 text-black"
                                            value={values.guestCount}
                                            onChange={(e) => setFieldValue('guestCount', Number(e.target.value))}
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                        </select>
                                    </div>

                                    {/* Konfirmasi */}
                                    <div id="attendance" className="w-full" data-aos="fade-in">
                                        <label className="mb-2 block">Konfirmasi</label>
                                        <div className="flex flex-col gap-3">
                                            <label className="inline-flex items-center gap-2">
                                                <input type="radio" name="attendance" value="yes" checked={values.attendance === 'yes'} onChange={() => setFieldValue('attendance', 'yes')} />
                                                <span>Ya, Saya akan datang</span>
                                            </label>
                                            <label className="inline-flex items-center gap-2">
                                                <input type="radio" name="attendance" value="no" checked={values.attendance === 'no'} onChange={() => setFieldValue('attendance', 'no')} />
                                                <span>Maaf, Saya tidak bisa datang</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button disabled={isRSVPSubmit} type="submit" className='w-full h-12 rounded-md flex items-center justify-center text-base bg-white/30 hover:bg-white/40 border border-white/50 text-black'>
                                        Reservasi via Whatsapp
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

                {/* Daftar pesan */}
                {/* <div className="relative w-full mt-10 flex flex-col items-start justify-center gap-y-4 p-2">
                    {loading ? (
                        <div className="flex flex-col items-start justify-center mx-auto">
                            <div className="loading loading-ring loading-lg mx-auto"></div>
                            <p>Loading Data</p>
                        </div>
                    ) : (
                        <>
                            {listRsvp?.slice(0, messageLimit)?.map((data: Record<string, any>, index) => (
                                <div key={index} className="flex items-start justify-center gap-x-2" data-aos="fade-left">
                                    <div className="w-10 h-10 flex-shrink-0 bg-gray-300 rounded-full flex items-center justify-center uppercase font-bold border-2 border-amber-700">
                                        <Image src={selectAvatar(data?.avatar)} alt={data?.name} className="" />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-center">
                                        <div className="flex items-start justify-center flex-col">
                                            <h5 className="text-black font-semibold sm:text-lg">
                                                {data.name} <span className="md:text-xs text-[0.6rem] text-amber-900">{data?.attendance ? "(akan hadir) ✅" : null}</span>
                                            </h5>
                                            <span className="text-amber-700 text-xs">{moment(new Date(data?.createdAt)).tz('Asia/Jakarta').fromNow()}</span>
                                        </div>
                                        <p className="text-sm">{data.message}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div> */}
                {/* {listRsvp && listRsvp.length > messageLimit ? (
                    <button onClick={handleLoadMore} className="btn btn-sm text-sm bg-[#E8B787] hover:bg-[#E8B787]/90 w-full text-black mt-7 font-normal py-4 h-auto" data-aos="fade-in">LOAD MORE MESSAGES</button>
                ) : null} */}
            </div>
            </div>
        </MobileLayout>
    )
}
