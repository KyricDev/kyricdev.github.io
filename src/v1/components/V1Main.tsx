import mongoDBLogo from "../assets/svg/mongodb.svg";
import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import javascriptLogo from "../assets/svg/javascript.svg";
import reactJsLogo from "../assets/svg/reactjsLogo.svg";
import nextJsLogo from "../assets/svg/nextjs.svg";
import arduinoLogo from "../assets/svg/arduino.svg";
import cppLogo from "../assets/svg/cpp.svg";
import csharpLogo from "../assets/svg/csharp.svg";
import dartLogo from "../assets/svg/dart.svg";
import dotNetCore from "../assets/svg/dotnetCore.svg";
import flutterLogo from "../assets/svg/flutter.svg";
import postgresqlLogo from "../assets/svg/postgresql.svg";
import nodeJsLogo from "../assets/svg/nodejs.svg";
import landingImg from "../assets/images/landing.jpg";
import bosEmsImg1 from "../assets/images/ems1.png";
import bosEmsImg2 from "../assets/images/ems2.png";
import chrysallisImg from "../assets/images/Chrysallis.jpg";
import moolamoreImg from "../assets/images/mm1.png";
import { NavBar } from "./NavBar.js";
import { MainNavBar } from "./MainNavBar.js";
import { ContactIcons } from "./ContactIcons.js";
import { ToTop } from "./ToTop.js";

import "../styles/style.css";

