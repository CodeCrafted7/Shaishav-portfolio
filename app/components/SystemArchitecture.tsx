'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'MoodSync - Personalized YouTube Videos Recommender System',
							description: 'Real-time mood-based YouTube recommender - a desktop app that reads your facial emotion and suggests videos matching your current mood.',
							details: [
								'~70% accuracy linking detected emotions to video sentiment',
								'~65% real-time emotion detection using DeepFace',
								'30% faster recommendation delivery via SQLite3 caching',

							],
							tech: ['Python', 'DeepFace SDK', 'YouTube Data API v3', 'KafSQLite3 ka', 'Tkinter', 'PyQt'],
						},
						{
							title: 'YouTube Video Summariser',
							description: 'Live web app that takes a YouTube URL and returns a concise summary-cutting manual review time by ~60%.',
							details: [
								'Built an interactive UI to input video URLs and display summaries',
								'Integrated Groq API for fast and accurate summarization',
								'Deployed using a Python virtual environment with stable performance',
							],
							tech: ['Python', 'Streamlit', 'Groq API', 'Virtualenv'],
						},
						{
							title: 'File Hiding & Unhiding System',
							description: 'Desktop application that lets users securely hide and reveal files, keeping data safe via custom obfuscation.',
							details: [
								'Built a Java-based interface with backend logic for file obfuscation',
								'Configured MySQL to manage file metadata-simplifying retrieval and organization',
							],
							tech: ['Java', 'MySQL', 'InteliIJ'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
