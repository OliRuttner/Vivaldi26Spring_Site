import Course from "./Course";
import Testimonials from "./Testimonials";
import QuizComp from "./quiz_comp";

const Home = () => {
    return ( <div className="home">
        <h1>Check out the courses you can attend in spring!</h1>
        <Course />
        <QuizComp />
        <Testimonials />
    </div> );
}
export default Home;