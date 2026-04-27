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
}

export const code: LinksType[] = [
	{
		color: "#F97315",
		icon: GrGithub,
		title: "Github",
	},
	{
		color: "#8B5CF6",
		icon: SiHtmx,
		title: "Web Projects",
	},
];

export const contact: LinksType[] = [
	{
		color: "#0CA5E9",
		icon: FaLinkedinIn,
		title: "LinkedIn",
	},
	{
		color: "#EA4335",
		icon: MdEmail,
		title: "Email",
	},
];

export const social = [
	{
		color: "#E1306C",
		icon: GrInstagram,
		title: "Instagram",
	},
	{
		color: "#1877F2",
		icon: FaFacebook,
		title: "Facebook",
	},
	{
		color: "#FF0000",
		icon: FaYoutube,
		title: "Youtube",
	},
	{
		color: "#5865F2",
		icon: FaDiscord,
		title: "Discord",
	},
];
