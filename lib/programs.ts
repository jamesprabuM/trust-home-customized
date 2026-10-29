import { photos } from "@/lib/photos";
import { sitePhotos } from "@/lib/site-photos";

const projects = sitePhotos.projects;

export type Program = {
  number: string;
  /** Anchor id on the programs page, so homepage cards can link straight to a project. */
  slug: string;
  title: string;
  tag: string;
  /** Short summary for the homepage card. */
  description: string;
  /** Full write-up for the programs page. */
  body: readonly string[];
  /** Optional bullet points after the body; a `title` renders as a bold lead-in. */
  points?: readonly { title?: string; text: string }[];
  /** Optional paragraph after the bullet points. */
  closing?: string;
  tone: "mint" | "lavender" | "peach" | "cream";
  image: string;
  /** Extra photos shown as a strip on the programs page. */
  gallery?: readonly string[];
};

export const programs: Program[] = [
  {
    number: "01", slug: "special-education", title: "Special Education", tag: "Individual learning", tone: "mint", image: photos.classroomFruits, gallery: projects["special-ed"],
    description: "Individualized special education tailored to each child’s abilities, learning pace, and needs, fostering confidence and independence.",
    body: ["At Synthika Trust, we provide individualized special education tailored to each child’s abilities, learning pace, and needs. Through personalized teaching methods, practical activities, and continuous encouragement, we help children develop essential academic, communication, social, and daily living skills, fostering confidence and independence."],
  },
  {
    number: "02", slug: "therapy-and-rehabilitation", title: "Therapy and Rehabilitation", tag: "Speech · OT · Physio", tone: "lavender", image: projects.physio[3], gallery: [...projects.ot, ...projects.physio, ...projects.speech],
    description: "Physiotherapy, speech therapy, and occupational therapy that support physical development, communication, coordination, and everyday living skills.",
    body: ["Synthika Trust provides physiotherapy, speech therapy, and occupational therapy to support children’s physical development, communication, coordination, and everyday living skills. Through individualized therapy sessions and continuous support, we help children improve their abilities, build confidence, and achieve greater independence in their daily lives."],
    points: [
      { title: "Speech Therapy", text: "We provide speech therapy to intellectually disabled children because they face challenges in communication, language development, and speech articulation. Intellectual disabilities can affect various cognitive functions, including language processing and expression." },
      { title: "Occupational Therapy", text: "Occupational therapy is crucial for differently abled children as it focuses on enhancing their ability to participate in daily activities and achieve a higher level of independence. Differently abled children often face challenges in various aspects of life due to physical, cognitive, sensory, or developmental differences." },
      { title: "Physiotherapy", text: "We provide physiotherapy to children in need to address physical challenges, improve mobility, and enhance overall functional abilities. Physiotherapy plays a crucial role in promoting optimal physical development and improving the quality of life for these children." },
    ],
  },
  {
    number: "03", slug: "sustainable-agriculture", title: "Sustainable Agriculture", tag: "Practical skills", tone: "peach", image: photos.watering, gallery: projects.agriculture,
    description: "Hands-on gardening and sustainable agricultural practices that build practical skills and responsibility.",
    body: ["At Synthika Trust, children learn gardening and sustainable agricultural practices through hands-on activities. As many of our children come from rural backgrounds, these skills are familiar and meaningful to them. During school holidays, they are encouraged to practise what they have learned at home with their families, helping them build practical skills, develop responsibility, and apply their learning in everyday life."],
  },
  {
    number: "04", slug: "skilling-initiatives", title: "Skilling Initiatives", tag: "Vocational training", tone: "mint", image: photos.phenylMaking, gallery: projects.skilling,
    description: "Vocational training such as phenyl making, dhoop stick making, and gardening that builds confidence, creativity, and independence.",
    body: ["At Synthika Trust, we provide vocational training to help children develop practical skills and explore opportunities for the future. Through activities such as phenyl making, dhoop stick making, gardening, and other hands-on work, children learn to work with confidence, develop creativity, and build independence. These initiatives encourage them to use their abilities meaningfully in everyday life and prepare them for greater participation in their communities."],
  },
  {
    number: "05", slug: "free-food-distribution", title: "Free Food Distribution", tag: "110 food packets daily", tone: "lavender", image: photos.foodHelp1, gallery: projects.food,
    description: "110 free food packets every day for pregnant women and feeding mothers in government hospitals and Primary Health Centres.",
    body: [
      "Synthika Trust’s “Free Food Distribution” has been a beacon of hope and sustenance for the community. Our commitment to addressing food insecurity has resulted in significant achievements and positive impacts on the lives of those we serve.",
      "We distribute 110 free food packets every day to individuals, particularly pregnant women and feeding mothers in government hospitals and Primary Health Centres (PHCs). The provision of free food in healthcare settings serves multiple purposes, primarily revolving around the well-being and health of the patients. This thoughtful initiative helps with:",
    ],
    points: [{ text: "Reducing economic burden" }, { text: "Improved recovery and healing" }, { text: "Nutrition support" }, { text: "Enhancing maternal and child health" }, { text: "Community well-being" }],
    closing: "Providing free food to individuals and communities in need brings immediate relief, improved nutrition, and enhanced well-being.",
  },
  {
    number: "06", slug: "community-based-rehabilitation", title: "Community Based Rehabilitation (CBR)", tag: "Home visits", tone: "peach", image: sitePhotos.donate.awareness, gallery: projects.cbr,
    description: "Home visits, groceries, and diapers for children with severe and multiple disabilities who need full-time care at home.",
    body: [
      "At Synthika Trust, we believe that every child deserves care, dignity, and support, regardless of the severity of their disability. Through our Community Rehabilitation Programme, we reach out to children with severe and multiple disabilities who are bedridden, unable to walk, or require full-time care and assistance at home.",
      "Our team visits these children and their families to understand their needs and provide essential support to ease the challenges of long-term caregiving. Our assistance includes providing groceries and diapers to help families meet their children’s daily care and hygiene needs.",
      "Many of these children require continuous medical attention and regular check-ups, while some experience seizures and depend on prescribed medication to manage their condition. We recognize the challenges families face in maintaining consistent care and supporting their children’s ongoing health needs.",
      "We understand that caring for a child with complex disabilities can place a significant emotional and practical burden on families. Through regular home visits and essential assistance, we strive to stand alongside caregivers, ease some of their daily challenges, and ensure that children receive compassionate care in the comfort of their homes.",
      "Through this programme, Synthika Trust extends its support beyond the school and residential home, reaching vulnerable children in their communities and helping them live with dignity while supporting their families in providing the care they need.",
    ],
  },
  {
    number: "07", slug: "community-awareness", title: "Community Awareness Program", tag: "Inclusion", tone: "cream", image: photos.villageKids,
    description: "Awareness programs that dispel myths about disability and help families reach the care and services their children need.",
    body: [
      "Synthika Trust conducts Community Awareness Programs about physically and mentally challenged individuals. By raising awareness about physical and mental challenges, the program aims to foster an inclusive society where children with disabilities are accepted, respected, and given equal opportunities.",
      "Many communities in India hold misconceptions and stigma surrounding disabilities. The program works to dispel these myths and educate the public about the realities of living with physical and mental challenges, reducing discrimination and promoting empathy.",
      "Families of children with disabilities often face societal pressures and a lack of support. The awareness program provides families with information, resources, and support networks to better understand and address the needs of their children, empowering them to advocate for their rights and access appropriate services.",
      "Many children with disabilities in India face barriers in accessing healthcare, education, and social services. By raising awareness, the program encourages communities to support initiatives that improve access to these essential services, ensuring that children with disabilities receive the care and support they need to thrive.",
    ],
  },
];
