import React from 'react';
import "./marque.scss";
import Nav from "../../components/navigation/nav.jsx";



const Marque = () => {
	return (

		<>

			<section className="recherchePanne">
				<Nav/>

                <h2>Marque</h2>
                <a href="/model" class="call-to-action blue">Suivant</a>
				<div className="appareilsContainer">
					{/* <Link to="/contact"> <img
						className="appareilsImages"
						src="./assets/images/Rectangle_44.png"
						alt="téléphone"
					/>
					</Link> */}
					<h2 className="titlePanneAppareil">Téléphone</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_45.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Tablette</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_46.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Pc fixe</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Pc portable</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_48.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">TV</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_49.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Console de jeux</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_50.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Autres appareils</h2>
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./assets/images/Rectangle_51.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Pièces et composants</h2>
				</div>
			</section>
		</>

	);
};

export default Marque;