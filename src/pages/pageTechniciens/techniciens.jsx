import React from "react";
import "./techniciens.scss";
import Nav from "../../components/navigation/nav";

const Techniciens = () => {
	return (
		<>
			<section className="technos">
				<Nav />
				<section>
					<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 15</h2>
						<div></div>


					</div>
					<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 15</h2>
						<img
							className="appareilsImages"
							src="./asset/images/Rectangle_44.png"
							alt=""
						/>


					</div>
					<div className="appareilsContainer"><h2 className="titlePanneAppareil">Iphone 15</h2>
						<img
							className="appareilsImages"
							src="./asset/images/Rectangle_44.png"
							alt=""
						/>


					</div>
				</section>
				<section></section>
			</section>
		</>
	)
}
export default Techniciens;