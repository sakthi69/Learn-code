import "./styles.css";
import Navbar from "./nav.jsx";
import Header from "./header";
import Features from "./features";
import Testimonial from "./testimonial";
import Footer from "./footer";
import Join from "./join";
import Course from "./course";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
      <Testimonial></Testimonial>
      <Course></Course>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}
