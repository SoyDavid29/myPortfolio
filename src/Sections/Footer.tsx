const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white py-4 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} David Rodríguez. All rights reserved.</p>
    </footer>
  );
};
export default Footer;