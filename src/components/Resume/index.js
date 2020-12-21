import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Essig Master Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div>
				<h5>My Front-End Skills</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>My Back-End Skills</h5>
				<ol>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL/NoSQL</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;
