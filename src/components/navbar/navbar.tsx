import Logo from "../../../public/logo.png";

export const Navbar = () => {
  return (
    <div className="text-2xl h-20">
      <img className="w-14 h-14 m-4" src={Logo} alt="" />
    </div>
  );
};

export default Navbar;
