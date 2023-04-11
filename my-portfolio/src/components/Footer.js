import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-800 py-8 left-0 w-full">
			<div className="flex justify-center space-x-6">
				<a
					href="https://github.com/tropical9"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/images/github.png")}
						alt="Github logo"
						className="h-6 w-6"
					></img>
				</a>
				<a
					href="https://www.linkedin.com/in/sharmaine-pineda-113458175/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/images/linkedin.png")}
						alt="LinkedIn logo"
						className="h-6 w-6"
					></img>
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/images/twitter.png")}
						alt="Twitter logo"
						className="h-6 w-6"
					></img>
				</a>
			</div>
			<div className="mt-8 flex justify-center text-gray-400">
				<p>&copy; 2023 Sharmaine.</p>
			</div>
		</footer>
	);
}

export default Footer;
