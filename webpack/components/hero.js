import React from 'react';
import { CSSTransition } from 'react-transition-group';

class Hero extends React.Component {
	
	render() {
		return (
			<div className="hero-content">
				<CSSTransition
					in={true}
					appear={true}
					timeout={100}
					classNames="fadeup"
					>
					<div style={{transitionDelay: '100ms'}}>
						<h1 className="text-center">Hello. I'm Jim Applegate.</h1>
					</div>
				</CSSTransition>
				<CSSTransition
					in={true}
					appear={true}
					timeout={200}
					classNames="fadeup"
				>
					<div style={{transitionDelay: '200ms'}}>
          	<p className="text-center">I'm a full-stack web developer in Broomfield, Colorado. Currently, I'm focused on building web-based open innovation projects at World That Works.</p>
					</div>
				</CSSTransition>
				<CSSTransition
					in={true}
					appear={true}
					timeout={300}
					classNames="fadeup"
				>
					<div style={{transitionDelay: '300ms'}}>
						<div className="hero-buttons">
							<a href="https://linkedin.com/in/jimappleg8" target="_blank"><button className="btn btn-default btn-lg"><i className="fa-brands fa-linkedin fa-lg"></i>LinkedIn</button></a>
							<a href="https://github.com/jimappleg8" target="_blank"><button className="btn btn-default btn-lg"><i className="fa-brands fa-github fa-lg"></i>Github</button></a>
							<a href="https://jim-applegate.ghost.io" target="_blank"><button className="btn btn-default btn-lg"><i className="fa-solid fa-ghost fa-lg"></i>Blog</button></a>
						</div>
					</div>
				</CSSTransition>
			</div>
		);
  }
}

export default Hero;