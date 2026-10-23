/**
 * Central image library.
 * Photos are served from Unsplash (free licence) and are illustrative only, 
 * the people pictured are NOT Bravura VA staff or clients.
 * To use your own photography, drop files in /public/images and replace the URL here.
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const img = {
  heroVA: { src: u("1645620413090-f458f39aea04"), alt: "Smiling virtual assistant with headphones working at a laptop" },
  womanOfficeLaptop: { src: u("1758876202527-78553b7769ee"), alt: "Professional woman working on a laptop in a modern office" },
  womanOfficeLaptop2: { src: u("1758876201985-66c20343e681"), alt: "Administrative professional reviewing work on her laptop" },
  womanOfficeTeam: { src: u("1758611972515-23399a8786df"), alt: "Remote support professional working in a shared office" },
  womanDeskYellow: { src: u("1758874384359-dc7644cb2be4"), alt: "Woman typing on a laptop at a bright desk" },
  womanDeskNotebook: { src: u("1758876201935-0d85989a52e2"), alt: "Assistant working at a desk with a laptop and notebook" },
  womanTyping: { src: u("1758876201971-8251fd5abb76"), alt: "Young professional typing at her workstation" },
  womanFocused: { src: u("1758874384700-68bfae2bb58e"), alt: "Focused professional working through tasks on a laptop" },
  womanPhoneLaptop: { src: u("1610473068514-276d33c606dd"), alt: "Woman on a phone call while working on a laptop" },
  womanPortrait: { src: u("1739300293504-234817eead52"), alt: "Professional woman standing beside her laptop" },
  womanBlue: { src: u("1573497019418-b400bb3ab074"), alt: "Smiling professional woman in an office" },
  womanLaptopLap: { src: u("1573495612522-d994e72e5f56"), alt: "Woman working on a laptop in a relaxed office setting" },
  womanSmiling: { src: u("1573496528388-2c5e0088d40f"), alt: "Smiling businesswoman at a meeting table" },
  womanGlasses: { src: u("1573496527892-904f897eb744"), alt: "Confident professional woman in glasses" },
  womanOrange: { src: u("1563132337-f159f484226c"), alt: "Businesswoman in an orange blazer" },
  womanCafe: { src: u("1765648496267-a0b528fb97fb"), alt: "Woman typing on a laptop at a desk" },
  womanHeadsetDesk: { src: u("1652376939752-29c9924afd8e"), alt: "Remote professional working at a computer" },
  manLaptop: { src: u("1612299273045-362a39972259"), alt: "Smiling man working on a laptop" },
  manHeadset: { src: u("1632454005865-1ea2afe2074f"), alt: "Man wearing a headset working at a computer" },
  manHeadset2: { src: u("1632454005805-7bee57f76ee8"), alt: "Support professional with headphones on a call" },
  manLaptop2: { src: u("1683532191571-0316c063f46a"), alt: "Man working on a laptop at a table" },
  manSuit: { src: u("1637684666587-91e51b10a555"), alt: "Business owner in a suit sitting at a table" },
  manGlasses: { src: u("1614023342667-6f060e9d1e04"), alt: "Professional man in glasses" },
  teamCouch: { src: u("1655720357872-ce227e4164ba"), alt: "Team reviewing work together on a laptop" },
  teamTableLaptops: { src: u("1653566031486-dc4ead13a35d"), alt: "Team collaborating around a table with laptops" },
  teamTableLaptops2: { src: u("1653566031535-bcf33e1c2893"), alt: "Colleagues working together at a shared table" },
  teamStanding: { src: u("1739302750702-e26a61113758"), alt: "Colleagues gathered around a laptop" },
  teamMeetingBright: { src: u("1573164574511-73c773193279"), alt: "Team meeting in a bright office" },
  teamThreeWomen: { src: u("1573164574397-dd250bc8a598"), alt: "Three professionals in a planning discussion" },
  teamWhiteTable: { src: u("1739298061740-5ed03045b280"), alt: "Business team meeting around a white table" },
  teamDiscussion: { src: u("1653669487003-7d89b2020f3c"), alt: "Team discussion around a meeting table" },
  twoWomenTalking: { src: u("1573496267526-08a69e46a409"), alt: "Two colleagues talking through a project" },
  womenAtTable: { src: u("1573496130407-57329f01f769"), alt: "Professionals in conversation at a table" },
  fivePeopleTable: { src: u("1573497701240-345a300b8d36"), alt: "Group of professionals talking at a table" },
} as const;

export type ImageKey = keyof typeof img;
