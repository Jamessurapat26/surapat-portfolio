export interface Experience {
	organization: string;
	role: string;
	period: string;
	summary: string;
	responsibilities: string[];
}

export const experiences: Experience[] = [
	{
		organization: 'Freelance',
		role: 'Full-stack Developer (Project-based)',
		period: 'Freelance',
		summary:
			'Developed an AI-powered animal recognition application that identifies animals via camera, provides detailed information, and features voice narration for an interactive educational experience.',
		responsibilities: [
			'Implemented an AI Image Classification feature that identifies animal species upon capturing a photo via the camera',
			'Implemented voice narration features to provide audio-based educational content',
			'Designed and developed the application interface for a seamless user experience',
			'Managed the end-to-end development cycle from requirement gathering to deployment',
			'Optimized model performance for mobile devices to ensure smooth camera-based interactions',
		],
	},
];
