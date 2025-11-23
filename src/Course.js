import { Link } from 'react-router-dom';
import { useState } from 'react';

const Course = () => {
    // sample list of 8 courses (replace placeholders as needed)
    const courses = [
        { title: "Think Green, Build Smart: The Sustainable Industry Challenge", location: "Thessaloniki, Greece", dates: "8 March - 16 March 2026", image: require('./courses_pics/thessaloniki.jpg') },
        { title: "Infinity Energy: The Quest for Sustainable Mobility", location: "Turin, Italy", dates: "3 May - 10 May 2026", image: require('./courses_pics/turin.jpg') },
        { title: "Teaching WALL-E about where he comes from: AI", location: "Grenoble, France", dates: "4 April - 11 April 2026", image: require('./courses_pics/grenoble.jpg') },
        { title: "INSIDE AI: Where Data Becomes Smart", location: "Las Palmas de Gran Canaria, Spain", dates: "19 March - 26 March 2026", image: require('./courses_pics/lasPalmas.jpg') },
        { title: "Understanding Nanosciences", location: "Palaiseau, France", dates: "21 March - 28 March 2026", image: require('./courses_pics/palaiseau.jpg') },
        { title: "Hands-on Chip Design: Digital and Analog Fundamentals", location: "Kaunas, Lithuania", dates: "29 March - 5 April 2026", image: require('./courses_pics/kaunas.jpg') },
        { title: "Fast and Fourier-rous: Master the speed of sound", location: "Lyon, France", dates: "11 April - 19 April 2026", image: require('./courses_pics/lyon.jpg') },
        { title: "Age of Ultron: AI and Robotics for a Sustainable Future", location: "Athens, Greece", dates: "3 May - 11 May 2026", image: require('./courses_pics/athens.jpg') }
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % courses.length);
    const prev = () => setIndex((prev) => (prev - 1 + courses.length) % courses.length);
    const goTo = (i) => setIndex(i);

    const slugify = (s) =>
        s
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');

    const c = courses[index];

    return (
        <div className="course">
            <div className="course-info">
                <div className="text">
                    <h2>{c.title}</h2>
                    <p>
                        Location: {c.location}
                        <br /> Dates: {c.dates}
                    </p>
                    <Link className="button" to={{ pathname: `/courses/${slugify(c.title)}` }}>
                        Learn more!
                    </Link>

                    <div className="course-controls" style={{ marginTop: 14 }}>
                        <button className="prev" onClick={prev} aria-label="Previous course">
                            ❮
                        </button>
                        <button className="next" onClick={next} aria-label="Next course">
                            ❯
                        </button>
                    </div>

                    <div className="course-dots" style={{ marginTop: 8 }}>
                        {courses.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === index ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to course ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <img className="picture" src={c.image} alt={c.title} />
        </div>
    );
};

export default Course;