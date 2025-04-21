import {
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "New Zealand", "Germany",
  "France", "Spain", "Italy", "Japan", "South Korea", "India", "China", "Mexico",
  "Sweden", "Netherlands", "Switzerland", "Brazil", "Poland", "Turkey", "Ukraine",
  "Taiwan", "Vietnam", "Indonesia", "Philippines", "Russia"
];

const socialLinks = [
  { icon: <FaTiktok />, label: "TikTok", url: "#" },
  { icon: <FaXTwitter />, label: "Twitter", url: "#" },
  { icon: <FaFacebookF />, label: "Facebook", url: "#" },
  { icon: <FaInstagram />, label: "Instagram", url: "#" },
  { icon: <FaYoutube />, label: "YouTube", url: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", url: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#f6f7fb] pt-10 pb-6 border-t border-gray-200">
        {/* Country Grid */}
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-semibold text-gray-800 mb-4 text-left">Country</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 text-sm text-gray-700 mb-8">
            {countries.map((country, index) => (
              <span key={index} className="hover:underline cursor-pointer font-semibold">
                {country}
              </span>
            ))}
          </div>

          {/* Social Icons + Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 text-gray-600 text-lg justify-center sm:justify-start">
              {socialLinks.map(({ icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center sm:text-left">
              © 2025 Quizlet, Inc.
            </p>

            {/* COPPA Badge */}
            <img
              src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=70,onerror=redirect,w=140/https://quizlet.com/_next/static/media/coppa-seal.0efe00c1.png"
              alt="Quizlet COPPA Certification badge"
              className="h-12"
              loading="lazy"
            />
          </div>

          {/* Optional Back to Top Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-blue-700 font-bold cursor-pointer hover:underline"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
