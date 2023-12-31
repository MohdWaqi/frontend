import React from "react";
import Navbar from "./Components/navbar";
import FirstCarousel from "./Components/FirstCarousel";
import ExamDetails from "./Components/ExamDetails";
import SecondCarousel from "./SecondCarousel";
import SingleTestimonial from "./Components/SingleTestimonial";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
