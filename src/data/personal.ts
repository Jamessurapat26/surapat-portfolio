import type { ImageMetadata } from 'astro';
import profileImage from "../assets/images/profile.jpeg";

export interface Personal {
	name: string;
	title: string;
	location: string;
	email: string;
	bio: string;
	profileImage: ImageMetadata;
}

export const personal: Personal = {
	name: 'Surapat Saetan',
	title: 'Full-Stack Developer | Backend Developer',
	location: 'Nakhon Si Thammarath, Thailand',
	email: 'surapat.saetann@gmail.com',
	bio: `Computer Engineering student at Walailak University (expected graduation April 2026). Passionate about
designing and developing scalable backend systems and server- side applications.Proficient in core programming
languages like Python and JavaScript, with hands - on experience in RESTful APIs and database management.`,
	profileImage: profileImage,
};
