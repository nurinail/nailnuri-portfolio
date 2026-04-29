export interface LinksType {
	color: string;
	icon: string;
	title: string;
	name: string;
	href?: string;
	toaster?: boolean;
}

export const code: LinksType[] = [
	{
		color: "#F97315",
		icon: "github",
		title: "GitHub",
		name: "@nurinail",
		href: "https://github.com/nurinail",
		toaster: false,
	},
	{
		color: "#8B5CF6",
		icon: "htmx",
		title: "Web Projects",
		name: "->",
		href: "/projects",
		toaster: false,
	},
];

export const contact: LinksType[] = [
	{
		color: "#0CA5E9",
		icon: "linkedin",
		title: "LinkedIn",
		name: "@nurinail",
		href: "https://www.linkedin.com/in/nailnuri/",
		toaster: false,
	},
	{
		color: "#EA4335",
		icon: "email",
		title: "Email",
		name: "nurinail2003@gmail.com",
		href: "mailto:nurinail2003@gmail.com",
		toaster: false,
	},
	{
		color: "#4F46E5",
		icon: "cv",
		title: "CV",
		name: "@nailnuri",
		href: "#",
		toaster: true,
	},
];

export const social: LinksType[] = [
	{
		color: "#E1306C",
		icon: "instagram",
		title: "Instagram",
		name: "@nailnuri03",
		href: "https://www.instagram.com/nailnuri03/",
		toaster: false,
	},
	{
		color: "#1877F2",
		icon: "facebook",
		title: "Facebook",
		name: "@Nail Nuri",
		href: "https://www.facebook.com/nail.nuri.505/",
		toaster: false,
	},
	{
		color: "#FF0000",
		icon: "youtube",
		title: "YouTube",
		name: "@megavistaworld",
		href: "https://www.youtube.com/@megavistaworld",
		toaster: false,
	},
	{
		color: "#5865F2",
		icon: "discord",
		title: "Discord",
		name: "@nnuri03",
		href: "https://discord.com/users/1497129230109118525",
		toaster: false,
	},
];

export const projects = [
	{
		title: "AllStore ERP System",
		description: "ERP system for managing inventory and sales operations.",
		color: "#818CF8",
		name: "system",
		href: "https://allstoreerp.netlify.app/",
		bgColor: "rgba(99, 102, 241, 0.12)",
		icon: "system",
	},
	{
		title: "Age Calculator",
		description:
			"Clean and minimal app to calculate age in years, months, and days.",
		color: "#8B5CF6",
		name: "age",
		href: "https://agecalculatorff.netlify.app/",
		bgColor: "rgba(139, 92, 246, 0.12)",
		icon: "age",
	},
	{
		title: "Interactive Quiz Platform",
		description:
			"Quiz app with real-time scoring and category-based questions.",
		color: "#FACC15",
		name: "quiz",
		href: "https://mockquizapp.netlify.app/",
		bgColor: "rgba(234, 179, 8, 0.12)",
		icon: "quiz",
	},
	{
		title: "Weather Forecast App",
		description: "Simple weather app designed for desktop screens.",
		color: "#38BDF8",
		name: "weather",
		href: "https://weatherappproje.netlify.app/",
		bgColor: "rgba(56, 189, 248, 0.12)",
		icon: "weather",
	},
	{
		title: "Complaint Management Platform",
		description: "Platform for users to submit and track complaints.",
		color: "#F87171",
		name: "report",
		href: "https://sikayet.az/",
		bgColor: "rgba(239, 68, 68, 0.12)",
		icon: "report",
	},
	{
		title: "Car Rental Website",
		description: "Desktop-focused car rental website with modern UI.",
		color: "#34D399",
		name: "rent",
		href: "https://brandbestcar.netlify.app/",
		bgColor: "rgba(16, 185, 129, 0.12)",
		icon: "rent",
	},
];
