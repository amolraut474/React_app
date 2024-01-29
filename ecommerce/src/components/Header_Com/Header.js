import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return <>
        <section class="Announcement-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-md-12 d-flex align-items-center gap-2 Ann-col-mobile"><h2 class="Ann-icon"><span><i class="bi bi-translate"></i></span>English   <i class="bi bi-chevron-down"></i> </h2>
                        <h2 class="Ann-icon">USD <span><i class="bi bi-chevron-down"></i></span>   </h2>
                        <h2 class="Ann-icon"><span><i class="bi bi-phone"></i></span>123-456-7890</h2>

                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-12 d-flex align-items-center justify-content-end gap-2 Ann-col-mobile"><h2 class="Ann-icon"><span><i class="bi bi-shuffle"></i></span>Compare</h2>
                        <h2 class="Ann-icon"><span><i class="bi bi-heart"></i></span>Wishlist</h2>
                        <h2 class="Ann-icon"><span><i class="bi bi-person-add"></i></span>Login</h2>
                    </div>
                </div>
            </div>

        </section>
        <div class="section-1">
            <nav class="navbar navbar-expand-lg">
                <div class="container">


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>

                    </button>
                    <div class="Header-s">
                        <div><a class="navbar-brand" href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png" class="img-fluid img-banner" alt="..." /></a></div>

                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Pages">Pages</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Blog">Blog</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Products">Products</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Shop">Shop</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Contact us">Contact us</Link>

                            </li>

                        </ul>

                    </div>
                    <div class="icon-box">
                        <h2><i class="bi bi-search"></i></h2>
                        <h2><i class="bi bi-cart3"></i></h2>

                    </div>
                </div>
            </nav>
        </div>


    </>;
}
export default Header;