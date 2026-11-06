export const school = {
  name: "Bright Future Academy",
  shortName: "Bright Future",
  // PLACEHOLDER - footer/address
  address: "148 Fola Osibo Road, Lekki Phase 1, Lagos",
  addressLines: ["14B Fola Osibo Road", "Lekki Phase 1, Lagos, Nigeria"],
  phones: ["+234 803 452 7688", "+234 701 884 2095"],
  email: "admissions@brightfutureacademy.ng",
  hours: "Monday to Friday, 7:30am to 4:30pm",
  established: 2006,
  motto: "Knowledge, Discipline, Excellence",
  // PLACEHOLDER
  approvalNumber: "LA/LEK/2008/114",
  stats: [
    { label: "Years of service", value: 19 },
    { label: "Students", value: 850 },
    { label: "Classes", value: 24 },
    { label: "Teaching staff", value: 56 }
  ],
  heroStats: [
    // PLACEHOLDER VALUES - replace with actual school data
    { label: "Years of excellence", value: "20" },
    { label: "Students enrolled", value: "1,240" },
    { label: "Student-teacher ratio", value: "12:1" },
    { label: "WAEC/NECO pass rate", value: "96%" }
  ],
  // PLACEHOLDER VALUES - stats strip (home page)
  stripStats: [
    { display: "20", countTo: 20, prefix: "", suffix: "", label: "Years of excellence", sub: "Founded in 2006" },
    { display: "1,240", countTo: 1240, prefix: "", suffix: "", label: "Students enrolled", sub: "Pre-Nursery to SSS 3" },
    { display: "12:1", countTo: 12, prefix: "", suffix: ":1", label: "Student-teacher ratio", sub: "Classes capped at 24" },
    { display: "96%", countTo: 96, prefix: "", suffix: "%", label: "WAEC / NECO pass rate", sub: "Class of 2026" }
  ],
  heroCard: {
    // PLACEHOLDER VALUES
    number: "41",
    label: "distinctions",
    subLabel: "WASSCE, class of 2026"
  },
  academics: {
    // PLACEHOLDER VALUES
    waecPassRate: "96%",
    distinctions2026: "41",
    commonEntrancePrep: "Primary 4"
  },
  news: {
    // PLACEHOLDER - news content
    featured: {
      label: "RESULTS · MARCH 2026",
      title: "100% pass in WASSCE English and Biology for the class of 2026",
      excerpt: "All 64 candidates who sat the November/February WASSCE diet earned credits in English and Biology, with 41 distinctions across the sciences.",
      image: "/images/news.jpg",
      imageAlt: "Students celebrating academic results"
    },
    items: [
      {
        label: "INTER-HOUSE SPORTS · FEBRUARY 2026",
        title: "Ekwueme House lifts the 19th Inter-House Sports trophy",
        excerpt: "A record 12 school records fell on a glorious Saturday at the Lekki pitch, with the 4×100m mixed relay decided on the final baton change."
      },
      {
        label: "ADMISSIONS · JANUARY 2026",
        title: "Entrance assessments for September 2026 begin on 7 March",
        excerpt: "Assessment mornings for Pre-Nursery to SSS 1 run every Saturday in March. Places remain in most classes; Primary 4 and JSS 1 fill fastest."
      }
    ],
    openDay: {
      title: "Open Day, Saturday, 7 March",
      text: "Guided campus tours at 9am, 11am and 1pm. Meet the Principal, visit classrooms, and ask our SSS 3 students why they stayed from Nursery.",
      href: "/admissions"
    }
  }
};

// ABOUT PAGE - new placeholder values for the About page
export const aboutPage = {
  // Campu us and facilities gallery captions
  campusCaption: "Wide campus overlooking the main drive",
  scienceLabCaption: "Science laboratory with ten practical benches",
  earlyYearsCaption: "Early years room with soft flooring and low shelves",
  libraryCaption: "Library with over ten thousand books",
  // Story milestones
  milestones: [
    { year: "2006", event: "School founded with a handful of Nursery pupils" },
    { year: "2010", event: "First Primary 6 class writes its final exams" },
    { year: "2014", event: "Secondary school opens its first set of classes" },
    { year: "2020", event: "First SSS 3 set sits the WAEC exam" },
    { year: "2026", event: "Current session - a full nursery-to-SSS 3 school" }
  ],
  // Mission statement
  missionStatement:
    "Every child who walks through our gates leaves with stronger reading skills, a clearer sense of right and wrong, and the confidence to ask questions. We do not chase exam results at the expense of character, because the two belong together.",
  // Values
  values: [
    { number: "01", title: "Know every child", body: "Teachers learn each child's name, strengths and struggles within the first two weeks of term and plan lessons around them." },
    { number: "02", title: "Teach properly", body: "Smaller classes, structured lessons and regular marking so no child is left to guess what was taught." },
    { number: "03", title: "Keep parents informed", body: "Termly reports, open days and a direct line to every class teacher. Parents are partners, not spectators." },
    { number: "04", title: "Build character", body: "Morning assembly, house systems and weekly values lessons teach respect, honesty and responsibility in practice." }
  ],
  // Leadership placeholders
  leaders: [
    { initials: "AJ", name: "Afolabi Johnson", role: "Principal", subject: "Head of school", className: "w-[220px]" },
    { initials: "AO", name: "Amara Osei", role: "Vice Principal Academics", subject: "Mathematics and Science", className: "w-[160px]" },
    { initials: "CK", name: "Chinedu Okonkwo", role: "Head of Primary", subject: "Primary years", className: "w-[160px]" }
  ],
  // Campus and facilities gallery
  campusImages: [
    { src: "campus", alt: "School campus looking toward the administrative block", caption: "Wide campus overlooking the main drive" },
    { src: "secondary", alt: "Secondary school science laboratory", caption: "Science laboratory with ten practical benches" },
    { src: "nursery", alt: "Nursery early years room", caption: "Early years room with soft flooring and low shelves" },
    { src: "primary", alt: "Primary school library", caption: "Library with over ten thousand books" }
  ],
  // Hero section metadata
  hero: {
    label: "ABOUT THE SCHOOL",
    title: "A Lekki school built around small classes",
    intro:
      "Bright Future Academy is a private nursery, primary and secondary school founded in 2006 and approved by the Lagos State Ministry of Education. We keep our classes small so that every child is known by name and taught at the right pace."
  }
};

