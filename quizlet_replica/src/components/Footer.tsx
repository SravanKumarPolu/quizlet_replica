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

const Footer = () => {
  return (
    <footer >
    <div className="bg-[#f6f7fb] pt-10 pb-6 border-t border-gray-200">
      {/* Country Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="font-semibold text-gray-800 mb-4 text-left">Country</h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-700 mb-8">
          {countries.map((country, index) => (
            <span key={index} className="hover:underline cursor-pointer">
              {country}
            </span>
          ))}
        </div>

        {/* Social & Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600 text-lg">
            <FaTiktok />
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© 2025 Quizlet, Inc.</p>

          {/* Badge */}
          <img
            src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=70,onerror=redirect,w=140/https://quizlet.com/_next/static/media/coppa-seal.0efe00c1.png"
            alt="COPPA Certified"
            className="h-12"
          />
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;