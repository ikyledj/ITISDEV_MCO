import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-8 py-12 relative mt-32">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <div>
          <div className="max-w-min">
            <h2 className="text-4xl font-primary tracking-[2px]">MARU’S</h2>
            <p className="text-sm leading-5 tracking-[4px] font-primary text-center">
              Beachfront
              <br />
              Rooms
            </p>
          </div>
          <div>
            <p className="mt-4 text-sm">
              497 Evergreen Rd. Roseville, Mamburao, Occidental Mindoro PH
            </p>
            <p className="text-sm">+63 123 456 7890</p>
            <Link href={"mailto:marus.flbr@gmail.com"} className="text-sm">
              marus.flbr@gmail.com
            </Link>
          </div>
        </div>
        <div className="space-y-2 text-sm grid">
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Terms & Conditions</Link>
        </div>
        <div className="space-y-2 text-sm">
          <Link href={"https://www.facebook.com/hotelResortinMamburao"} className="flex items-center gap-2">
            <FaFacebookF />
            <span>Facebook</span>
          </Link>
          <Link href={"https://www.facebook.com/hotelResortinMamburao"} className="flex items-center gap-2">
            <FaTwitter />
            <span>Twitter</span>
          </Link>
          <Link href={"https://www.facebook.com/hotelResortinMamburao"} className="flex items-center gap-2">
            <FaInstagram />
            <span>Instagram</span>
          </Link>
        </div>
        <div>
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <div className="flex border-2 border-accent rounded">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 text-white text-sm w-full outline-none"
            />
            <button className="bg-accent text-black px-4 text-sm font-bold">
              OK
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
