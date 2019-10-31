import React from 'react';

import Quiz from '../Components/Quiz.js';
import '../w3-4.css';

function Home(props){
  return(
		<div className="aritlceObj">
			<div className="showbox">
				<h1>Take A Star Wars Quiz</h1>
				<div className="w3-container w3-center w3-animate-left">
					<img alt="star wars" src="../star wars.png"></img>
				</div>
				<div className="w3-container w3-center w3-animate-right">
					<img alt="spotify" src="../spotify.png"></img>
				</div>
			</div>
			<img className="logo" alt="star wars & spotify" src="../starwars spotify.png"></img>
			<div className="button" align="center"><a className="button_a" href="#">Start</a></div>
			<div id='quiz'>
				<Quiz/>
			</div>

			<a href='#' id='next' onClick='Quiz.displayQuestion'>Next</a>
		</div>
  )
}

export default Home;
