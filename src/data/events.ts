import rawEventGroups from "./events.generated.json";

export type EventRecord = Record<string, string>;

export interface EventGroup {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  source: string;
  records: EventRecord[];
}

const groupDetails: Record<string, Omit<EventGroup, "source" | "records">> = {
  "_Seminar_Workshops_template.xlsx": {
    slug: "seminars-workshops",
    title: "Seminars & Workshops",
    shortTitle: "Seminars & Workshops",
    description: "Knowledge-sharing sessions, industry talks and hands-on workshops organized by the department.",
  },
  "IT Competition_template.xlsx": {
    slug: "competitions",
    title: "Competitions",
    shortTitle: "Competitions",
    description: "Coding, project and creative competitions that turn classroom learning into spirited challenges.",
  },
  "IT Departmental_Magazines_template.xlsx": {
    slug: "departmental-magazines",
    title: "Departmental Magazines",
    shortTitle: "Magazines",
    description: "Department publications capturing student ideas, technical writing and campus achievements.",
  },
  "IT Distinguished_Lecture_Series_template.xlsx": {
    slug: "distinguished-lectures",
    title: "Distinguished Lecture Series",
    shortTitle: "Lecture Series",
    description: "Expert-led sessions connecting students with new research, technologies and industry perspectives.",
  },
  "IT Fdp_Organized_template.xlsx": {
    slug: "faculty-development-programs",
    title: "Faculty Development Programs",
    shortTitle: "FDPs",
    description: "Development programs that strengthen teaching practice, research capacity and technical expertise.",
  },
  "IT Hackathon_template.xlsx": {
    slug: "hackathons",
    title: "Hackathons",
    shortTitle: "Hackathons",
    description: "Collaborative, time-bound events where students build solutions to meaningful problems.",
  },
  "IT Industrial_Tour_template.xlsx": {
    slug: "industrial-tours",
    title: "Industrial Tours",
    shortTitle: "Industrial Tours",
    description: "Experiential visits that bring students closer to real workplaces, systems and professional practice.",
  },
  "IT Student_Chapter_Activity_Club_Activities_template.xlsx": {
    slug: "student-chapter-activities",
    title: "Student Chapter & Club Activities",
    shortTitle: "Chapter Activities",
    description: "Student-led chapter and club activities that foster leadership, collaboration and technical community.",
  },
};

export const eventGroups: EventGroup[] = rawEventGroups
  .map((group) => ({ ...groupDetails[group.source], ...group, records: group.records as EventRecord[] }))
  .filter((group): group is EventGroup => Boolean(group.slug));

export function getEventGroup(slug: string) {
  return eventGroups.find((group) => group.slug === slug);
}

