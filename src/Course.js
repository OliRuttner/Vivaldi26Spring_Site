import { Link } from 'react-router-dom';
const Course = () => {

    const course = {
        title: "Nailing it! - Woodworking in the Alps",
        description: "Ever admired a hand-carved table or chair and wondered, how was that made? Now’s your chance to learn! This winter, BEST Graz is hosting a hands-on woodworking course for beginners and DIY lovers.\nGrab your winter jacket and your hammer, and head to Graz at the foot of the Alps.",
        location: "Graz, Austria",
        dates: "6 February - 14 February 2026",
        image: `site/src/graz.jpg`
    };

    return ( <div className="course">
        <div className="course-info">
            <div className="text">
            <h2>{course.title}</h2>
            <p>Location: {course.location} <br /> Dates: {course.dates} </p>
                        <Link
                            className='button'
                            to={{pathname: `/courses/nailing-it-woodworking-in-the-alps`}}
                        >
                            Learn more!
                        </Link>
        </div>
        </div>
        <img className="graz" src={require('./graz.jpg')} alt="Graz" />
    </div> );
}
 
export default Course;