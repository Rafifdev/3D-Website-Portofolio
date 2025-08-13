import { mySocials } from "../constans";

const Footer = () => {
  return (
    <section className="flex flex-wrap text-center justify-between gap-5 pb-5 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy</p>
      </div>
      <div className="flex gap-10">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
      <p>&copy; 2025 Yoapipp. All rihgts reserved.</p>
    </section>
  );
};

export default Footer;
