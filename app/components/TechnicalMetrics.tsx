// 'use client';

// import { motion } from 'framer-motion';

// export default function TechnicalMetrics() {
// 	return (
// 		<section className="py-20 px-4 bg-gray-900/50">
// 			<div className="max-w-6xl mx-auto">
// 				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
// 					Impact & Achievements
// 				</motion.h2>

// 				<div className="grid grid-cols-1 gap-12">
// 					{/* System Performance */}
// 					<div>
// 						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
// 						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• P95 latency reduced from 250ms to 80ms</li>
// 									<li>• 99.99% availability achieved</li>
// 									<li>• Handles 2M requests/day</li>
// 								</ul>
// 							</motion.div>
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">Database Optimization</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• Query response time improved by 70%</li>
// 									<li>• Implemented efficient indexing strategy</li>
// 									<li>• Reduced DB load by 45%</li>
// 								</ul>
// 							</motion.div>
// 						</div>
// 					</div>

// 					{/* Infrastructure & DevOps */}
// 					<div>
// 						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
// 						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• Reduced AWS costs by 35%</li>
// 									<li>• Implemented auto-scaling for 20+ services</li>
// 									<li>• Zero-downtime deployments</li>
// 								</ul>
// 							</motion.div>
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• Reduced deployment time by 65%</li>
// 									<li>• Automated testing coverage at 90%</li>
// 									<li>• Integration tests success rate 99.5%</li>
// 								</ul>
// 							</motion.div>
// 						</div>
// 					</div>

// 					{/* Development & Leadership */}
// 					<div>
// 						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
// 						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• Led adoption of TypeScript across backend</li>
// 									<li>• Established coding standards</li>
// 									<li>• Reduced technical debt by 40%</li>
// 								</ul>
// 							</motion.div>
// 							<motion.div
// 								initial={{ opacity: 0, scale: 0.95 }}
// 								whileInView={{ opacity: 1, scale: 1 }}
// 								viewport={{ once: true }}
// 								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
// 							>
// 								<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
// 								<ul className="mt-2 space-y-2 text-gray-400">
// 									<li>• Mentored 4 junior developers</li>
// 									<li>• Created 30+ technical documentation guides</li>
// 									<li>• Led 3 major system migrations</li>
// 								</ul>
// 							</motion.div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance & Integration */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance & Integration</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Frontend Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Improved dashboard filters by shifting logic to backend</li>
									<li>• Added user pagination for smoother data rendering</li>
									<li>• Enhanced UI performance in production</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Backend Integration</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Resolved Prisma migration conflicts</li>
									<li>• Ensured smooth full-stack API communication</li>
									<li>• Maintained backend stability during feature rollouts</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Machine Learning & Data */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Machine Learning & Data</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">ML Projects</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Built emotion-based YouTube recommender</li>
									<li>• Integrated DeepFace and YouTube Data API</li>
									<li>• Enhanced stock trend scanner using ML models</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Data Engineering</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Performed data preprocessing and feature engineering</li>
									<li>• Used SQLite caching for faster content retrieval</li>
									<li>• Deployed ML apps with Streamlit & Groq API</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* DevOps & Tooling */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">DevOps & Tooling</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Deployment</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Deployed apps using virtual environments</li>
									<li>• Maintained stable runtime for ML & web tools</li>
									<li>• Followed clean Git and GitHub workflows</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Tooling</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Used GitHub Actions for automation</li>
									<li>• Managed clean branching and commits</li>
									<li>• Maintained scalable project structures</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Achievements */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Highlights & Achievements</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">DSA & Leadership</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Solved 500+ DSA problems on LeetCode & GfG</li>
									<li>• Organized Tech Wizard 2.0 coding event</li>
									<li>• Led planning and coordination of coding rounds</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Research & Publication</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Published IEEE paper on MoodSync</li>
									<li>• Explored emotion-driven video recommendation</li>
									<li>• Combined ML with user behavior analysis</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