function V1Main() {
  return (
    <div className="v1 bg-dark-purple font-ntr">
      <div className="flex column center-row landing-relative" id="home">
        <div className="flex vw-70">
          <div className="font-castorgate font-white font-size-64 flex column end-column margin-global-left margin-bottom-50 title-margin">
            <div className="heading-margin">
              Hi I'm <span className="font-pink">Ricky</span>
            </div>
            <div>
              I'm a <span className="font-pink">Web Developer</span>
            </div>
          </div>
        </div>
        <div className="landing-container">
          <img src={landingImg} className="landing-img" />
        </div>
      </div>
      <div className="flex column center-row sticky navbar">
        <div className="flex space-between-column vw-70">
          <MainNavBar />
          <ToTop />
        </div>
      </div>
      <div className="title-btm-margin"></div>
      <div id="projects" className="flex column center-row">
        <div className="vh-80 margin-global-left font-size-20 flex overflow-x-hidden vw-70">
          <div
            className="flex space-between-column padding-top-5 width-100 height-70"
            id="project1"
          >
            <div className="flex column space-between-column vw-28">
              <div className="font-pink">BOS-EMS</div>
              <div className="font-white desc-padding">
                <span className="font-pink">Employee management software.</span>
                Allows admins and HR personnel to add and update{" "}
                <span className="font-pink">
                  employee data and schedules
                </span>{" "}
                and allows employees to{" "}
                <span className="font-pink">
                  request leaves, purchase requests, and view payroll data
                </span>{" "}
                as self-service.
              </div>
              <div className="flex space-evenly-column font-green">
                <a
                  className="transition-navbar hover"
                  href="https://hive-app.bos-ems.com/"
                  target="_blank"
                >
                  SITE
                </a>
              </div>
            </div>
            <div className="relative margin-global-right flex end-column align-self-center vw-53 margin-top-img">
              <img
                className="img-horizontal img-behind absolute"
                src={bosEmsImg1}
              />
              <div className="relative z-b1">
                <img className="img-horizontal" src={bosEmsImg2} />
                <div className="black-filter"></div>
              </div>
            </div>
          </div>
          <div
            className="flex space-between-column padding-top-5 width-100 height-70"
            id="project2"
          >
            <div className="flex column space-between-column vw-28">
              <div className="font-pink">CHRYSALLIS</div>
              <div className="font-white desc-padding">
                <span className="font-pink">Custom-built IOT System</span> made
                to <span className="font-pink">automatically</span> turn lights
                on and off at certain times and track assembly line's outputs
              </div>
              <div className="flex space-evenly-column font-green">
                <a
                  href="https://www.linkedin.com/posts/ricky-dave-madrid-aa4ba6149_esp32-microcontroller-microcontrollers-activity-6764364158231306240-QK32?utm_source=linkedin_share&utm_medium=member_desktop_web"
                  className="transition-navbar hover"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </div>
            <div className="relative margin-global-right flex end-column align-self-center vw-53">
              <img className="img-square" src={chrysallisImg} />
            </div>
          </div>
          <div
            className="flex space-between-column padding-top-5 width-100 height-70"
            id="project3"
          >
            <div className="flex column space-between-column vw-28">
              <div className="font-pink">MOOLAMORE</div>
              <div className="font-white desc-padding">
                Create and visualize{" "}
                <span className="font-pink">cashflow data</span>. Combine and/or
                compare different cashflow scenarios for better context along
                with <span className="font-pink">third-party integration</span>{" "}
                with popular acccounting softwares.
              </div>
              <div className="flex space-evenly-column font-green">
                <a
                  className="transition-navbar hover"
                  href="https://moolamore.com"
                  target="_blank"
                >
                  SITE
                </a>
              </div>
            </div>
            <div className="relative margin-global-right flex end-column vw-53 align-self-center">
              <div className="relative z-b1">
                <img className="img-horizontal" src={moolamoreImg} />
              </div>
            </div>
          </div>
        </div>
        <NavBar
          divisions="3"
          section="project"
          className="flex font-green center-row center-column margin-top-2"
        />
      </div>
      <div className="scroll-margin"></div>
      <div id="techstack" className="flex column center-row font-pink">
        <div className="flex column vw-70">
          <div className="font-size-20 flex overflow-x-hidden">
            <div className="padding-top-5" id="techstack1">
              <div className="font-size-20">FRONT-END TECH</div>
              <div className="flex column space-evenly-column center-row vw-70 height-90">
                <div className="flex center-row space-evenly-column width-100">
                  <div className="tech-icon">
                    <img src={htmlLogo} alt="HTML Logo" />
                    <div className="text-align-center">HTML</div>
                  </div>
                  <div className="tech-icon">
                    <img src={cssLogo} alt="CSS Logo" />
                    <div className="text-align-center">CSS</div>
                  </div>
                  <div className="tech-icon">
                    <img src={javascriptLogo} alt="Javascript Logo" />
                    <div className="text-align-center">Javascript</div>
                  </div>
                  <div className="tech-icon">
                    <img src={reactJsLogo} alt="ReactJS Logo" />
                    <div className="text-align-center">ReactJS</div>
                  </div>
                </div>
                <div className="flex center-row space-evenly-column width-100">
                  <div className="tech-icon">
                    <img src={nextJsLogo} alt="NextJS Logo" />
                    <div className="text-align-center">Next.js</div>
                  </div>
                  <div className="tech-icon">
                    <img src={flutterLogo} alt="Flutter Logo" />
                    <div className="text-align-center">Flutter</div>
                  </div>
                  <div className="tech-icon">
                    <img src={dartLogo} alt="Dart Logo" />
                    <div className="text-align-center">Dart</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-top-5" id="techstack2">
              <div className="font-size-20">BACK-END TECH</div>
              <div className="flex column space-evenly-column center-row vw-70 height-90">
                <div className="flex center-row space-evenly-column width-100">
                  <div className="tech-icon">
                    <img src={csharpLogo} alt="C# Logo" />
                    <div className="text-align-center">C#</div>
                  </div>
                  <div className="tech-icon">
                    <img src={dotNetCore} alt=".NET Core Logo" />
                    <div className="text-align-center">.NET Core</div>
                  </div>
                  <div className="tech-icon">
                    <img src={javascriptLogo} alt="Javascript Logo" />
                    <div className="text-align-center">Javascript</div>
                  </div>
                  <div className="tech-icon">
                    <img src={nodeJsLogo} alt="NodedJS Logo" />
                    <div className="text-align-center">NodeJS</div>
                  </div>
                  <div className="tech-icon">
                    <img src={mongoDBLogo} alt="MongoDB Logo" />
                    <div className="text-align-center">MongoDB</div>
                  </div>
                </div>
                <div className="flex center-row space-evenly-column width-100">
                  <div className="tech-icon">
                    <img src={cppLogo} alt="C++ Logo" />
                    <div className="text-align-center">C++</div>
                  </div>
                  <div className="tech-icon">
                    <img src={arduinoLogo} alt="Arduino Logo" />
                    <div className="text-align-center">Arduino</div>
                  </div>
                  <div className="tech-icon">
                    <img src={postgresqlLogo} alt="PostgeSQL Logo" />
                    <div className="text-align-center">PostgreSQL</div>
                  </div>
                  <div className="tech-icon">
                    <img src={nextJsLogo} alt="NextJS Logo" />
                    <div className="text-align-center">Next.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavBar
            className="flex font-green center-row center-column"
            divisions="2"
            section="techstack"
          />
        </div>
      </div>
      <div className="scroll-margin-2"></div>
      <div
        id="contact"
        className="flex center-column font-white font-size-24 bottom-page-padding"
      >
        <div className="flex row-column center-row font-size-20 vw-70 overflow-x-hidden padding-top-10 padding-bottom-10 space-around-column">
          <div className="font-size-24 text-align-justify contact-vw-53">
            <p>
              I enjoy anything related to{" "}
              <span className="font-pink">Development</span> and I’m always on
              the lookout for{" "}
              <span className="font-pink">
                New and Interesting Opportunities
              </span>
              . From building out <span className="font-pink">IOT systems</span>
              , custom-made <span className="font-pink">Automated Systems</span>
              , making <span className="font-pink">Web Applications</span>, and
              designing <span className="font-pink">Websites</span>, I’m always
              up for new <span className="font-pink">Projects</span> to work and
              collaborate on.
            </p>
            <p className="margin-top-46">
              If you have any{" "}
              <span className="font-pink">Interesting Opportunities</span> you’d
              love for me to take a part in or even just{" "}
              <span className="font-pink">Chat</span>,{" "}
              <span className="font-pink">Contact</span> me on any of these{" "}
              <span className="font-pink">Platforms</span>.
            </p>
          </div>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
}

export { V1Main };
