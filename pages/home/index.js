import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../styles/home.module.css";
import { Grid } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <Carousel
        useKeyboardArrows
        infiniteLoop
        autoPlay
        transitionTime={1000}
        interval={5000}
        centerMode={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className={styles.img_slider}
      >
        <div className={styles.slide_container}>
          <img
            src="/assets/home1.jpg"
            alt="Picture of the author"
            className={styles.carousal_img}
          />
          <div className={styles.slide1_text}>
            <span className={styles.carousal_title}>
              GET READY TO HOIST YOUR BUSINESS!
            </span>
            <br />
            <span className={styles.carousal_subtitle}>
              Create and enhance your digital space with our services
            </span>
          </div>
        </div>
        <div className={styles.slide_container}>
          <img
            src="/assets/home2.jpg"
            alt="Picture of the author"
            className={styles.carousal_img}
          />
          <div className={styles.slide2_text}>
            <span className={styles.carousal_subtitle}>
              We are here for 3Ds & M . . .
            </span>
            <br />
            <span className={styles.carousal_title}>
              DESIGN, DEVELOP, DEPLOY & MAINTAIN
            </span>
          </div>
        </div>
        <div className={styles.slide_container}>
          <img
            src="/assets/home3.jpg"
            alt="Picture of the author"
            className={styles.carousal_img}
          />
          <div className={styles.slide3_text}>
            <span className={styles.carousal_title}>
              We are #TechEnthusiast,
            </span>
            <br />
            <span className={styles.carousal_subtitle}>
              Hence we enjoy our #Work
            </span>
          </div>
        </div>
      </Carousel>

      <Grid container className={styles.desc_container}>
        <Grid item xs={12} className={styles.title}>
          <span>
            Hoist Infotech <span className={styles.green}> your technology partner</span>
          </span>
        </Grid>
        <Grid item className={styles.company_desc}>
          <span>
            We work hard to make it happen in technology, in ideas for your business. <br />
            Our passion is in understanding how organizations can leverage technology and data to drive their business.
            With a motivated team, we strive to be the creative minds that bring a smile to your face. That’s why we’re always looking for innovative new ways to get the best to you.
          </span>
          <br />
          <div className={styles.slide_left}>
            <span className={styles.green_text}>Glad to help you rise...</span>
          </div>
        </Grid>
      </Grid>

      <Grid container className={styles.vision_container}>
        <Grid item xs={12} className={styles.title}>
          <span className={styles.vision_text}>
            Our Vision
          </span>
        </Grid>
        <Grid item className={styles.company_desc}>
          <span className={styles.vision_text}>
            We at Hoist Infotech will strive to deliver quality designs and raise up customer experience <br />
            as well as <br />
            quality enviornment with work life balance to emplyoees.
          </span>
        </Grid>
      </Grid>


      <Grid container className={styles.desc_container}>
        <Grid item xs={12} className={styles.title} mb={2}>
          <span>
            Our Services
          </span>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.service_block}>
          <div className={styles.service_img_div}>
            <img src='/assets/website.jpg' width={'70%'} />
          </div>
          <span className={styles.service_text}> Website & Web Application Development</span>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.service_block}>
          <div className={styles.service_img_div}>
            <img src='/assets/eCommerce.jpg' width={'50%'} />
          </div>
          <span className={styles.service_text}>E-Commerce & Business Application Development</span>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.service_block}>
          <div className={styles.service_img_div}>
            <img src='/assets/mobileApp.jpg' width={'70%'} />
          </div>
          <span className={styles.service_text}>Android, IOS & Hybrid Application Development</span>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.service_block}>
          <div className={styles.service_img_div}>
            <img src='/assets/qaTesting.jpg' width={'50%'} />
          </div>
          <span className={styles.service_text}>Quality Assuarance & Testing</span>
        </Grid>
        <Grid item xs={12} className={styles.service_block}>
          <div className={styles.service_img_div}>
            <img src='/assets/embedded.png' width={'30%'} />
          </div>
          <span className={styles.embedded_service_text}>Embedded Designs</span>
        </Grid>
      </Grid>

    </div>
  )
}