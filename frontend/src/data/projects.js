import bugImage from '../images/bug.jpg';
import EcoSphere from '../images/Eco-Sphere.png';
import InterviewPrep from '../images/interviewprep.png';

import VizWeather from '../images/winter-weather.png';

export const projects = [
  {
    id: 1,
    name: "EcoSphere",
    slug: "marrakech-morocco",
    description: "a smart platform for climate and land protection powered by AI and live environmental data",
    image: EcoSphere,
    featured: true
  },
  {
    id: 2,
    name: "InterviewPrep",
    slug: "kyoto-japan",
    description: "refine your interview skills with AI-generated questions and personalized feedback.",
    image: InterviewPrep,
    featured: true
  },
  {
    id: 3,
    name: "VizWeather",
    slug: "havana-cuba",
    description: "visualize live weather data with Python-generated charts and dynamic, temperature-responsive UI.",
    image: VizWeather,
    featured: true
  },
  {
    id: 4,
    name: "BugSmasher",
    slug: "cusco-peru",
    description: "catch bugs, rack up points, and keep up as the speed increases.",
    image: bugImage,
    featured: true
  },
  {
    
    id: 5,
    name: "Jaipur, India",
    slug: "jaipur-india",
    description: "The Pink City of royal heritage and crafts.",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
    featured: false
  },
  {
    id: 6,
    name: "Istanbul, Turkey",
    slug: "istanbul-turkey",
    description: "Where East meets West in perfect harmony.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800",
    featured: false
  }
];
