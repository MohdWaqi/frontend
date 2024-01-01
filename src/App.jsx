import React, { useRef } from "react";
import Navbar from "./Components/navbar";
import FirstCarousel from "./Components/FirstCarousel";
import ExamDetails from "./Components/ExamDetails";
import SecondCarousel from "./Components/SecondCarousel";
import SingleTestimonial from "./Components/SingleTestimonial";
import expand from "./assets/expand.svg"
import collapse from "./assets/collapse.svg"
import triangle from "./assets/polygon.svg"
import mobile from "./assets/mobile.svg"
import facebook from "./assets/facebook.svg"
import linkedin from "./assets/linkedin.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"
import youtube from "./assets/youtube.svg"
import quora from "./assets/quora.svg"
import location from "./assets/location.svg"
import watch from "./assets/watch.svg"
import travel from "./assets/travel.svg"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

const App = () => {
  const closeBtn = useRef(null)
  return (
    <div id="app">
      <Navbar />
      <div className="vertical">
        <FirstCarousel />
      </div>
      <section>
        <div className="exam">
          <div>
            <h1>Upcoming Examinations</h1>
            <p>Enquire about the examination & register for the exams</p>
          </div>
          <ExamDetails date="02th October 2023" exams={["Level 1 exam"]} />
          <ExamDetails
            date="Nov-Dec 2023"
            exams={["Level 2 exam", "Lorem Ipsum", "Lorem Ipsum"]}
          />
          <ExamDetails date="Ongoing this year" exams={["Level 3 (Grad)"]} />
        </div>
        <div className="second">
          <SecondCarousel />
        </div>
      </section>
      
      <section className="testimonials">
        <SingleTestimonial
          total={123}
          matter="Fusce ut placerat massa, egestas condimentum velit. Donec rutrum
            lectus mollis condimentum dapibus. Sed erat lacus, sodales vel
            placerat vitae, euismod quis elit"
        />
        <SingleTestimonial
          total={12}
          matter="Etiam hendrerit non dolor laoreet aliquet. Duis eu urna urna. Proin vestibulum aliquam lorem sit amet aliquet. Morbi placerat sem eu elit sagittis laoreet. Aenean ultricies dictum placerat"
        />
        <SingleTestimonial
          total={12}
          matter="Etiam hendrerit non dolor laoreet aliquet. Duis eu urna urna. Proin vestibulum aliquam lorem sit amet aliquet. Morbi placerat sem eu elit sagittis laoreet. Aenean ultricies dictum placerat"
        />
        <SingleTestimonial
          total={123}
          matter="Fusce ut placerat massa, egestas condimentum velit. Donec rutrum
            lectus mollis condimentum dapibus. Sed erat lacus, sodales vel
            placerat vitae, euismod quis elit"
        />
      </section>
      <section id="faq">
        <h1>FAQ</h1>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading className="questions">
                        How does an investor gain access to MF Utility?
                    <AccordionItemButton>
                    <AccordionItemState>
                    {({ expanded }) =>(expanded ?<img src={collapse} alt="collapse" />:<img src={expand} alt="expand"/> )}
                    </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, massa sit amet ullamcorper mollis, lacus nunc porta urna, eu efficitur est mi sit amet metus. Nulla ac enim iaculis, commodo neque sit amet, vestibulum odio. Donec vitae neque rutrum, mollis risus non, euismod odio.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading className="questions">
                        Will Investors be able to have multiple Common  Account Numbers?
                    <AccordionItemButton>
                    <AccordionItemState>
                    {({ expanded }) =>(expanded ?<img src={collapse} alt="collapse" />:<img src={expand} alt="expand"/> )}
                    </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="answer">
                    Fusce ut placerat massa, egestas condimentum velit. Donec rutrum lectus mollis condimentum dapibus. Sed erat lacus, sodales vel placerat vitae, euismod quis elit.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading className="questions">
                        How does an investor gain access to MF Utility?
                    <AccordionItemButton>
                    <AccordionItemState>
                    {({ expanded }) =>(expanded ?<img src={collapse} alt="collapse" />:<img src={expand} alt="expand"/> )}
                    </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="answer">
                    Aliquam ultricies ultrices aliquam. Sed at massa a leo pretium viverra non non ipsum. Ae
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      </section>
      <section id="subscribe">
        <div>
          <h1>Subscribe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, massa sit amet ullamcorper mollis, lacu</p>
          <div>
            
          <input placeholder="Enter your Email Address"/>
          <button className="btn">Subscribe Now <img src={triangle} /></button>
          </div>
        </div>
        <img src={mobile}/>
      </section>
      <footer>
      <div>
        <h3>Contact us</h3>
        <p>Address: amet, consetetur sadipscing elitr, sed diam</p> 
        <p>Email id: eirmod tempor invidunt ut labore et dolore</p> 
        <p>Phone no: 123456789</p>
      </div>
      <div>
        <h3>Follow us</h3>
        <div>
        <img src={facebook} alt="facebook"/>
        <img src={linkedin} alt="linkedin"/>
        <img src={instagram} alt="instagram"/>
        <img src={twitter} alt="twitter"/>
        <img src={youtube} alt="youtube"/>
        <img src={quora} alt="quora"/>
        </div>
      </div>
      <div>
        <h3>Head Office</h3>
        <div><img src={location} alt="location"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p></div>
        <div><img src={watch} alt="time"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
        <div><img src={watch} alt="time"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
        <div><img src={travel} alt="travel"/><p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p></div>
      </div>
      </footer>
      <div className="copyright">© 2024 All Rights Reserved. Privacy Policy by Mohd Waqi Pervez</div>
    </div>
  );
};

export default App;
