import { GraduationCap } from "./icons";


interface Milestone {
  year: string;
  event: string;
}

interface StatsRow {
  value: string;
  label: string;
}

interface ValueRow {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Leader {
  initials: string;
  name: string;
  role: string;
  subject: string;
  className?: string;
}

interface CampusImage {
  src: string;
  alt: string;
  caption: string;
}

interface HeroData {
  label: string;
  title: string;
  intro: string;
}

const MILESTONES: Milestone[] = [
  { year: "2006", event: "School founded with a handful of Nursery pupils" },
  { year: "2010", event: "First Primary 6 class writes its final exams" },
  { year: "2014", event: "Secondary school opens its first set of classes" },
  { year: "2020", event: "First SSS 3 set sits the WAEC exam" },
  { year: "2026", event: "Current session - a full nursery-to-SSS 3 school" }
];

const HERO_DATA: HeroData = {
  label: "ABOUT THE SCHOOL",
  title: "A Lekki school built around small classes",
  intro:
    "Bright Future Academy is a private nursery, primary and secondary school founded in 2006 and approved by the Lagos State Ministry of Education. We keep our classes small so that every child is known by name and taught at the right pace."
};

const VALUE_STATS: StatsRow[] = [
  { value: "20", label: "years of service" },
  { value: "850", label: "students enrolled" },
  { value: "24", label: "classes taught" },
  { value: "56", label: "teaching staff" }
];

const MISSION_STATEMENT =
  "Every child who walks through our gates leaves with stronger reading skills, a clearer sense of right and wrong, and the confidence to ask questions. We do not chase exam results at the expense of character, because the two belong together.";

const VALUES = [
  { number: "01", title: "Know every child", body: "Teachers learn each child's name, strengths and struggles within the first two weeks of term and plan lessons around them." },
  { number: "02", title: "Teach properly", body: "Smaller classes, structured lessons and regular marking so no child is left to guess what was taught." },
  { number: "03", title: "Keep parents informed", body: "Termly reports, open days and a direct line to every class teacher. Parents are partners, not spectators." },
  { number: "04", title: "Build character", body: "Morning assembly, house systems and weekly values lessons teach respect, honesty and responsibility in practice." }
];

const LEADERS: Leader[] = [
  { initials: "AJ", name: "Afolabi Johnson", role: "Principal", subject: "Head of school", className: "w-[220px]" },
  { initials: "AO", name: "Amara Osei", role: "Vice Principal Academics", subject: "Mathematics and Science", className: "w-[160px]" },
  { initials: "CK", name: "Chinedu Okonkwo", role: "Head of Primary", subject: "Primary years", className: "w-[160px]" }
];

const CAMPUS_IMAGES: CampusImage[] = [
  { src: "campus", alt: "School campus looking toward the administrative block", caption: "Wide campus overlooking the main drive" },
  { src: "secondary", alt: "Secondary school science laboratory", caption: "Science laboratory with ten practical benches" },
  { src: "nursery", alt: "Nursery early years room", caption: "Early years room with soft flooring and low shelves" },
  { src: "primary", alt: "Primary school library", caption: "Library with over ten thousand books" }
];

export { MILESTONES, HERO_DATA, VALUE_STATS, MISSION_STATEMENT, VALUES, LEADERS, CAMPUS_IMAGES };
