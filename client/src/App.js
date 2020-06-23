import React from 'react';
import './App.css';
// import { Header } from './containers/header';

import backdrop from './assets/img/bg5.jpg';
import galleryImg1 from './assets/img/bg1.jpg';
import galleryImg2 from './assets/img/bg3.jpg';
import galleryImg3 from './assets/img/bg8.jpg';
import galleryImg4 from './assets/img/bg7.jpg';
import profileImg1 from './assets/img/bg6.jpg';
import profileImg2 from './assets/img/bg11.jpg';
import profileImg3 from './assets/img/bg7.jpg';
import profileImg4 from './assets/img/bg8.jpg';
import messagesImg1 from './assets/img/bg3.jpg';
import messagesImg2 from './assets/img/bg8.jpg';
import messagesImg3 from './assets/img/bg7.jpg';
import messagesImg4 from './assets/img/bg6.jpg';


function App() {
    return (
        <div className="App profile-page sidebar-collapse">

            <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
                <div className="container">
                    <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-header" href="!">Dropdown header</a>
                            <a className="dropdown-item" href="!">Action</a>
                            <a className="dropdown-item" href="!">Another action</a>
                            <a className="dropdown-item" href="!">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="!">Separated link</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="!">One more separated link</a>
                        </div>
                    </div>
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank noopener noreferrer">
                            Now Ui Kit
                        </a>
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="../index.html">Back to Kit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/creativetimofficial/now-ui-kit/issues">Have an issue?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank noopener noreferrer">
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="wrapper">
                <div className="page-header clear-filter page-header-small" filter-color="orange">
                    <div className="page-header-image" data-parallax="true" style={{ backgroundImage: `url(${backdrop})` }}>
                    </div>
                    <div className="container">
                        <div className="photo-container">
                            <img src="assets/img/ryan.jpg" alt="" />
                        </div>
                        <h3 className="title">Ryan Scheinder</h3>
                        <p className="category">Photographer</p>
                        <div className="content">
                            <div className="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div className="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div className="social-description">
                                <h2>48</h2>
                                <p>Bookmarks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="button-container">
                            <a href="!" className="btn btn-primary btn-round btn-lg">Follow</a>
                            <a href="!" className="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="!" className="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <h3 className="title">About me</h3>
                        <h5 className="description">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <h4 className="title text-center">My Portfolio</h4>
                                <div className="nav-align-center">
                                    <ul className="nav nav-pills nav-pills-primary nav-pills-just-icons" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#profile" role="tablist">
                                                <i className="now-ui-icons design_image"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#home" role="tablist">
                                                <i className="now-ui-icons location_world"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#messages" role="tablist">
                                                <i className="now-ui-icons sport_user-run"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Tab panes --> */}
                            <div className="tab-content gallery">
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <div className="col-md-10 ml-auto mr-auto">
                                        <div className="row collections">
                                            <div className="col-md-6">
                                                <img src={galleryImg1} alt="" className="img-raised" />
                                                <img src={galleryImg2} alt="" className="img-raised" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={galleryImg3} alt="" className="img-raised" />
                                                <img src={galleryImg4} alt="" className="img-raised" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile" role="tabpanel">
                                    <div className="col-md-10 ml-auto mr-auto">
                                        <div className="row collections">
                                            <div className="col-md-6">
                                                <img src={profileImg1} alt="" className="img-raised" />
                                                <img src={profileImg2} alt="" className="img-raised" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={profileImg3} alt="" className="img-raised" />
                                                <img src={profileImg4} alt="" className="img-raised" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="messages" role="tabpanel">
                                    <div className="col-md-10 ml-auto mr-auto">
                                        <div className="row collections">
                                            <div className="col-md-6">
                                                <img src={messagesImg1} alt="" className="img-raised" />
                                                <img src={messagesImg2} alt="" className="img-raised" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={messagesImg3} alt="" className="img-raised" />
                                                <img src={messagesImg4} alt="" className="img-raised" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-default">
                    <div className=" container ">
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.creative-tim.com">
                                        Creative Tim
                                    </a>
                                </li>
                                <li>
                                    <a href="http://presentation.creative-tim.com">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="http://blog.creative-tim.com">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
