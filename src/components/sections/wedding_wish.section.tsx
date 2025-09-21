"use client";

import Image from 'next/image';
import localFont from 'next/font/local';
import { useState } from 'react';
import { Field, Formik } from 'formik';

import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";
import { NEWLYWEDS_TITLE } from '@/components/libs/constants/others.const';

import thxImg from '@/assets/album/DSC07839.jpg';

const cormorantUpright = localFont({ src: "../../assets/fonts/CormorantUpright-Regular.ttf" });
const jasmineRosemary = localFont({ src: "../../assets/fonts/jasminerosemary.ttf" });

type WishFormType = {
    name: string;
    message: string;
}

// Mock data untuk komentar
const mockComments = [
    { id: 1, name: "Suzy", message: "Thanks", time: "2 bulan, 1 minggu lalu" },
    { id: 2, name: "Kyo", message: "Nice", time: "2 bulan, 1 minggu lalu" },
    { id: 3, name: "ran", message: "Congratulations!", time: "2 bulan, 1 minggu lalu" },
    { id: 4, name: "Sarah", message: "Best wishes for your special day!", time: "2 bulan, 1 minggu lalu" },
    { id: 5, name: "John", message: "May you have a wonderful life together", time: "2 bulan, 1 minggu lalu" },
    { id: 6, name: "Lisa", message: "So happy for you both!", time: "2 bulan, 1 minggu lalu" },
    { id: 7, name: "Mike", message: "Wishing you endless love and happiness", time: "2 bulan, 1 minggu lalu" },
    { id: 8, name: "Emma", message: "Congratulations on your wedding!", time: "2 bulan, 1 minggu lalu" },
    { id: 9, name: "David", message: "May your love grow stronger each day", time: "2 bulan, 1 minggu lalu" },
    { id: 10, name: "Anna", message: "So excited for your big day!", time: "2 bulan, 1 minggu lalu" },
    { id: 11, name: "Tom", message: "Wishing you a lifetime of happiness", time: "2 bulan, 1 minggu lalu" },
    { id: 12, name: "Maria", message: "Congratulations and best wishes!", time: "2 bulan, 1 minggu lalu" },
];

export default function WeddingWishSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const [comments, setComments] = useState(mockComments);
    const commentsPerPage = 5;
    const totalPages = Math.ceil(comments.length / commentsPerPage);
    const startIndex = (currentPage - 1) * commentsPerPage;
    const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

    const handleSubmit = (values: WishFormType, { resetForm }: any) => {
        const newComment = {
            id: comments.length + 1,
            name: values.name,
            message: values.message,
            time: "Baru saja"
        };
        setComments([newComment, ...comments]);
        resetForm();
    };

    return (
        <div id='wedding-wish' className="relative md:ml-[65vw] w-full md:w-[35vw]">
            <div className="relative h-[100vh]">
                <Image src={thxImg} alt="wedding wish background" fill priority className="object-cover object-center" />
                
                {/* Glass panel */}
                <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-black p-5 sm:p-7 md:p-8 overflow-y-auto">
                    <HeadingTitle title="Wedding Wish" className={`${cormorantUpright.className} text-center text-3xl md:text-4xl font-light text-black`} />
                    <p className="text-center text-sm md:text-base text-black/80 mt-2 mb-6">
                        Tuliskan Do'a dan Ucapan terbaik untuk kami
                    </p>

                    {/* Comment counter */}
                    <div className="text-sm text-black/70 mb-4">
                        {comments.length} Comments
                    </div>

                    {/* Form input */}
                    <Formik
                        initialValues={{ name: '', message: '' }}
                        validate={(values: WishFormType) => {
                            const errors: Record<string, any> = {};
                            if (values.name.length < 1) errors.name = "Name is required";
                            if (values.message.length < 1) errors.message = "Message is required";
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, handleSubmit, values, setFieldValue }) => (
                            <form onSubmit={handleSubmit} className="mb-6">
                                <div className="mb-4">
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="Nama"
                                        className="w-full border-b border-black/30 bg-transparent py-2 px-0 text-black placeholder:text-black/60 focus:outline-none focus:border-black"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                                </div>
                                
                                <div className="mb-4">
                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Ucapan"
                                        rows={3}
                                        className="w-full border-b border-black/30 bg-transparent py-2 px-0 text-black placeholder:text-black/60 focus:outline-none focus:border-black resize-none"
                                    />
                                    {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black py-3 px-4 rounded font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Kirim
                                </button>
                            </form>
                        )}
                    </Formik>

                    {/* Divider */}
                    <div className="border-t border-black/20 my-6"></div>

                    {/* Comments list */}
                    <div className="space-y-4">
                        {currentComments.map((comment) => (
                            <div key={comment.id} className="border-b border-black/10 pb-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-semibold text-black text-sm">{comment.name}</h4>
                                    <div className="flex items-center gap-2 text-xs text-black/60">
                                        <span>🕒</span>
                                        <span>{comment.time}</span>
                                        <button className="text-blue-600 hover:underline">Reply</button>
                                    </div>
                                </div>
                                <p className="text-black/80 text-sm">{comment.message}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 text-sm text-black/60 hover:text-black disabled:opacity-50"
                            >
                                ← Previous
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 text-sm ${
                                        page === currentPage 
                                            ? 'text-black font-semibold underline' 
                                            : 'text-black/60 hover:text-black'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 text-sm text-black/60 hover:text-black disabled:opacity-50"
                            >
                                Next →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}