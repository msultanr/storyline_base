"use client";

import AOS from "aos";
import { useEffect } from "react";
import { Maven_Pro } from "next/font/google";
import { useSearchParams } from "next/navigation";

import 'aos/dist/aos.css';

import Cover from "./sections/cover.section";
import HeroSection from "./sections/hero.section";
import MobileLayout from "./layouts/mobile.layout";
import GroomBrideSection from "./sections/groom_bride.section";
import CountdownSection from "./sections/countdown.section";
import EventSection from "./sections/event.section";
import GiftSection from "./sections/gift.section";
import SpecialyThanksSection from "./sections/specialy_thanks.section";
import MusicBtn from "./micro/button_music.micro";
import RSVPSection from "./sections/rsvp.component";
import RulesSection from "./sections/rules.component";
import PrayerSection from "./sections/prayer.section";
import Navigation from "./sections/navigation.section";
import LoveStorySection from "./sections/love_story.section";
import AlbumSection from "./sections/album.section";
import WeddingWishSection from "./sections/wedding_wish.section";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function IndexComponent({ slug }: { slug?: string }) {
    useEffect(() => {
        AOS.init()
    }, [])

    const queryParams = useSearchParams();

    const guestSlug = slug?.toString()?.replace(/=/g, '')?.replace(/[-+_]/g, ' ')?.replace(/%20/g, ' ')?.replace(/%2C/g, ',');
    const guestString = queryParams?.toString()?.replace(/=/g, '')?.replace(/[-+_]/g, ' ')?.replace(/%20/g, ' ')?.replace(/%2C/g, ',');

    const to = guestSlug ?? guestString

    return (
        <main className={`${mavenPro.className} w-full h-full bg-[#FFFBEF]`}>
            <Cover to={to} />
            <MobileLayout>
                <HeroSection />
                <GroomBrideSection />
                <LoveStorySection />
                <CountdownSection />
                <EventSection />

                <AlbumSection />
                {/* <RulesSection /> */}
                {/* <PrayerSection /> */}

                <GiftSection />
                <RSVPSection />
                <WeddingWishSection/>
                <SpecialyThanksSection />

                <MusicBtn />
                <Navigation />
            </MobileLayout>
        </main>
    );
}