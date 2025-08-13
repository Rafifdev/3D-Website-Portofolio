import { Timeline } from "../components/TimeLine";
import { experiences } from "../constans";

const Experiences = () => {
  return <section className="w-full" id="experience">
    <Timeline data={experiences} />
    </section>;
};

export default Experiences;
