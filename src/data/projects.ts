export interface Project {
	title: string;
	description: string;
	image: string;
	tech: string[];
	liveUrl: string;
	githubUrl: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		title: 'Library Management System',
		description:
			`A comprehensive library management system featuring book cataloging, member management, and transaction tracking. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Includes role-based authentication, bilingual support (Thai/English), dark mode, and a fully responsive interface.`,
		image: 'src/assets/images/librarymanagment.png',
		tech: ['Node.js', 'Next.js', 'React.js', 'Tailwind Css'],
		liveUrl: 'https://library-management-front-end-projec.vercel.app/',
		githubUrl: 'https://github.com/Jamessurapat26/Library_management-Front_end_project-',
		featured: true,
	},
	{
		title: 'To Do list Application',
		description:
			'A minimalist and efficient To-Do List application designed for seamless task management. Built with React.js and Vite, it features a clean UI powered by Material UI, allowing users to easily add, track, and delete tasks with smooth state-driven updates.',
		image: 'src/assets/images/todolist.png',
		tech: ['React.js', 'Material UI', 'Vite.js'],
		liveUrl: 'https://todolist-project-use-react.vercel.app/',
		githubUrl: 'https://github.com/Jamessurapat26/Todolist-Project-use-React.git',
		featured: true,
	},
	{
		title: 'Basic E-Commerce Backend API',
		description:
			'A comprehensive RESTful API backend built with Node.js, Express.js, and MongoDB. Features secure JWT authentication, role-based access control (Admin/User), and full CRUD capabilities for products, users, and orders. Designed for scalability and security.',
		image: 'src/assets/images/ecommerce-api.png',
		tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
		liveUrl: '',
		githubUrl: 'https://github.com/Jamessurapat26/basic-ecommerce-api',
		featured: true,
	},
	{
		title: 'EmotiBit Sensor API',
		description:
			'A high-performance REST API developed with NestJS and Bun for managing biometric data (EDA, PPG, Temperature) from Emotibit sensors. Features automatic Swagger documentation, MongoDB integration, and real-time active sensor monitoring.',
		image: 'src/assets/images/emotibit-sensor.png',
		tech: ['NestJS', 'TypeScript', 'MongoDB', 'Bun'],
		liveUrl: '',
		githubUrl: 'https://github.com/Jamessurapat26/emotibit-sensor-api',
		featured: true,
	},
	{
		title: 'Stress Classification API',
		description:
			'An AI-powered REST API for classifying stress levels (4 classes) using physiological data (PPG & EDA). Built with FastAPI and ONNX Runtime for high-performance inference. Includes data preprocessing pipelines, LSTM model integration, and Docker support.',
		image: 'src/assets/images/stress-classification.png',
		tech: ['FastAPI', 'Python', 'ONNX', 'Docker'],
		liveUrl: '',
		githubUrl: 'https://github.com/Jamessurapat26/stress-classification-api',
		featured: true,
	},
	{
		title: 'Go E-Wallet API',
		description:
			'A high-performance RESTful E-Wallet API built with Go and Fiber. Features secure JWT authentication, PostgreSQL integration with GORM, and structured transaction processing. Implements a clean, service-oriented architecture for financial reliability.',
		image: 'src/assets/images/go-e-wallet.png',
		tech: ['Go', 'Fiber', 'PostgreSQL', 'JWT'],
		liveUrl: '',
		githubUrl: 'https://github.com/Jamessurapat26/go-e-wallet-api',
		featured: true,
	},
];
