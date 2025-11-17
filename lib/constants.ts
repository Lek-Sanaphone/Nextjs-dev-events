export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Summit 2024",
    image: "/images/event1.png",
    slug: "react-summit-2024",
    location: "Amsterdam, Netherlands",
    date: "June 14-18, 2024",
    time: "08:30 - 18:00 CEST",
  },
  {
    title: "Next.js Conf 2024",
    image: "/images/event2.png",
    slug: "nextjs-conf-2024",
    location: "San Francisco, USA",
    date: "October 22, 2024",
    time: "09:00 - 17:30 PDT",
  },
  {
    title: "JSNation Live",
    image: "/images/event3.png",
    slug: "jsnation-live-2024",
    location: "Online + Berlin, Germany",
    date: "June 12-17, 2024",
    time: "11:00 - 20:00 CEST",
  },
  {
    title: "AWS re:Invent 2024",
    image: "/images/event4.png",
    slug: "aws-reinvent-2024",
    location: "Las Vegas, USA",
    date: "December 2-6, 2024",
    time: "All-day sessions",
  },
  {
    title: "HackMIT 2024",
    image: "/images/event5.png",
    slug: "hackmit-2024",
    location: "Cambridge, USA",
    date: "September 14-15, 2024",
    time: "36-hour hackathon",
  },
  {
    title: "GitHub Universe 2024",
    image: "/images/event6.png",
    slug: "github-universe-2024",
    location: "San Francisco, USA",
    date: "November 12-13, 2024",
    time: "09:30 - 18:00 PST",
  },
  {
    title: "FOSDEM 2025",
    image: "/images/event-full.png",
    slug: "fosdem-2025",
    location: "Brussels, Belgium",
    date: "February 1-2, 2025",
    time: "09:00 - 19:00 CET",
  },
];
