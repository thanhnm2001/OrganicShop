import React from 'react';
import image1 from '../images/slide1.jpg'
import image2 from '../images/slide2.jpg'
import image3 from '../images/slide3.jpg'
import { carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page_css/home.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
const Home = () => {
  return (
    <div>
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


      <div class="vc_empty_space" >
        <span class="vc_empty_space_inner"></span>
      </div>
      <h1 class="vc_custom_heading vc_custom_1596083600508">
        <span>Resipes</span></h1>
      <div class="wpb_single_image wpb_content_element vc_align_center wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp mobi-heading wpb_start_animation animated">
        <figure class="wpb_wrapper vc_figure">
          <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="150" height="22" src="https://www.organictattva.com/wp-content/uploads/2018/07/line-150x22.png" class="vc_single_image-img attachment-thumbnail" alt="line" loading="lazy" title="line" /></div>
        </figure>
      </div>
      <a href="https://www.organictattva.com/recipes/amaranth-cutlet/" target="_self" class="vc_single_image-wrapper vc_box_shadow_3d  vc_box_border_grey">
        <img width="360" height="240" src="https://www.organictattva.com/wp-content/uploads/2019/08/Amaranth-cutlet.jpg" class="vc_single_image-img attachment-large" alt="Organic Tattva Amaranth Cutlet Recipe" loading="lazy" srcset="https://www.organictattva.com/wp-content/uploads/2019/08/Amaranth-cutlet.jpg 360w, https://www.organictattva.com/wp-content/uploads/2019/08/Amaranth-cutlet-300x200.jpg 300w" sizes="(max-width: 360px) 100vw, 360px" title="Organic Tattva Amaranth Cutlet Recipe" /></a>
     
      <div className="recipes"> 
        <span><a href="http://www.organictattva.com/recipes/amaranth-cutlet/">Amaranth Cutlet</a></span>
      </div>


      <div class="wpb_single_image wpb_content_element vc_align_left">
        <figure class="wpb_wrapper vc_figure">
          <a href="https://www.organictattva.com/recipes/biryani/" target="_self" class="vc_single_image-wrapper vc_box_shadow_3d  vc_box_border_grey">
            <img className="im1" width="360" height="240" src="https://www.organictattva.com/wp-content/uploads/2019/08/Biryani.jpg" class="vc_single_image-img attachment-large" alt="Biryani Recipe by Organic Tattva" loading="lazy" srcset="https://www.organictattva.com/wp-content/uploads/2019/08/Biryani.jpg 360w, https://www.organictattva.com/wp-content/uploads/2019/08/Biryani-300x200.jpg 300w" sizes="(max-width: 360px) 100vw, 360px" title="Biryani Recipe by Organic Tattva" /></a>
        </figure>
      </div>
      <span className="recipes"><a href="http://www.organictattva.com/recipes/biryani/">Biryani</a></span>

      <div class="wpb_single_image wpb_content_element vc_align_left">
        <figure class="wpb_wrapper vc_figure">
          <a href="https://www.organictattva.com/recipes/suji-barfi/" target="_self" class="vc_single_image-wrapper vc_box_shadow_3d  vc_box_border_grey">
            <img id="h1" width="360" height="240" src="https://www.organictattva.com/wp-content/uploads/2019/08/Suji-Barfi.jpg" class="vc_single_image-img attachment-large" alt="Suji Barfi Recipe by Organic Tattva" loading="lazy" srcset="https://www.organictattva.com/wp-content/uploads/2019/08/Suji-Barfi.jpg 360w, https://www.organictattva.com/wp-content/uploads/2019/08/Suji-Barfi-300x200.jpg 300w" sizes="(max-width: 360px) 100vw, 360px" title="Suji Barfi Recipe by Organic Tattva" /></a>
        </figure>
        <span id="z1">Suji Barfi</span>
      </div>
      




      <div class="p-3 mb-2 bg-dark text-white">
        <div class="col">
          <p>
            <b>Tất cả sản phẩm</b>
          </p>
          <p>
            <a href="#" > Organic Rice </a>
            |
            <a href="#" > Organic Cereals & Grains </a>
            |
            <a href="#" > Organic Flours </a>
            |
            <a href="#" > Organic Pulses </a>
            |
            <a href="#" > Organic Sugar & Jaggery </a>
            |
            <a href="#" > Organic Whole Spices </a>
            |
            <a href="#" > Organic Masala Blends </a>
            |
            <a href="#" > Organic Super Foods & Health Foods </a>
            |
            <a href="#" > Organic Tea & Coffee </a>
            |
            <a href="#" > Organic Oils, Honey & Pastes </a>
            |
            <a href="#" > Natural Salts </a>
            |
            <a href="#" > Organic Ground Spices </a>
            |
            <a href="#" > Organic Dry Fruits </a>
            |
          </p>
        </div>

        <div>
          <hr />
          <div class="footer-top1 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-5" class="widget_text widget widget_custom_html"><h5 class="wg-title">About Us</h5><div class="textwidget custom-html-widget">Mehrotra Consumer Products Pvt. Ltd. is a young and dynamic company aspiring to be a leader in the Organic food industry.

              <h5 class="wg-title two">Like &amp; Share</h5>

              <a class="navbar-brand" href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a class="navbar-brand" href="https://www.instagram.com/" >
                <FiInstagram />
              </a>
              <a class="navbar-brand" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vZGV2ZWxvcGVyLnR3aXR0ZXIuY29tL2VuL2FwcHMifQ%3D%3D%22%7D" >
                <FaTwitter />
              </a>

            </div>
            </aside>
          </div>
          <div class="footer-top2 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-4" class="widget_text widget widget_custom_html"><h5 class="wg-title">Get in Touch</h5><div class="textwidget custom-html-widget"><p>Mehrotra Consumer Products Pvt. Ltd.
              26G, Sector 31, Ecotech 1, <br />
              Greater Noida-201308, India</p>
              <br />
              <p><a href="mailto:customercare@organictattva.com" class="link-ho">customercare@organictattva.com</a></p>
              <p><a href="tel:+91 120 4260545" class="link-ho">+91 120 4260545</a></p></div></aside>
          </div>

          <div class="footer-top3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-3" class="widget_text widget widget_custom_html"><h5 class="wg-title">Quick Links</h5><div class="textwidget custom-html-widget"><p><a href="https://www.organictattva.com/">Trang chủ</a></p>
             
              <p><a href="/product">Sản Phẩm</a></p>
              <p><a href="/contact">Liên Hệ</a></p>
              <p><a href="/new">Tin Tức</a></p>
         

            </div>
            </aside>
          </div>

          <div class="footer-top4 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-2" class="widget_text widget widget_custom_html"><h5 class="wg-title">Useful Links</h5><div class="textwidget custom-html-widget"><p><a href="https://www.organictattva.com/terms-conditions/">Terms &amp; Conditions</a></p>
              <p><a href="https://www.organictattva.com/privacy-policy/">Privacy Policy</a></p>
              <p><a href="https://www.organictattva.com/sitemap">Sitemap</a></p>
              <p><a href="https://www.organictattva.com/faqs/">FAQ's</a></p>
              <p><a href="https://www.organictattva.com/buy-now/">Buy Now</a></p></div></aside>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;
