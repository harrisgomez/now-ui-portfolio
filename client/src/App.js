import React from 'react';
import './App.css';

import { Navbar } from './containers/navbar';

import self from './assets/img/ryan.jpg';
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
            <Navbar />

            <div className="wrapper">
                <div className="page-header clear-filter page-header-small" filter-color="orange">
                    <div className="page-header-image" data-parallax="true" style={{ backgroundImage: `url(${backdrop})` }}>
                    </div>
                    <div className="container">
                        <div className="photo-container">
                            <img src={self} alt="" />
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
                        <h5 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ea quod velit alias tenetur voluptate facere eaque quidem, earum architecto non facilis neque at totam, reprehenderit illum eveniet. Voluptatem, dicta.</h5>
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
