import MobileLayout from "../layouts/mobile.layout";
import { Helpers } from '@/components/libs/helpers/index.helper';

export default function YoutubeSection() {
    return (
        <MobileLayout className="w-full h-full my-5">
            <iframe data-aos="fade-up" id="player" typeof="text/html" className='aspect-video w-full'
                src={Helpers.youtubeEmbed("9iuTwQqS2uM")}
                allowFullScreen 
                frameBorder="0"></iframe>
        </MobileLayout>
    );
}