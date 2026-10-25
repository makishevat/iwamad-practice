import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'
import { Tag } from "./ui/Tag";
import { Card } from "./ui/Card";

export function EventCard({ event }: { event: CampusEvent }) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>{event.date} · {event.place}</p>
      <Tag label={`${event.seats} seats`} />
      <Link to={`/events/${event.id}`}>Details</Link>
    </Card>
  )
}