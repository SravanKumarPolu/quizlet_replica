

const Footer = () => {
  return (
    <footer className="bg-base-300 px-6 py-10 text-center text-sm text-base-content/70">
      <div className="space-y-2">
        <p>About &nbsp;|&nbsp; Careers &nbsp;|&nbsp; Help Center &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Terms</p>
        <p>© {new Date().getFullYear()} Quizlet Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;