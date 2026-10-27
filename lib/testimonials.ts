export type Testimonial = {
  quote: string[];
  name: string;
  role: string;
  organisation: string;
  tone: "mint" | "lavender" | "peach";
};

export const testimonials: Testimonial[] = [
  {
    tone: "mint",
    name: "Mr. Shiva",
    role: "CSR Team",
    organisation: "National HR Head",
    quote: [
      "From the moment I walked in, I could feel the warmth and dedication of the staff and the joy of the children. It’s truly heartwarming to see the positive impact that our support is making.",
      "If I had not come, I would have lost the opportunity to meet the children and see the wonderful services that the organisation is doing. The children here are not just receiving an education; they are thriving in an environment that understands and caters to their unique needs.",
    ],
  },
  {
    tone: "lavender",
    name: "Dr. Baskar",
    role: "Block Medical Officer",
    organisation: "Primary Health Center, Pullambadi",
    quote: [
      "The dedication and compassion of Synthika Trust volunteers are truly commendable. They take the time to educate pregnant women and feeding mothers about the importance of nutrition. This holistic approach has empowered many women in our community.",
    ],
  },
  {
    tone: "peach",
    name: "Mr. Bodhisattwa Chakraborty",
    role: "CSR Manager",
    organisation: "",
    quote: [
      "Their commitment to distributing 100 food packets every day to pregnant women and feeding mothers is a testament to their dedication to community health and well-being. Witnessing the impact of their efforts firsthand has been truly inspiring.",
      "This initiative not only provides essential nutrition but also brings hope and support to many families.",
    ],
  },
];
