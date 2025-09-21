import Image, { StaticImageData } from "next/image";
import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";
import { Stories } from "@/components/libs/constants/stories.const";

export default function StoriesSection() {
    return (
        <MobileLayout>
            <div className="flex flex-col items-center justify-center text-black mt-14 gap-y-10 md:gap-y-14 h-fit">
                <HeadingTitle title='OUR STORY' />
                {Stories?.map((data, idx) => (
                    <div key={data.chapter} className="relative flex items-center justify-center h-full gap-y-40 w-full">
                        <HeadingChapter isRight={idx % 2 === 0} title={data.chapter} />
                        <ImageStory isRight={idx % 2 === 0} ImgUrl={data.image} story={data.story} />
                    </div>
                ))}
            </div>
        </MobileLayout>
    );
}

function ImageStory({ story, ImgUrl, isRight }: { story: string, ImgUrl: StaticImageData, isRight: boolean }) {
    const orderPositionImg = !isRight ? "order-last" : "-order-1";
    const orderPosition = isRight ? "order-last" : "-order-1";
    const marginPosition = isRight ? "pr-8" : "pl-8";

    return (
        <div className={`${orderPosition} w-[70%] flex flex-col gap-x-5 xxs:gap-y-4 gap-y-2 items-center justify-center h-full`}>
            <div className={`${marginPosition} flex items-center justify-center`}>
                <div data-aos="fade-down" className={`${orderPositionImg} divider divider-horizontal divider-neutral`} />
                <Image src={ImgUrl} alt={story} sizes="100vw" />
            </div>
            <p data-aos="fade-down" className={`px-3 text-xs xxs:text-sm sm:text-base text-center`}>{story}</p>
        </div>
    );
}

function HeadingChapter({ title, isRight }: { title: string, isRight: boolean }) {
    const orderPosition = isRight ? "md:-left-14 xs:-left-24 xxs:-left-14 -left-[4rem]" : "md:-right-14 xs:-right-24 xxs:-right-14 -right-[4rem]";
    const transtitionAnimation = isRight ? "fade-down": "fade-up"
    return (
        <div className="h-full w-[30%]">
            <div className={`${orderPosition} top-32 xxs:top-40 xs:top-52 sm:top-56 absolute flex items-center justify-start -rotate-90 font-bold text-4xl xs:text-5xl tracking-widest`}>
                <p data-aos={transtitionAnimation} className="w-full h-full">{title.toUpperCase()}</p>
            </div>
        </div>
    );
}