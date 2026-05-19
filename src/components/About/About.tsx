import Image from "next/image";
import { memo } from "react";
import styles from "./About.module.css";

export const About = memo(() => (
    <section
        className={`section ${styles.about} -mt-50 md:-mt-40 lg:-mt-30 mb-40`}
        id="about"
        aria-label="about"
    >
        <div className={`custom-container ${styles.customContainer}`}>

            {/* <figure className={styles.aboutBanner}>
                <Image
                    src="/images/about-banner.webp"
                    width={470}
                    height={538}
                    loading="lazy"
                    alt="about banner"
                    className="w-fill"
                />
            </figure> */}

            <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Dental Health</h2>
                <p className={`section-text ${styles.sectionText1}`}>
                    Welcome to <b>M.G Dental Clinic & Implant Centre</b>, your trusted <b>best dental clinic in Kathmandu</b> located at Chapagaun Dobato, Lalitpur, Nepal. As the premier choice for <b>dental care in Kathmandu</b>, we operate with the motto <i>&quot;Professional Dentist, Advanced Technology and Affordable Price&quot;</i>, committed to providing high-quality <b>dental care in Kathmandu</b> for every smile at both our convenient locations.
                </p>
                <p className="section-text">
                    Our team of experienced dentists at <b>dental clinic in Kathmandu</b> offers a full range of treatments including <b>dental implants, braces, cosmetic dentistry, root canal, teeth whitening, orthodontics, gum treatment, oral surgery,</b> and <b>tooth extraction.</b> We also specialize in <b>pediatric dentistry,</b> ensuring gentle care for children, as well as <b>family dentist services</b> for all ages.
                </p>
                <p className={`section-text ${styles.sectionText1}`}>
                    At <b>M.G Dental Clinic & Implant Centre</b> in Kathmandu, recognized as the <b>best dental clinics in Kathmandu,</b> we combine modern technology with compassionate care to make treatments comfortable and accessible. Whether you need a routine <b>dental checkup, emergency dental care,</b> or advanced solutions for restoring your smile, both our clinics ensure the best outcomes at an <b>affordable price.</b>
                </p>
                <p className="section-text">
                    Choose <b>M.G Dental Clinic</b> in <b>Kathmandu</b> for the <b>best dentists in Kathmandu,</b> where healthy smiles begin with expert care and a personal touch at our trusted <b>dental clinic.</b> Visit the clinic for comprehensive dental solutions.
                </p>

            </div>
        </div>
    </section>
));

About.displayName = "About";