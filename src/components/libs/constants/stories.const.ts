import StoryImage1 from "@/assets/stories/chapter-1.png";
import StoryImage2 from "@/assets/stories/chapter-2.png";
import StoryImage3 from "@/assets/stories/chapter-3.png";
import { StaticImageData } from "next/image";

type StoriesType = {
    story: string;
    image: StaticImageData;
    date: string;
    chapter: string;
}

export const Stories: StoriesType[] = [
    {
        date: "2022-11-12",
        image:StoryImage1 ,
        story: "Kisah ini berawal dari kita yang tak sengaja bertemu di konser Denny Caknan  tanggal 12 November 2022. Kemudian kita bertukar sosial media, lalu intens berkomunikasi, & hingga akhirnya kita berkomitmen.",
        chapter: "CHAPTER 1",
    },
    {
        date: "2023-08-27",
        image: StoryImage2,
        story: "Tepat pada tanggal 27 Agustus 2023, kamu datang bersama keluarga ke rumahku dan melamarku didepan kedua orang tuaku.",
        chapter: "CHAPTER 2"
    } ,
    {
        date: "2024-06-20",
        image: StoryImage3,
        story: "Kita berdua sepakat menetapkan hati untuk  menyempurnakan agama kita dan akan melangsungkan pernikahan pada hari Kamis, 20 Juni 2024",
        chapter: "CHAPTER 3"
    },
]