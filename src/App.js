import "./App.css";
import React, { useEffect, useRef } from 'react';
import { HomeIcon,
        //  PenIcon,
         Brain,
         FolderGit2,
         UserCircle,
         NotebookPen,
         ScanFace,
         ChartNoAxesCombined,
         MessagesSquare} from 'lucide-react';


const App = () => {
    // const canvasRef=useRef(null);
    // const containerRef=useRef(null);
    
    // useEffect(()=>{
    //     const canvas=canvasRef.current;
    //     const container=containerRef.current;
    //     if(!canvas || !container) return;
        
    //     const ctx=canvas.getContext("2d");
	  //     const fontSize=14;
	  //     let cols,drops;
	      
	  //     const resizeCanvas=()=>{
	  //         canvas.width=container.clientWidth;
	  //         canvas.height=container.clientHeight;
	  //         cols=Math.floor(canvas.width/fontSize);
	  //         drops=Array(cols).fill(1);
	  //     };
        
	  //     resizeCanvas();
	  //     window.addEventListener("resize",resizeCanvas);
	      
	  //     const draw=()=>{
	  //         ctx.fillStyle="rgba(0,0,0,0.08)";
	  //         ctx.fillRect(0,0,canvas.width,canvas.height);
	          
	  //         ctx.fillStyle="#00FF00";
	  //         ctx.font=`${fontSize}px monospace`;
	          
	  //         for(let i=0;i<drops.length;i++){
		//             const text=Math.random()>0.5?"1":"0";
		//             ctx.fillText(text,i*fontSize,drops[i]*fontSize);
		//             if(drops[i]*fontSize>canvas.height&& Math.random()>0.975){
		//                 drops[i]=0;
		//             }
		//             drops[i]++;
	  //         }
	  //         requestAnimationFrame(draw);
	  //     };
	  //     draw();
	  //     return ()=>window.removeEventListener("resize",resizeCanvas);
    // },[]);
    
    return (
	    <div className="main">
	        
	        <div className="navbar ">
		        <span id="icons" class="glitcher" style={{animationDelay:'0s'}}>
		            <HomeIcon onClick={()=>{document.getElementById('hero').scrollIntoView()}}/>
		        </span>
		        <span id="icons" class="glitcher" style={{animationDelay:'0.2s'}}>
		            <Brain onClick={()=>{document.getElementById('skills').scrollIntoView()}}/>
		        </span>
		        <span id="icons" class="glitcher" style={{animationDelay:'0.4s'}}>
		            <FolderGit2 onClick={()=>{document.getElementById('projects').scrollIntoView()}}/>
		        </span>
		        <span id="icons" class="glitcher" style={{animationDelay:'0.8s'}}>
		            <UserCircle onClick={()=>{document.getElementById('terminal').scrollIntoView()}}/>
		        </span>
	        </div>
	        
	        <div className="hero" id="hero">
		        <div class="vortex">
		            <div class="circle rotation "></div>
		            <div class="circle2 center rotation "></div>
		            <div class="halfcircle center rotation"></div>
		            <div class="halfcircle2 center rotation"></div>
		            <div class="circle3 center rotation"></div>
		            <div class="circle4 center rotation"></div>
		            <div class="circle5 center blinker"></div>
		            <div class="circle6 center rotation"></div>
		            <div class="tricircle center rotation"></div>
		            <div class="tricircle2 center rotation"></div>
		            <div class="hline center rotation"></div>
		            <div class="vline center rotation"></div>
		            <div class="hline1 center rotation"></div>
		        </div>

		        <div className="about">
		            <span className="name">Siddhant</span>
		            <span className="field">Mechatronics Engineer</span>
                <span class="field">FullStack Developer</span>
		            <br/>
		        </div>
	        </div>
	        
	        <div className="terminal " id="terminal">
		        <h2 class="type-animation">About the System</h2>
		        <div className="description blink">
		            <p className="terminal-title">user@sdhnt</p>
		            <p className="whoami type-animation">~ $ whoami</p>
		            <p className="whoami-output type-animation">Software Developer, Tech Enthusiast.</p>
		            <p className="cat-aboutme type-animation">~ $ cat about-me.txt</p>
		            <p className="aboutme">
			            I am a multidisciplinary learner with expertise in Mechatronics and programming, driven by
			            a strong curosity for technology and innovation.<br/> 
			            My work spans from hardware integration to software development, enriched by creative problem-solving and continuous learning.<br/>
			            I am seeking opportunities where I can contribute meaningfully while expanding my skills across diverse domains.
		            </p>
		            <p className="ls-skills type-animation">$ ls -la skills/</p>
		            <p className="ls-skills-output type-animation" >
			            <p>drwxr-xr-x   frontend/</p>
			            <p>drwxr-xr-x   backend/</p>
			            <p>drwxr-xr-x   flutter-dev/</p>
			            <p>drwxr-xr-x   automation/</p>
			            <p>drwxr-xr-x   ml/</p>
			            <p>drwxr-xr-x   mbed-programming/</p>
		            </p>
		        </div>
	        </div>
	        <div className="skills" id="skills">
		        <center><h2 class="type-animation">Technical Skills</h2></center>
		        <div className="hex-grid">
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
			            </svg>
		            </div>
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
			            </svg>
		            </div>
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
			            </svg>
		            </div>
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
			            </svg>
		            </div>
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
			            </svg>
		            </div>
		            <div class="hex floating">
			            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
			            </svg>
		            </div>
		        </div>
	        </div>
	        
	        <div className="projects" id="projects">
		        <h2 className="projects-title type-animation">Projects</h2>
		        <div className="project-blocks">
		            <div class="project-border" style={{animationDelay:'0s'}}>
                        <div class="project">
			                <NotebookPen size='45px' class="glitcher"/>
			                      <h3 class="title">
                                <a href="https://DEV-SDHNT.github.io/Note_Down">NoteDown!</a>
                            </h3>
			                <div class="tools-block">
			                    <span class="tool zoomer" style={{animationDelay:'0s'}}>HTML</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.3s'}}>CSS</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.6s'}}>REACT</span>
                          <span class="tool zoomer" style={{animationDelay:'0.9s'}}>PWA</span>
			                </div>
		                </div>
                    </div>
		            <div class="project-border" style={{animationDelay:'1s'}}>
                        <div class="project">
			                <ScanFace size='45px' class="glitcher"/>
			                <h3 class="title">Facial Expression Recognition</h3>
			                <div class="tools-block">
			                    <span class="tool zoomer" style={{animationDelay:'0s'}}>Python</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.3s'}}>OpenCV</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.6s'}}>Scikit-Learn</span>
			                </div>
		                </div>
                    </div>
		            <div class="project-border" style={{animationDelay:'2s'}}>
                        <div class="project">
			                <ChartNoAxesCombined size='45px' class="glitcher"/>
			                      <h3 class="title">
                                <a href="https://crime-rate-predictor-6v2a.onrender.com">Crime Rate Predictor </a>
                            </h3>
			                <div class="tools-block">
			                    <span class="tool zoomer" style={{animationDelay:'0s'}}>Python</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.3s'}}>Flask</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.6s'}}>Scikit-Learn</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.9s'}}>NumPy</span>
			                </div>
		                </div>
                    </div>
		            <div class="project-border" style={{animationDelay:'3s'}}>
                        <div class="project">
			                <MessagesSquare size='45px' class="glitcher"/>
			                      <h3 class="title">
                                <a href="https://open-chats.onrender.com">OpenChat</a>
                            </h3>
			                <div class="tools-block">
			                    <span class="tool zoomer" style={{animationDelay:'0s'}}>React</span>
			                    <span class="tool zoomer" style={{animationDelay:'0.2s'}}>Web-Socket</span>
			                </div>
		                </div>
                    </div>
		        </div>
	        </div>
	        
	        <div className="footer" id="footer">
                <div className="footer-content">
                    <p class="rights">&copy; 2025  Siddhant. All rights reserved.</p>
                </div>
	        </div>
	    </div>
    );
};
export default App;
