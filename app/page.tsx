import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { title } from "process"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <section>
      <h1 className="text-center">Welcome to the Home Page <br/> Event</h1>
      <p className="text-center mt-5">This is the main landing page of the application.</p>  

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Features Event</h3>

        <ul className="events">
          {events.map((event) => (
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