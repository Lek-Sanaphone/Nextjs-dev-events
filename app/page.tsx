import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { title } from "process"
import { IEvent } from "@/database"
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {

  'use cache';
  cacheLife('hours')
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">Welcome to the Home Page <br/> Event</h1>
      <p className="text-center mt-5">This is the main landing page of the application.</p>  

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Features Event</h3>

        <ul className="events">
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key={event.title}>
              <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>

  )
}

export default page