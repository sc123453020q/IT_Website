import { notFound } from "next/navigation";
import EventDirectory from "@/components/events/EventDirectory/EventDirectory";
import { eventGroups, getEventGroup } from "@/data/events";

export function generateStaticParams() {
  return eventGroups.map((group) => ({ type: group.slug }));
}

export default async function EventTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const group = getEventGroup(type);
  if (!group) notFound();
  return <EventDirectory group={group} />;
}

