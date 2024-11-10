
import Hero from "../app/component/hero";
import About from "../app/component/about"
import Skill from "../app/component/skill";
import Project from "../app/component/project";
import Contact from '../app/component/contact';
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}
