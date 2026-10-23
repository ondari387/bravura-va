/**
 * EDITABLE TEAM PROFILES
 * Add real founder/team biographies here. Entries with `published: false` are never shown.
 * Do not add invented experience, credentials or headcount.
 */
export type TeamMember = {
  name: string; role: string; bio: string; photo?: string; linkedin?: string; published: boolean;
};

export const team: TeamMember[] = [
  { name: "[Founder Name]", role: "Founder", bio: "[Add the founder's real background, why they started Bravura VA and what they focus on.]", photo: "", linkedin: "", published: false },
  { name: "[Team Member Name]", role: "[Role, e.g. Client Success Lead]", bio: "[Add a short, accurate biography.]", photo: "", linkedin: "", published: false },
];

export const publishedTeam = team.filter((t) => t.published);
