import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-10 px-4 bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl">
        <a href="https://github.com/zyq-m/" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/haziq-musa-581a5b237"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
