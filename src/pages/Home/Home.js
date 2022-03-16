import React from "react";
import styles from "../../assets/css/compiled-css/home.module.css";
import HomePolicy from "./HomePolicy";
function Home() {
    return (
        <>
            <section className={styles.first_fold}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col_8}>
                            <div className={styles.banner_left}>
                                <h1>
                                    No one can predict the future.
                                    <br /> But we can surely{" "}
                                    <span>protect</span> it.
                                </h1>
                                <p>Security is a priority, not an option.</p>
                            </div>
                        </div>
                        <div className={styles.col_4}>
                            <div className={styles.banner_right}>
                                <img
                                    src="/images/img/banner-img-five.webp"
                                    alt="Epcoh Insurance Brokers Private Ltd."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <HomePolicy /> */}
            <section className={styles.home_about}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col_8}>
                            <div className={styles.home_about_left}>
                                <h2>
                                    Know <span>About Us? </span>{" "}
                                </h2>
                                <p>
                                    EPOCH is one of India’s leading Insurance
                                    brokers. Headquartered out of New Delhi, our
                                    customers include large corporates, MNC’s
                                    and blue chip companies. While large
                                    business are supported by a highly competent
                                    corporate team, the SME segment is also
                                    serviced with a team of dedicated
                                    professionals. Our leadership team comprises
                                    of MBA’s, accountants, lawyers and
                                    professionals from diverse business.{" "}
                                    <a href="/about-us/">Read more</a>
                                </p>
                                <div className={styles.home_about_left_head}>
                                    EPOCH is one of India’s leading Insurance
                                    broker
                                </div>
                            </div>
                        </div>
                        <div className={styles.col_4}>
                            <img
                                src="/images/img/about-img.webp"
                                alt="Epoch About page"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.services_home}>
                <div className={styles.container}>
                    <h2>
                        <span>Our Services</span>
                    </h2>
                    <div className={styles.row}>
                        <div className={styles.services_home_main}>
                            <div className={styles.services_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/services/ourservices1.webp"
                                        alt="Claim Advisory & Consultancy Services"
                                    />
                                </div>
                                <div className={styles.services_home_main_box_head}>
                                    Claim Advisory & Consultancy Services
                                </div>
                            </div>
                            <div className={styles.services_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/services/ourservices2.webp"
                                        alt="Insurance Placement"
                                    />
                                </div>
                                <div className={styles.services_home_main_box_head}>
                                    Insurance Placement
                                </div>
                            </div>
                            <div className={styles.services_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/services/ourservices3.webp"
                                        alt="Portfolio Assessment"
                                    />
                                </div>
                                <div className={styles.services_home_main_box_head}>
                                    Portfolio Assessment
                                </div>
                            </div>
                            <div className={styles.services_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/services/ourservices4.webp"
                                        alt="Risk Inspection"
                                    />
                                </div>
                                <div className={styles.services_home_main_box_head}>
                                    Risk Inspection
                                </div>
                            </div>
                            <div className={styles.services_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/services/ourservices5.webp"
                                        alt="Valuation Services"
                                    />
                                </div>
                                <div className={styles.services_home_main_box_head}>
                                    Valuation Services
                                </div>
                            </div>
                            <div className={styles.hr_line_dotted}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.choose_home}>
                <div className={styles.container}>
                    <h2>Why Choose Us?</h2>
                    <div className={styles.row}>
                        <div className={styles.choose_home_main}>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose1.webp"
                                        alt="Professional & Experienced Team"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Professional & Experienced Team
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose2.webp"
                                        alt="Customized Solutions"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Customized Solutions
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose3.webp"
                                        alt="Strong Relationship With Insurance Companies"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Strong Relationship With Insurance Companies
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose4.webp"
                                        alt="Service Commitment ONTIME EVERYTIME"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Service Commitment ONTIME EVERYTIME
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose5.webp"
                                        alt="Technological Edge"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Technological Edge
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose6.webp"
                                        alt="Additional Services Offered"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Additional Services Offered
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose7.webp"
                                        alt="Competitive Premium"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Competitive Premium
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.choose_home_main_box}>
                                <div className={styles.red_circle}>
                                    <img
                                        src="/images/img/choose/whychoose8.webp"
                                        alt="Single Window Solution"
                                    />
                                </div>
                                <div className={styles.choose_head}>
                                    Single Window Solution
                                </div>
                                <div className={styles.line_top_left}></div>
                            </div>
                            <div className={styles.line_top_dot}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.advantage_home}>
                <div className={styles.container}>
                    <h2>
                        <span>Epoch Advantage</span>
                    </h2>
                    <div className={styles.row}>
                        <div className={styles.advantage_home_main}>
                            <div className={styles.advantage_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/advantage/epoch-aadvantage1.webp"
                                        alt="Ocean of Knowledge"
                                    />
                                </div>
                                <div className={styles.advantage_home_main_box_head}>
                                    Ocean of Knowledge
                                </div>
                            </div>
                            <div className={styles.advantage_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/advantage/epoch-aadvantage2.webp"
                                        alt="Fast, Secure & Reliable"
                                    />
                                </div>
                                <div className={styles.advantage_home_main_box_head}>
                                    Fast, Secure & Reliable
                                </div>
                            </div>
                            <div className={styles.advantage_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/advantage/epoch-aadvantage3.webp"
                                        alt="Best in industry Deals"
                                    />
                                </div>
                                <div className={styles.advantage_home_main_box_head}>
                                    Best in industry Deals
                                </div>
                            </div>
                            <div className={styles.advantage_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/advantage/epoch-aadvantage4.webp"
                                        alt="Seamless Systematic Portfolio Assesssment"
                                    />
                                </div>
                                <div className={styles.advantage_home_main_box_head}>
                                    Seamless Systematic Portfolio Assesssment
                                </div>
                            </div>
                            <div className={styles.advantage_home_main_box}>
                                <div className={styles.img_div}>
                                    <img
                                        src="/images/img/advantage/epoch-aadvantage5.webp"
                                        alt="Exclusive Claim Asisstance Programs"
                                    />
                                </div>
                                <div className={styles.advantage_home_main_box_head}>
                                    Exclusive Claim Asisstance Programs
                                </div>
                            </div>
                            <div className={styles.hr_line_dotted}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
