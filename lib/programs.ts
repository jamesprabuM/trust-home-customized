import { photos } from "@/lib/photos";
import { sitePhotos } from "@/lib/site-photos";

const projects = sitePhotos.projects;

export type Program = {
  number: string;
  title: string;
  tag: string;
  description: string;
  tone: "mint" | "lavender" | "peach" | "cream";
  image: string;
  /** Extra photos shown as a strip on the programs page. */
  gallery?: readonly string[];
};

export const programs: Program[] = [
  { number: "01", title: "Special education", tag: "Individual learning", tone: "mint", image: photos.classroomFruits, gallery: projects["special-ed"], description: "Individualised education for children with intellectual disabilities, cerebral palsy, autism, and multiple disabilities, helping each child learn, communicate, and build confidence." },
  { number: "02", title: "Therapy and rehabilitation", tag: "Speech · OT · Physio", tone: "lavender", image: projects.physio[3], gallery: [...projects.ot, ...projects.physio, ...projects.speech], description: "Speech therapy, occupational therapy, and physiotherapy that support communication, daily activities, mobility, and growing independence." },
  { number: "03", title: "Sustainable agriculture", tag: "Practical skills", tone: "peach", image: photos.watering, gallery: projects.agriculture, description: "Gardening and conservation practice that develops practical skills, environmental awareness, physical activity, and self-reliance." },
  { number: "04", title: "Skilling initiatives", tag: "Job readiness", tone: "mint", image: photos.phenylMaking, gallery: projects.skilling, description: "Inclusive learning from basic literacy and numeracy to vocational training and job-readiness programs tailored to each child’s abilities and interests." },
  { number: "05", title: "Free food distribution", tag: "110 packets daily", tone: "lavender", image: photos.foodHelp1, gallery: projects.food, description: "The trust reports distributing 110 food packets every day to pregnant women and feeding mothers in government hospitals and primary health centres." },
  { number: "06", title: "Synthika Home", tag: "Residential care", tone: "peach", image: sitePhotos.about.home, gallery: projects.rehab, description: "A residential home supporting intellectually disabled, hearing impaired, and visually impaired children with food, shelter, and special education." },
  { number: "07", title: "Community awareness", tag: "Inclusion", tone: "cream", image: photos.villageKids, description: "Programs that challenge stigma, connect families with information, and promote equal opportunities for people with disabilities." },
];
