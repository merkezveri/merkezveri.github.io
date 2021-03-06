import React from 'react';
import logo from '../figures/logo_without_slogan.svg';
import SearchBar from "./SearchBar";

function Navbar(props) {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
                    <img src={logo} className="image" alt='Merkez Veri' />
                </a>

                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-100 d-none d-md-block search-bar-frame">
                    <SearchBar itemList={props.itemList}/>
                </div>
                
                <span className="mx-1 text-center d-none d-md-block" style={{"width":"160px"}}>
                    <a className="nav-link p-0 me-2" href="https://instagram.com/merkezveri" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-lg navbar-icon"></i></a>
                    <a className="nav-link p-0 me-2" href="https://www.linkedin.com/company/merkezveri/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-lg navbar-icon"></i></a>
                    <a className="nav-link p-0 me-2" href="https://twitter.com/merkezveri" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-lg navbar-icon"></i></a>
                    <a className="nav-link p-0" href="mailto:merkezveri34@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope fa-lg navbar-icon"></i></a>
                </span>
            </header>
        </div>
    )
}

export default Navbar
