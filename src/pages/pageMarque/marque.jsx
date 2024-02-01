import React from 'react';
import "./marque.scss";
import Nav from "../../components/navigation/nav.jsx";

const Marque = () => {
	return (

		<>
			<section className="recherchePanne">
				<Nav/>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone</h2>
				<img
						className="appareilsImages"
						src="./asset/images/Rectangle_44.png"
						alt=""
					/>
					
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Samsung</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_45.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer">
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Huawei</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_46.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Xiaomi</h2>
					<img
						className="appareilsImages"
						src="./asset/images/rectangle_47.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer"><h2 className="titlePanneAppareil">Autres</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_48.png"
						alt=""
					/>
					
				</div>
				<div className="appareilsContainer">	<h2 className="titlePanneAppareil">Pc</h2>
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_49.png"
						alt=""
					/>
				
				</div>
				<div className="appareilsContainer">
					<img
						className="appareilsImages"
						src="./asset/images/Rectangle_50.png"
						alt=""
					/>
					<h2 className="titlePanneAppareil">Autres appareils</h2>
				</div>
			
				</div>
			</section>
		</>

	);
};

export default Marque;