import React from 'react'
import Skills from './Skills'
import { GiSpellBook, GiHumanTarget } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";

function Resume() {
    return (
        <>
            <div className="flex captionHeading">
                <div className="captionNodeOne">
                    <div className="dotSVG NodeOne"></div>
                </div>
                <svg style={{ position: 'relative', zIindex: '1' }} stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.249.249 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301 2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.937.937 0 0 1-.663.275Z">
                    </path>
                    <path
                        d="M2.625 12A9.375 9.375 0 0 0 12 21.375 9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3 0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12 5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.39 9.39 0 0 0 12 2.625 9.375 9.375 0 0 0 2.625 12Z">
                    </path>
                    <path
                        d="M7.125 12a4.874 4.874 0 1 0 9.717-.569.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253 6.376 6.376 0 0 1 5.236-10.844.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12Z">
                    </path>
                </svg>
                <p className="caption">Career objective</p>
            </div>
            <p className="paragraph">
                <span style={{ width: '15px', display: 'inline-block' }}> </span> Driven <b>Full-Stack Developer</b> committed to crafting
                seamless digital experiences through a fusion of creative
                front-end design and robust back-end architecture. With a keen eye for detail and a passion for staying at the
                forefront of technology, I aim to contribute my expertise in creating dynamic, user-friendly applications that
                leave a lasting impact.
            </p>
            <br />
            <div className="flex captionHeading">
                <div className="captionNodeTwo">
                </div>
                <div className="captionNodeThree">
                </div>
                <div className="captionNodeFour">
                </div>
                <span style={{ position: 'relative', zIndex: '2', fontSize: '24px' }}>
                    <GiSpellBook />
                </span>
                <p className="caption">Professional and Academic Qualification</p>
            </div>
            <div className="professtioalAca">
                <div className="PjoinTwoTop"></div>
                <div className="PjoinTowbottom"></div>
                <div className="flex">
                    <h4>Bachelor of Computer Science</h4>
                    <p>Virtual University</p>
                </div>
                <div className="flex">
                    <h4>Web Developer BootCamp</h4>
                    <p>Udemy</p>
                </div>
                <div className="flex">
                    <h4>Full Stack Javascript Developer</h4>
                    <p>Udemy</p>
                </div>
                <div className="flex">
                    <h4>Shopify Development</h4>
                    <p>WeeklyHow</p>
                </div>
            </div>
            <br />
            <Skills />
            {/* <br/> */}
            <br />
            <div className="flex captionHeading alsdkjoienc">
                <span style={{ position: 'relative', zIndex: '2', fontSize: '24px' }}>
                    <MdWorkHistory />
                </span>
                <p className="caption">Professional career</p>
            </div>
            <div className="professtioalAca oiewjd">
                <div class="captionNodeTwo"></div>
                <div className="PjoinTwoTop"></div>
                <div className="PjoinTowbottom"></div>
                <div className="flex four">
                    <div className='owierufjc'>
                        <div className="ulone basicsdk">
                            <ul>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Design WEBsites</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Develop NewsLetter of Brand</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Custom CSS</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Websites Customization</li>
                            </ul>
                        </div>
                    </div>
                    <h4>ComputeSOL</h4>
                    <p>From : Jan,2022 - to : April,2022</p>
                </div>
                <div className="flex three">
                    <div className='owierufjc'>
                        <div className="ulone basicsdk">
                            <ul>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>UI developer</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Custom theme Developer</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Liquid Templetating language</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>JavaScript Animations</li>
                            </ul>
                        </div>
                    </div>
                    <h4>White Systems LLC</h4>
                    <p>From : March,2022 - to : July,2022</p>
                </div>
                <div className="flex two">
                    <div className='owierufjc'>
                        <div className="ulone basicsdk">
                            <ul>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Higly Custom themes</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Theme Access</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify APIS</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Custom in-build Apps</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>build Conceptual Functionalities in JavaScript</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify Private app(Practicing)</li>
                            </ul>
                        </div>
                    </div>
                    <h4>Web Bugs</h4>
                    <p>From : Sep,2022 - to : Aug, 2023</p>
                </div>
                <div className="flex one">
                    <div className='owierufjc'>
                        <div className="ulone basicsdk">
                            <ul>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify Plus Development</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify App Storefront</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify Scripts</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopify StoreFront Api's</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>React Websites</li>
                                <li><span style={{ display: 'flex', transform: 'rotate(45deg)', padding: '3px', background: '#0B486B', alignItems: 'center', justifyContent: 'center' }}>
                                </span>Shopfiy App Development</li>
                            </ul>
                        </div>
                    </div>
                    <h4>Bigfolio</h4>
                    <p>From : Dec,2023</p>
                </div>
            </div>
            <br />
            <div className='pqdklscn'>
                <div>
                    <div className="flex captionHeading">
                        <div className="captionNodeTwo">
                        </div>
                        <div className="captionNodeThree">
                        </div>
                        <div className="captionNodeFour">
                        </div>
                        <span style={{ position: 'relative', zIndex: '2', fontSize: '24px' }}>
                            <GiHumanTarget />
                        </span>
                        <p className="caption">Personal Information</p>
                    </div>
                    <div className="professtioalAca iolhnasi">
                        <div className="PjoinTwoTop"></div>
                        <div className="PjoinTowbottom"></div>
                        <div className="flex">
                            <h4>Date of Birth</h4>
                            <p>October 23,2001</p>
                        </div>
                        <div className="flex">
                            <h4>Nationality</h4>
                            <p>Pakistani</p>
                        </div>
                        <div className="flex">
                            <h4>Marital status</h4>
                            <p>Single</p>
                        </div>
                        <div className="flex">
                            <h4>Language</h4>
                            <p>English,Urdu,Punjabi</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex captionHeading">
                        <div className="captionNodeTwo">
                        </div>
                        <div className="captionNodeThree">
                        </div>
                        <div className="captionNodeFour">
                        </div>
                        <span style={{ position: 'relative', zIndex: '2', fontSize: '24px' }}>
                            <BiSolidContact />
                        </span>
                        <p className="caption">Contact Information</p>
                    </div>
                    <div className="professtioalAca iolhnasi">
                        <div className="PjoinTwoTop"></div>
                        <div className="PjoinTowbottom"></div>
                        <div className="flex">
                            <h4>Mobile</h4>
                            <p>+92 3200516496</p>
                        </div>
                        <div className="flex">
                            <h4>Email</h4>
                            <p>biatemper0800@gmail.com</p>
                        </div>
                        <div className="flex">
                            <h4>GitHub</h4>
                            <p><a href="https://github.com/AbdullahKhan0800?tab=repositories">AbdullahKhan0800</a></p>
                        </div>
                        <div className="flex">
                            <h4>Live In</h4>
                            <p>Lahore, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Resume
