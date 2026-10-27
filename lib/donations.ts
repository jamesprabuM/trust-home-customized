import { photos } from "@/lib/photos";
import { sitePhotos } from "@/lib/site-photos";

export type DonationProject = {
  id: string;
  title: string;
  summary: string;
  details: string;
  /** Amount in rupees for one unit. */
  rate: number;
  /** What one unit buys, shown next to the quantity stepper. */
  unit: string;
  tone: "mint" | "lavender" | "peach" | "cream";
  image: string;
};

export const MAX_UNITS = 100;

export const donationProjects: DonationProject[] = [
  { id: "meals", image: sitePhotos.donate.meals, tone: "mint", rate: 2000, unit: "child · 1 month", title: "A month of meals and care for a child", summary: "Support a child’s journey to health and happiness with a donation for a month of nutritious meals and basic amenities.", details: "Synthika Trust has 50 children in its home and provides three daily meals, education, and shelter for every child." },
  { id: "autism-training", image: sitePhotos.donate["autism-training"], tone: "lavender", rate: 7000, unit: "child", title: "Training accessories for a child with autism", summary: "Provide training accessories that improve a child’s cognitive, sensory, and motor integration skills.", details: "These materials help children with autism and intellectual disability build independence, confidence, and inclusion in daily life. The annual budget for these items is ₹3,50,000 for 50 children." },
  { id: "nutrition-packets", image: sitePhotos.donate["nutrition-packets"], tone: "peach", rate: 5000, unit: "contribution", title: "Free nutrition food packets", summary: "Support our initiative to provide 100 free nutrition food packets a day to pregnant women, feeding mothers, and sick patients.", details: "Nutritious food helps women stay healthy through pregnancy and lactation, supporting healthy fetal development and breastfeeding." },
  { id: "skills", image: sitePhotos.donate.skills, tone: "mint", rate: 1000, unit: "child", title: "Vocational skills for a child", summary: "Help every child in our home build valuable skills and pursue meaningful employment.", details: "Practical skills training builds vocational ability along with a sense of independence, purpose, and dignity." },
  { id: "awareness", image: sitePhotos.donate.awareness, tone: "lavender", rate: 10000, unit: "village program", title: "Community awareness program", summary: "Help us run a community awareness program in a village for people with physical and mental disabilities.", details: "Awareness promotes inclusion and improves access to services. We mainly help people reach government schemes and facilities." },
  { id: "general", image: sitePhotos.donate.general, tone: "cream", rate: 2000, unit: "contribution", title: "Synthika Trust General Fund", summary: "A flexible gift for wherever the need is greatest.", details: "Allocated to Synthika Trust projects, administration, and accounts depending on the need." },
  { id: "gardening", image: sitePhotos.donate.gardening, tone: "peach", rate: 1500, unit: "contribution", title: "Water and soil conservation through gardening", summary: "Grow our kitchen garden of vegetables and fruits.", details: "Potatoes, onions, brinjals, pumpkins, gourds, beans, peas, mango, melons, chillies, and tomatoes help us become self-reliant while conserving the soil around our home." },
  { id: "solar", image: photos.building, tone: "mint", rate: 7000, unit: "contribution", title: "Reduce our carbon footprint with solar power", summary: "Help us move from an erratic grid supply to decentralised solar power.", details: "Steady electricity helps the children every day, and solar power is our part in reducing carbon emissions and fighting global warming." },
];

export type DonationSelection = { id: string; units: number };

/** Validates a client selection against the fixed rates. Returns null if anything is off. */
export function priceSelection(selection: unknown): { lines: { project: DonationProject; units: number; amount: number }[]; total: number } | null {
  if (!Array.isArray(selection) || selection.length === 0 || selection.length > donationProjects.length) return null;
  const seen = new Set<string>();
  const lines = [];
  for (const item of selection) {
    const project = donationProjects.find((p) => p.id === item?.id);
    const units = item?.units;
    if (!project || seen.has(project.id) || !Number.isInteger(units) || units < 1 || units > MAX_UNITS) return null;
    seen.add(project.id);
    lines.push({ project, units, amount: project.rate * units });
  }
  return { lines, total: lines.reduce((sum, line) => sum + line.amount, 0) };
}

export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
