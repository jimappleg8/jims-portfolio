import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Hero from "./components/hero.js";
import {Square, Board, Game} from "./components/tictactoe.js";


const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Hero />} />
			<Route path="game" element={<Game />} />
			<Route path="*" element={<span></span>} />
		</Routes>
	</BrowserRouter>
);
