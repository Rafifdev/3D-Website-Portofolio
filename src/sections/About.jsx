import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Framework } from "../components/Framework";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="coding-pov"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Yoapipp</p>
            <p className="subtext ">
              I am a student at amikom university yogyakarta, I am developing my
              frontend and ui/ux skills through various projects and courses to
              build dynamic and responsive web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-none: -bottom-0 h-1/2 sm:h1/3 bg-gradient-to-t from-indigo"></div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            className="flex items-center justify-center size-full"
            ref={grid2Container}
          >
            <p className="text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card
              text={"Design Pattern"}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text={"Design Priciples"}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text={"MODERN"}
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text={"SOLID"}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text={"AESTHETIC"}
              style={{ rotate: "20deg", top: "10%", left: "40%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/tailwindcss.svg"}
              style={{ rotate: "30deg", top: "75%", left: "69.5%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/vitejs.svg"}
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/react.svg"}
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext"> Time Zone</p>
            <p className="subtext">
              I'm based in Yogyakarta, and open to collaboration
            </p>
          </div>
          <figure className="absolute left-[40%] -top-5">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I am proficient and continuously learning various programming
              languages, frameworks, and tools that enable me to build robust
              and scalable web applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 size-full start-[50%] md:scale-125">
            <Framework />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
