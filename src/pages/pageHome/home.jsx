import React from "react";
import Newsletter from "../../components/newsletter/newsletter";

import Slide from "../../components/slides/slides";

import "./home.scss";

function Home(){
    return(
        <>
            <main>
                
                <section class="quiSommesNous">
                    <div class="IndustryRepairePhone">
                        <h1>Industry Repair Phone</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quibusdam autem. Assumenda consequuntur blanditiis sint id voluptas delectus quod totam dolor ipsam quasi, saepe eligendi voluptatibus. Repudiandae quas eius ex.</p>
                    </div>
                </section>
                <section class="Nos-reparateur">
                    <div class="nosReparateurs">
                    <h2>Nos Réparateurs  </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                    Enim mi at ultrices praesent posuere sit.
                    Pulvinar </p>
                </div>
                <div className="slider">
                    <Slide/>
                </div>
                </section>
                <section class="avis">
                    <div class="avis1">
                        <h1>Abdelhamid</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quibusdam autem. Assumenda consequuntur blanditiis sint id voluptas delectus quod totam dolor ipsam quasi, saepe eligendi voluptatibus. Repudiandae quas eius ex.</p>
                        <a href="#" class="call-to-action grey">En savoir +</a>
                    </div>
                    <div class="avis2">
                        <h1>Morgan</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quibusdam autem. Assumenda consequuntur blanditiis sint id voluptas delectus quod totam dolor ipsam quasi, saepe eligendi voluptatibus. Repudiandae quas eius ex.</p>
                        <a href="#" class="call-to-action grey">En savoir +</a>
                    </div>

                    <div class="avis3">
                        <h1>Tanhia</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quibusdam autem. Assumenda consequuntur blanditiis sint id voluptas delectus quod totam dolor ipsam quasi, saepe eligendi voluptatibus. Repudiandae quas eius ex.</p>
                        <a href="#" class="call-to-action grey">En savoir +</a>
                    </div>
                </section>
                <Newsletter/>
            </main>
        </>
    )
}

export default Home;