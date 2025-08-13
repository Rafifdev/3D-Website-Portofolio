import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience">
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#testimonial">
          Testimonial
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2 my-2 sm:py-0">
          <a
            href="/"
            className="text-2xl font-bold transition-colors hover:text-white text-neutral-400"
          >
            Yoapipp
          </a>

          <button
            onClick={() => SetIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex sm:">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 1}}
          style={{maxHeight: "100vh"}}
        >
          <nav className="pb-20">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};
