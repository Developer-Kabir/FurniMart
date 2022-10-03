import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark" arial-label="Furni navigation bar">

<div class="container">
    <a class="navbar-brand" href="/">FurniMart</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li><Link class="nav-link" to="/shop">Shop</Link></li>
            <li><Link class="nav-link" to="/about">About us</Link></li>
            <li><Link class="nav-link" to="/service">Services</Link></li>
            <li><a class="nav-link" href="blog.html">Blog</a></li>
            <li><Link class="nav-link" to="/contact">Contact us</Link></li>
        </ul>

        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a class="nav-link" href="#"><img src="Assets/images/user.svg" alt=''/></a></li>
            <li><a class="nav-link" href="cart.html"><img src="Assets/images/cart.svg" alt=''/></a></li>
        </ul>
    </div>
</div>
    
</nav>
        </div>
    );
};

export default Header;