/**
 * Central image library.
 * Photos are Unsplash images (free licence), self-hosted in /public/images. They are illustrative only:
 * the people pictured are NOT Bravura VA staff or clients.
 * To use your own photography, drop files in /public/images and replace the URL here.
 */


export const img = {
  heroVA: { src: "/images/heroVA.jpg", alt: "Smiling virtual assistant with headphones working at a laptop" },
  womanOfficeLaptop: { src: "/images/womanOfficeLaptop.jpg", alt: "Professional woman working on a laptop in a modern office" },
  womanOfficeLaptop2: { src: "/images/womanOfficeLaptop2.jpg", alt: "Administrative professional reviewing work on her laptop" },
  womanOfficeTeam: { src: "/images/womanOfficeTeam.jpg", alt: "Remote support professional working in a shared office" },
  womanDeskYellow: { src: "/images/womanDeskYellow.jpg", alt: "Woman typing on a laptop at a bright desk" },
  womanDeskNotebook: { src: "/images/womanDeskNotebook.jpg", alt: "Assistant working at a desk with a laptop and notebook" },
  womanTyping: { src: "/images/womanTyping.jpg", alt: "Young professional typing at her workstation" },
  womanFocused: { src: "/images/womanFocused.jpg", alt: "Focused professional working through tasks on a laptop" },
  womanPhoneLaptop: { src: "/images/womanPhoneLaptop.jpg", alt: "Woman on a phone call while working on a laptop" },
  womanPortrait: { src: "/images/womanPortrait.jpg", alt: "Professional woman standing beside her laptop" },
  womanBlue: { src: "/images/womanBlue.jpg", alt: "Smiling professional woman in an office" },
  womanLaptopLap: { src: "/images/womanLaptopLap.jpg", alt: "Woman working on a laptop in a relaxed office setting" },
  womanSmiling: { src: "/images/womanSmiling.jpg", alt: "Smiling businesswoman at a meeting table" },
  womanGlasses: { src: "/images/womanGlasses.jpg", alt: "Confident professional woman in glasses" },
  womanOrange: { src: "/images/womanOrange.jpg", alt: "Businesswoman in an orange blazer" },
  womanCafe: { src: "/images/womanCafe.jpg", alt: "Woman typing on a laptop at a desk" },
  womanHeadsetDesk: { src: "/images/womanHeadsetDesk.jpg", alt: "Remote professional working at a computer" },
  manLaptop: { src: "/images/manLaptop.jpg", alt: "Smiling man working on a laptop" },
  manHeadset: { src: "/images/manHeadset.jpg", alt: "Man wearing a headset working at a computer" },
  manHeadset2: { src: "/images/manHeadset2.jpg", alt: "Support professional with headphones on a call" },
  manLaptop2: { src: "/images/manLaptop2.jpg", alt: "Man working on a laptop at a table" },
  manSuit: { src: "/images/manSuit.jpg", alt: "Business owner in a suit sitting at a table" },
  manGlasses: { src: "/images/manGlasses.jpg", alt: "Professional man in glasses" },
  teamCouch: { src: "/images/teamCouch.jpg", alt: "Team reviewing work together on a laptop" },
  teamTableLaptops: { src: "/images/teamTableLaptops.jpg", alt: "Team collaborating around a table with laptops" },
  teamTableLaptops2: { src: "/images/teamTableLaptops2.jpg", alt: "Colleagues working together at a shared table" },
  teamStanding: { src: "/images/teamStanding.jpg", alt: "Colleagues gathered around a laptop" },
  teamMeetingBright: { src: "/images/teamMeetingBright.jpg", alt: "Team meeting in a bright office" },
  teamThreeWomen: { src: "/images/teamThreeWomen.jpg", alt: "Three professionals in a planning discussion" },
  teamWhiteTable: { src: "/images/teamWhiteTable.jpg", alt: "Business team meeting around a white table" },
  teamDiscussion: { src: "/images/teamDiscussion.jpg", alt: "Team discussion around a meeting table" },
  twoWomenTalking: { src: "/images/twoWomenTalking.jpg", alt: "Two colleagues talking through a project" },
  womenAtTable: { src: "/images/womenAtTable.jpg", alt: "Professionals in conversation at a table" },
  fivePeopleTable: { src: "/images/fivePeopleTable.jpg", alt: "Group of professionals talking at a table" },
} as const;

export type ImageKey = keyof typeof img;
