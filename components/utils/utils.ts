import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa6";
import { GrGithub, GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiHtmx } from "react-icons/si";

export interface LinksType {
	color: string;
	icon: IconType;
	title: string;
	name: string;
	href?: string;
}

export const code: LinksType[] = [
	{
		color: "#F97315",
		icon: GrGithub,
		title: "GitHub",
		name: "@nurinail",
		href: "https://github.com/nurinail",
	},
	{
		color: "#8B5CF6",
		icon: SiHtmx,
		title: "Web Projects",
		name: "->",
	},
];

export const contact: LinksType[] = [
	{
		color: "#0CA5E9",
		icon: FaLinkedinIn,
		title: "LinkedIn",
		name: "@nurinail",
		href: "https://www.linkedin.com/in/nailnuri/",
	},
	{
		color: "#EA4335",
		icon: MdEmail,
		title: "Email",
		name: "nurinail2003@gmail.com",
		href: "mailto:nurinail2003@gmail.com",
	},
];

export const social: LinksType[] = [
	{
		color: "#E1306C",
		icon: GrInstagram,
		title: "Instagram",
		name: "@nailnuri03",
		href: "https://www.instagram.com/nailnuri03/",
	},
	{
		color: "#1877F2",
		icon: FaFacebook,
		title: "Facebook",
		name: "@Nail Nuri",
		href: "https://www.facebook.com/nail.nuri.505/",
	},
	{
		color: "#FF0000",
		icon: FaYoutube,
		title: "YouTube",
		name: "@megavistaworld",
		href: "https://www.youtube.com/@megavistaworld",
	},
	{
		color: "#5865F2",
		icon: FaDiscord,
		title: "Discord",
		name: "@nnuri03",
		href: "https://discord.com/users/1497129230109118525",
	},
];
