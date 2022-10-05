import React from 'react';
import './styles/about.css'

function About(props) {

  return (
		<div id='about-main-div'>
			<div id='about-img-div'>
				<img src='https://i.ibb.co/gmx0tgV/boxing-day-icegif-13.gif' />
			</div>

			<div id='content-container'>
				<p>
					Streamline was created to make finding the shows you want to watch, on
					the streaming platforms you already have!
        </p>

        <p>
					Now in a matter of clicks, you'll be able to search your desired show
					or movie and find a rating, overview, cast, streaming platforms and
					more!
				</p>

				<p>🚧 Please do not refresh between searches, it will break 🚧</p>
			</div>
		</div>
	);
}

export default About;
