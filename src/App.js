import "./App.css";
import giticon from "./assets/giticon.png";
import leetcodeicon from "./assets/leetcodeicon.png";
import linkedinicon from "./assets/linkedin-icon.jpg";
import profile from "./assets/profile.jpg";
import React, { useState, useEffect } from 'react';

const App = () => {
	const [matrix, setMatrix] = useState([]);
	const [columns, setColumns] = useState(Math.floor(window.innerWidth / 10));
	const rows = 8;
	useEffect(() => {
		const initializeMatrix = () => {
			const newMatrix = [];
			for (let i = 0; i < rows; i++) {
				const row = [];
				for (let j = 0; j < columns; j++) {
					row.push(Math.floor(Math.random() * 3));
				}
				newMatrix.push(row);
			}
			setMatrix(newMatrix);
		};
		initializeMatrix();
	}, [columns]);
	useEffect(() => {
		const interval = setInterval(() => {
			setMatrix((prevMatrix) => {
				const newMatrix = [...prevMatrix];
				newMatrix.pop();
				const newRow = [];
				for (let j = 0; j < columns; j++) {
					newRow.push(Math.floor(Math.random() * 2));
				}
				newMatrix.unshift(newRow);
				return newMatrix;
			});
		}, 100);
		return () => clearInterval(interval);
	}, [columns]);
	useEffect(() => {
		const handleResize = () => {
			const newColumns = Math.floor(window.innerWidth / 10);
			setColumns(newColumns);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [])
	return (
		<div className="background">
			<div className="gradient"></div>
			<div className="matrix-container">
				{matrix.map((row) => (
					<div key="rowIndex" className="matrix-row">
						{row.map((cell, cellIndex) => (
							<span key={cellIndex} className={`matrix-cell ${cell === 1 ? "active" : ""}`}>
								{cell}
							</span>
						))}
					</div>
				))}
			</div>
			<div className="content">
				<span className="heading">
					<h1>Welcome to my Portfolio !</h1>
				</span>
				<span className="typer"><p className="subheading">Code, Create, Innovate.</p></span>
				{/* <h2 className="aboutMe">About Me</h2> */}
				<img src={profile} className="profile"></img>
				<p className="intro"> Hi, I'm <strong style={{ color: "#0c0" }}>Siddhant</strong>, a passionate programmer with a love for all things tech. I like to spend most of my time programming and making some weird projects.</p>
				<div className="contacts">
					<a href="https://github.com/DEV-SDHNT" className="contact"><img src={giticon} className="links"></img></a>
					<a href="https://leetcode.com/u/Siddhant7154" className="contact"><img src={leetcodeicon} className="links"></img></a>
					<a href="#" className="contact"><img src={linkedinicon} className="links"></img></a>
				</div>

				<h2 className="h2">Projects</h2>
				<div className="projects">
					<div className="project">
						<a href="https://github.com/DEV-SDHNT/Facial-Expressions-Recognition.git"><h3>Facial Expression Recognition</h3></a>
						<p>Type : Machine Learning. </p>
						<p>Technology : Python, Scikit-Learn, Opencv.</p>
					</div>
					<div className="project">
						<a href="https://github.com/DEV-SDHNT/Matrix-App.git"><h3>Matrix App</h3></a>
						<p>Type : App development. </p>
						<p>Technology : Flutter, Dart.</p>
					</div>
					<div className="project">
						<a href="https://github.com/DEV-SDHNT/Frontend.git"><h3>Frontends</h3></a>
						<p>Type : Frontend Designs. </p>
						<p>Technology : HTML, CSS, Javascript.</p>
					</div>
					<div className="project">
						<a href="https://github.com/DEV-SDHNT/Machine-Downtime.git"><h3>Machine Downtime Predictor</h3></a>
						<p>Type : Machine Learning. </p>
						<p>Technology : Flask, Javascript, Scikit-Learn.</p>
					</div>
					<div className="project">
						<a href="https://open-chats.onrender.com"><h3>Simple Chatting App</h3></a>
						<p>Type : Web development. </p>
						<p>Technology : React, NodeJS.</p>
					</div>
					<div className="project">
						<a href="https://github.com/DEV-SDHNT/Django-Authentication.git"><h3>Django Authentication</h3></a>
						<p>Type : Web development. </p>
						<p>Technology : Python, Django.</p>
					</div>
				</div>

				<hr></hr>
			</div>
		</div>
	);
};
export default App;
