import React from 'react';
import "./model.scss";
import { Link } from "react-router-dom";
import Nav from "../../components/navigation/nav.jsx";

const Model = () => {
	return (

		<>
			<section className="recherchePanne">
				<Nav/>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 15</h2>
				<img
						className="appareilsImages"
						src="./asset/images/Rectangle_44.png"
						alt=""
					/>
					
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 14</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_45.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer">
				<h2 className="titlePanneAppareil">Iphone 13</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_46.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 13</h2>
					<img
						className="appareilsImages"
						src="./asset/images/rectangle_47.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer">	<h2 className="titlePanneAppareil">Iphone 12</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_48.png"
						alt=""
					/>
				
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 11</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_49.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone X/Xs</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_50.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone Ultérieur</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_51.png"
						alt=""
					/>
					
				</div>
				
			</section>
		</>

	);
};

export default Model;