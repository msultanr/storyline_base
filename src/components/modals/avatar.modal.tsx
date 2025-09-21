import React from 'react';
import Image from 'next/image';
import { avatarData } from '@/components/libs/helpers/select_avatar.helper';

interface ModalProps {
    avatar: number | null;
    selectAvatar?: (idx: number) => void;
    clickOutside?: () => void;
    isOpen: boolean;
    handleSubmit?: () => void;
}

export default function ModalAvatar({ avatar, selectAvatar, clickOutside, isOpen, handleSubmit }: ModalProps) {
    const handleSelectAvatar = (idx: number) => {
        if (selectAvatar) {
            selectAvatar(idx);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed z-[99] inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 transition-opacity" onClick={ clickOutside && clickOutside}>
                            <div className="absolute inset-0 bg-white/50"></div>
                        </div>
                        <div className="z-50 bg-[#E8B787] p-8 max-w-lg mx-auto rounded shadow-lg animate__animated animate__zoomIn">
                            <h5 className='text-white text-center mb-5 text-xs'>Pilih avatar yang sesuai dengan personamu</h5>

                            <div className='grid gap-1 grid-cols-4'>
                                {avatarData?.map((data, idx) => (
                                    <Image onClick={() => handleSelectAvatar(idx + 1)} key={idx} src={data} alt={'avatar' + idx} sizes='100vw' className={`${avatar === idx + 1 ? "border-amber-800 border-4 opacity-75 border-dashed": "border-black opacity-100"} rounded-full border w-14 cursor-pointer `} loading='lazy' />
                                ))}
                            </div>

                            { avatar ? (
                                <button onClick={handleSubmit && handleSubmit} className='btn btn-sm mx-auto w-fit text-[#E8B787] hover:border-gray-600 flex items-center justify-center mt-5 border-2 border-dashed border-black'>Pilih Avatar</button>
                            ): null }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
