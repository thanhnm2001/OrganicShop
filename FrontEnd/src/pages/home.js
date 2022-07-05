import React, { useEffect } from 'react';
import image1 from '../images/slide1.jpg'
import image2 from '../images/slide2.jpg'
import image3 from '../images/slide3.jpg'
import { carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page_css/home.css';
import { AiFillMail, AiFillPhone, AiFillInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { actFetchProduct } from '../actions/product';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productAll.products)
  useEffect(() => {
    dispatch(actFetchProduct())


  }, [])
  return (

    <div class="home">

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="Firt Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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


      <div class="vc_empty_space" >
        <span class="vc_empty_space_inner"></span>
      </div>
      <h1 class="vc_custom_heading vc_custom_1596083600508">
        <span>Organic Tattva - India's Leading Brand for Organic Food</span></h1>
      <div class="wpb_single_image wpb_content_element vc_align_center wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp mobi-heading wpb_start_animation animated">
        <figure class="wpb_wrapper vc_figure">
          <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="22" src="https://www.organictattva.com/wp-content/uploads/2018/07/line-150x22.png" class="vc_single_image-img attachment-thumbnail" alt="line" loading="lazy" title="line" /></div>
        </figure>
      </div>
      <div ><span class="vc_empty_space_inner"></span></div>
      <div >
        <h2 className="vcc1">‘Organic Tattva’ has grown on the principles of health, ecology, and care.<br /> We believe in working with a large number of accredited farmers who do <br />not use or promote the use of pesticides and genetically modified seeds to<br /> grow their produce. We aim to give our customers a healthy chemical-free<br /> meal for the perfect nutrition.</h2>
      </div>
      <div class="vc_empty_space" ><span class="vc_empty_space_inner"></span></div>

      <div className="out_organic">
        <div class="vc_empty_space" >
          <span class="vc_empty_space_inner"></span>
        </div>
        <h1 class="vc_custom_heading vc_custom_1596083600508">
          <span>Our Organic Range</span></h1>
        <div class="wpb_single_image wpb_content_element vc_align_center wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp mobi-heading wpb_start_animation animated">
          <figure class="wpb_wrapper vc_figure">
            <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="22" src="https://www.organictattva.com/wp-content/uploads/2018/07/line-150x22.png" class="vc_single_image-img attachment-thumbnail" alt="line" loading="lazy" title="line" /></div>
          </figure>
        </div>
        <div class="vc_empty_space" >
          <span class="vc_empty_space_inner"></span></div>
        <div class="vc_col-sm-2  wpb_column vc_column_container text-align-none text-rp-left">

        </div>

        <div class="wpb_single_image wpb_content_element vc_align_center">
          <figure class="wpb_wrapper vc_figure">
            <div class="vc_single_image-wrapper   vc_box_border_grey">
              <img width="150" height="150" src="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_01-150x150.png"
                class="vc_single_image-img attachment-thumbnail" alt="High Nutritional Value in Organic Food" loading="lazy"
                srcset="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_01-150x150.png 150w, https://www.organictattva.com/wp-content/uploads/2019/01/Icons_01-150x150-100x100.png 100w"
                sizes="(max-width: 150px) 100vw, 150px" title="High Nutritional Value in Organic Food" /></div>
          </figure>
        </div>
        <span className="high">High Nutritional Value</span>
        <div class="wpb_wrapper">
          <p className="high1">Organic foods preserve far more natural vitamins and minerals</p>
        </div>

        <div class="wpb_single_image wpb_content_element vc_align_center">
          <figure class="wpb_wrapper vc_figure">
            <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="150" src="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_02-150x150.png" class="vc_single_image-img attachment-thumbnail" alt="Organic Food has No Chemicals &amp; Pesticides" loading="lazy" srcset="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_02-150x150.png 150w, https://www.organictattva.com/wp-content/uploads/2019/01/Icons_02-150x150-100x100.png 100w" sizes="(max-width: 150px) 100vw, 150px" title="Organic Food has No Chemicals &amp; Pesticides" /></div>
          </figure>
        </div>
        <span className="high">No Chemicals &amp; Pesticides</span>
        <p className="high2">We don’t use artificial fertilisers or additives in our food</p>

        <div class="wpb_single_image wpb_content_element vc_align_center">
          <figure class="wpb_wrapper vc_figure">
            <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="150" src="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_03-150x150.png" class="vc_single_image-img attachment-thumbnail" alt="Organic Tattva has Certified Organic Sources" loading="lazy" srcset="https://www.organictattva.com/wp-content/uploads/2019/01/Icons_03-150x150.png 150w, https://www.organictattva.com/wp-content/uploads/2019/01/Icons_03-150x150-100x100.png 100w" sizes="(max-width: 150px) 100vw, 150px" title="Organic Tattva has Certified Organic Sources" /></div>
          </figure>
        </div>
        <span className="high">Certified Organic Sources</span>
        <p className="high1">Our products are strictly quality controlled and independently verified</p>
      </div>
      <div className="out_organic">
        <div class="vc_empty_space" >
        </div>
      </div>





      <footer class="footer-32892 pb-0">
        <div class="site-section">
          <div class="container">


            <div class="row">

              <div class="col-md pr-md-5 mb-4 mb-md-0">
                <h3>About Us</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde facere repellendus, odio et iste voluptatum aspernatur ratione mollitia tempora eligendi maxime est, blanditiis accusamus. Incidunt, aut, quis!</p>
                <ul class="list-unstyled quick-info mb-4">
                  <li> <a href="#" class="d-flex align-items-center"> <span class="icon mr-3 icon-phone"></span> <AiFillPhone />  +1 291 3912 329</a>  </li>
                  <li>  <a href="https://mail.google.com/" class="d-flex align-items-center"> <span class="icon mr-3 icon-envelope"></span><AiFillMail /> info@gmail.com</a></li>
                </ul>

                <div action="#" class="subscribe">
                  <input type="text" class="form-control" placeholder="Enter your e-mail" />
                  <input className="btnsend" type="submit" class="btn btn-submit" value="Send" />
                </div>
              </div>
              <div class="col-md mb-4 mb-md-0">
                <h3>Latest Tweet</h3>
                <ul class="list-unstyled tweets">
                  <li class="d-flex">
                    <FiTwitter /> <div class="mr-4"><span class="icon icon-twitter"></span></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.</div>
                  </li>
                  <li class="d-flex">
                    <FiTwitter /> <div class="mr-4"><span class="icon icon-twitter"></span></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.</div>
                  </li>
                  <li class="d-flex">
                    <FiTwitter />  <div class="mr-4"><span class="icon icon-twitter"></span></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.</div>
                  </li>
                </ul>
              </div>


              <div class="col-md-3 mb-4 mb-md-0">
                <h3><AiFillInstagram />Instagram</h3>
                <div class="row gallery">
                  <div class="col-6">
                    <a href="https://www.instagram.com/"><img src={image1} alt="Image" class="img-fluid" /></a>
                    <a href="https://www.instagram.com/"><img src={image3} alt="Image" class="img-fluid" /></a>
                  </div>
                  <div class="col-6">
                    <a href="https://www.instagram.com/"><img src={image2} alt="Image" class="img-fluid" /></a>
                    <a href="https://www.instagram.com/"><img src={image3} alt="Image" class="img-fluid" /></a>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="py-5 footer-menu-wrap d-md-flex align-items-center">
                  <ul class="list-unstyled footer-menu mr-auto">
                    <li><a href="">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our works</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacts</a></li>
                  </ul>
                  <div class="site-logo-wrap ml-auto">
                    <a href="#" class="site-logo">
                      Colorlib
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>




    </div>

  );
};

export default Home;
