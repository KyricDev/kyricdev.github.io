import { IMAGES } from "@/v2/constants/images";
import type { IconMapKey } from "@/v2/lib/iconHelpers";

export const PROJECTS: Project[] = [
  {
    title: "Adjudica Ai",
    description: `AI copilot for California workers' compensation attorneys.`,
    imgSrc: IMAGES.adjudica,
    techstack: [
      "remix",
      "react",
      "typescript",
      "sentry",
      "tailwind",
      "resend",
      "node",
      "betterAuth",
      "postgresql",
    ],
    url: "https://app.adjudica.ai",
    contributions: [
      "Wrote most of the UI",
      "Implemented the user access management and restrictions",
      "Integrated Resend for email functionality",
      "Implemented Authentication/Authorization",
      "Implemented invitation system",
      "Integrated Sentry for monitoring",
    ],
  },
  {
    title: "AiAuditBuddy",
    description:
      "AI platform delivering audit assistance to consultants and auditors",
    imgSrc: IMAGES.aiauditbuddy,
    techstack: [
      "remix",
      "react",
      "typescript",
      "tailwind",
      "resend",
      "node",
      "betterAuth",
      "postgresql",
      "stripe",
    ],
    url: "https://app.aiauditbuddy.com",
    contributions: [
      "Wrote most of the UI",
      "Implemented the user access management and restrictions",
      "Integrated Resend for email functionality",
      "Implemented Authentication/Authorization",
      "Implemented invitation system",
      "Integrated Stripe for billing and payment",
    ],
  },
  {
    title: "FilipinaMeet",
    description: "Dating app aimed at Western men and Filipina women",
    imgSrc: IMAGES.filipinameet,
    techstack: [
      "remix",
      "react",
      "typescript",
      "tailwind",
      "node",
      "postgresql",
    ],
    url: "https://app.filipinameet.com",
    contributions: [
      "Implemented image transformation and resize",
      "Wrote onboarding page and initial user profile",
      "Implemented image upload",
      "Implement manual user verification",
    ],
  },
  {
    title: "Moolamore",
    description:
      "Accounting mobile and web application that specialises in managing and forecasting your cash flow",
    imgSrc: IMAGES.moolamore,
    techstack: ["flutter", "mongodb", "php"],
    url: "https://www.linkedin.com/company/moolamore/?originalSubdomain=au",
    contributions: [
      "Wrote most of the UI",
      "Integrated Xero, MYOB, and Quickbooks",
      "CSV data import and export",
      "Implemented notification system",
      "Data table and visualization",
    ],
  },
];

export type Project = {
  title: string;
  techstack: IconMapKey[];
  imgSrc: string;
  description: string;
  url: string;
  contributions: string[];
};
