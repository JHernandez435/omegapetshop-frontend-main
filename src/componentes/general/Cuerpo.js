import imgComida from "../../images/ComidaPerro.png";
import imgJuguetes from "../../images/GatoJuguete.png";
import imgMedicinas from "../../images/CachorroMedico.png";
import imgMosaico from "../../images/VariasMascotas.png";
import imgPerroDisfraz from "../../images/PerroDisfraz.png";

const Cuerpo = () => {
    return (
        <div class="bg-img">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Comida"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="DisfrazGato"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="DisfrazPerro"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Juguetes"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Medicinas"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3001">
                        <img src={imgComida} class="img-fluid mx-auto d-right w-40 max-width: 70% height: auto" alt="ImagenComida"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style={{color:"#D35400"}}>Tu mascota merece lo mejor</h1>
                                <h2 style={{color:"#FBFF00"}}>Comidas variadas y nutritivas.</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgMosaico} class="img-fluid mx-auto d-right w-40 max-width: 70% height: auto" alt="ImagenMosaico"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <br></br>
                                <h1 style={{color:"#D35400"}}>Especialistas en mascotas</h1>
                                <h2 style={{color:"#FBFF00"}}>Productos nacionales e importados.</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgPerroDisfraz} class="img-fluid mx-auto d-right w-40 max-width: 70% height: auto" alt="ImagenPerroDisfraz"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style={{color:"#D35400"}}>Los mejores outfits para tu mascota</h1>
                                <h2 style={{color:"#FBFF00"}}>Vestuario para toda ocasión.</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgJuguetes} class="img-fluid mx-auto d-right w-40 max-width: 70% height: auto" alt="ImagenJuguetes"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style={{color:"#D35400"}}>Juguetes para tu mascota</h1>
                                <h2 style={{color:"#FBFF00"}}>La mayor diversión para tu mascota.</h2>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgMedicinas} class="img-fluid mx-auto d-right w-40 max-width: 70% height: auto" alt="ImagenMedicinas"></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style={{color:"#D35400"}}>La salud de tu mascota es prioridad</h1>
                                <h2 style={{color:"#FBFF00"}}>Tenemos los mejores medicamentos!</h2>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Cuerpo;