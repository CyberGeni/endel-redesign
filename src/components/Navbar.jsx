import logo from "../assets/logo.png";
import Button from "./Button";
function Navbar() {
	return (
		<>
			<div className="fixed z-10 top-0 w-full backdrop-blur bg-[#0E4456]/10">
				<nav className=" flex justify-between items-center py-4 w-[90%] mx-auto font-medium">
					<div className="flex items-center gap-2">
						<img src={logo} className="w-12" alt="" />
						<span className="text-white text-xl font-medium">Endel</span>
					</div>
					<div className="text-[#CCD9E2]/80 font-normal space-x-4 tracking-normal">
						<a href="">Sleep</a>
						<a href="">Focus</a>
						<a href="">Relax</a>
						<a href="">Technology</a>
						<a href="">About</a>
						<a href="">Offers</a>
					</div>
					<div className="flex items-center gap-10">
						<button className="text-white">Log in</button>
						<Button label="Try Endel" />
					</div>
				</nav>
				<div className="h-[1.5px] bg-gradient-to-r from-[#00121F00] from-10% via-[#A4D6E5]/50 to-[#114E6100] to-90%"></div>
			</div>
		</>
	);
}

export default Navbar;
