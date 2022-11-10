import HeaderYodaPetshop from "../../images/header_omega_petshop.png"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="MenuHome" aria-controls="menuHome" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-md-center" id="BarraNavegacion">
                <div class="col px-5">
                    <img src={HeaderYodaPetshop} alt="HeaderYoda" width="750" height="100"></img>
                </div>
                <ul class="navbar-nav me-5">
                    <li class="navbar-brand">
                        <a class="navbar-brand" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/productos">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/categorias">Categorias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/usuarios">Usuarios</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
}

export default Header;