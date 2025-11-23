import Apply from './Apply';
import { useParams } from 'react-router-dom';
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const courses = [
    { title:"Think Green, Build Smart: The Sustainable Industry Challenge",
        desc: [
        "Stay up to date with the latest trends in industrial innovation and sustainability",
        "Learn about creating sustainable and future-proof industries",
        "Explore the characteristics of the industries of tomorrow",
        "An exciting academic curriculum blended with Greek culture",
        "Focus on energy efficiency and circular economy practices",
        "Use of sustainable materials to minimize waste",
        "Aim: acquire general knowledge about the infrastructure and core principles of sustainable industries"
        ],
        location:"Thessaloniki, Greece",
        date:"8 March - 16 March 2026 ",
        organiser:"BEST Group Thessaloniki",
        university:"Aristotle University of Thessaloniki",
        price:"90.0€",
        image: require('./courses_pics/thessaloniki.jpg'),
        slug: slugify("Think Green, Build Smart: The Sustainable Industry Challenge"),
        applyLink: "https://www.best.eu.org/event/details.jsp?activity=q0ovs82",
        learnMoreLink: "https://best.web.auth.gr/spc26/"
    },
    { title:"Infinity Energy: The Quest for Sustainable Mobility",
        desc:["Evolving world of clean energy and transportation",
                "Explore the intersection between sustainable energy and mobility",
                "Analyzing how innovation in energy production, storage, and distribution can drive the transition toward cleaner and smarter transportation",
                "Lectures led by academic experts from Politecnico di Torino",
                "How technology, policy, and environmental awareness shape the future of sustainable mobility",
                "How innovation and responsible resource management contribute to building a more efficient, connected, and environmentally friendly transportation ecosystem"],
        location:"Turin, Italy",
        date:"3 May - 10 May 2026",
        organiser:"BEST Group Turin",
        university:"Polytechnic of Turin",
        price:"No fee will be asked for this activity. ",
        image: require('./courses_pics/turin.jpg'),
        slug: slugify("Infinity Energy: The Quest for Sustainable Mobility  "),
        applyLink: "https://www.best.eu.org/event/details.jsp?activity=i4afz2s",
        learnMoreLink: "https://www.bestorino.com/spc"
    },
        { title:"Teaching WALL-E about where he comes from: AI",
        desc:["learn about the applications of AI",
                "Computer Science/Automatic Control/Informatics",
                "some activities related to ecology/sustainable development",
                "teach participants about the basics of AI and the possibilities that come with it"],
        location:"Grenoble, France",
        date:"4 April - 11 April 2026 ",
        organiser:"BEST Group Grenoble",
        university:"Grenoble Institute of Technology",
        price:"70.0€",
        image: require('./courses_pics/grenoble.jpg'),
        slug: slugify("Teaching WALL-E about where he comes from: AI"),
        applyLink: "https://www.best.eu.org/event/details.jsp?activity=o1nrq92",
        learnMoreLink: "https://lbgbestgrenoble.wixsite.com/bestgrenoble/course"
    },
    { title:"INSIDE AI: Where Data Becomes Smart",
        desc:["exciting journey into the world of Data and Artificial Intelligence",
            "learn how data is collected, cleaned, and transformed to power intelligent systems",
            "beginner-friendly, all tools and code will be provided",
            "how raw data becomes smart insight, and how AI can shape our tomorrow",
            "essential techniques for data preprocessing, and visualization",
            "a comprehensive introduction to the data pipeline and its crucial role in Artificial Intelligence"],
        location:"Las Palmas de Gran Canaria, Spain",
        date:"19 March - 26 March 2026",
        organiser:"BEST Group Las Palmas",
        university:"Las Palmas of Gran Canaria University",
        price:"80.0€",
        image: require('./courses_pics/lasPalmas.jpg'),
        slug: slugify("INSIDE AI: Where Data Becomes Smart"),
        applyLink: "https://www.best.eu.org/event/details.jsp?activity=i4kfkbh",
        learnMoreLink: "https://www.bestlaspalmas.org/courses/3"
    },
        { title:"Understanding Nanosciences",
        desc:["gain good groundings in the various disciplines of nanoscience",
        "from chemistry and physics to biotechnology and medicine",
        "academical sessions will be delivered by researchers and experts from the prestigious University Paris - Saclay",
        "Applied Sciences , Biomedical Engineering , Chemical Engineering , Materials Engineering , Physics/Physics Engineering"],
        location:"Palaiseau, France",
        date:"21 March - 28 March 2026 ",
        organiser:"BEST Group ENSTA Paris",
        university:"ENSTA Paris",
        price:"80.0€",
        image: require('./courses_pics/palaiseau.jpg'),
        slug: slugify("Understanding Nanosciences"),
        applyLink: "https://www.best.eu.org/event/details.jsp?activity=o1nrq8w",
        learnMoreLink: "https://www.best.eu.org/event/details.jsp?activity=o1nrq8w"
    },
        { title:"Hands-on Chip Design: Digital and Analog Fundamentals",
    desc:["how engineers bring electronic systems to life",
        "steps of chip design – from understanding digital logic and hardware description to discovering how analog circuits process real-world signals",
        "Lithuanian culture, delicious national cuisine",
        "how modern electronic systems are developed from concept to implementation",
        "basics of microelectronics, digital logic design using hardware description principles, and the fundamental behavior of analog circuits",
        "how diverse electronic components interact within integrated systems",
        "make complex engineering processes approachable and clear"],
    location:"Kaunas, Lithuania",
    date:"29 March - 5 April 2026",
    organiser:"BEST Group Kaunas",
    university:"Kaunas University of Technology",
    price:"80.0€",
    image: require('./courses_pics/kaunas.jpg'),
    slug: slugify("Hands-on Chip Design: Digital and Analog Fundamentals"),
    applyLink: "https://www.best.eu.org/event/details.jsp?activity=o1nrq8z",
    learnMoreLink: "https://bestkaunas.org/en/courses/hands-on-chip-design-digital-and-analog-fundamentals/"
},
        { title:"Fast and Fourier-rous: Master the speed of sound",
    desc:["real-time audio signal processing and embedded system programming",
        "designing digital audio systems, crafting effects and synthesis algorithms",
        "bring your own creative sound devices to life",
        "how to develop real-time audio applications on embedded systems, understand digital signal processing principles, and design creative sound tools",
        "practical experience in C++ and embedded programming"],
    location:"Lyon, France",
    date:"11 April - 19 April 2026",
    organiser:"BEST Group Lyon",
    university:"INSA Lyon",
    price:"90.0€",
    image: require('./courses_pics/lyon.jpg'),
    slug: slugify("Fast and Fourier-rous: Master the speed of sound"),
    applyLink: "https://www.best.eu.org/event/details.jsp?activity=i4afz2v",
    learnMoreLink: "https://bestinsalyon.github.io/"
},
        { title:"Age of Ultron: AI and Robotics for a Sustainable Future",
    desc:["dive into the world of AI and Robotics for a Sustainable Future: Engineering Beyond Limits",
        "the principles behind intelligent systems, autonomous technologies, and human-robot collaboration",
        "renewable energy, smart cities, and green manufacturing",
        "understand the ethical, social, and environmental impacts of AI and robotics"],
    location:"Athens, Greece",
    date:"3 May - 11 May 2026 ",
    organiser:"BEST Group Athens",
    university:"National Technical University of Athens",
    price:"72.0€",
    image: require('./courses_pics/athens.jpg'),
    slug: slugify("Age of Ultron: AI and Robotics for a Sustainable Future"),
    applyLink: "https://www.best.eu.org/event/details.jsp?activity=m2mno9t",
    learnMoreLink: "http://best.ntua.gr/SpC26/"
}
];
const CourseDetails = () => {

const { slug } = useParams();

  const course = courses.find(c => c.slug === slug);

  if (!course) return <h2>Course not found</h2>;

    return ( 
        <div className="course-details">
            <div className="course-details-stuff">
                <div className="course-details-text">
                    <h2>{course.title}</h2>
                        <ul>
                            {course.desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    <p><br />
                        Place: {course.location} <br />
                        Dates: {course.date} <br />
                        Organiser: {course.organiser} <br />
                        University: {course.university} <br />
                        Price: {course.price}
                    </p>
                </div>
                <div>
                    <img className="picture" src={course.image} alt={course.title} />
                </div>
            </div>
            <div>
                <Apply 
                        applyLink={course.applyLink} 
                        learnMoreLink={course.learnMoreLink} 
                />
            </div>
        </div>
    );
}

export default CourseDetails;