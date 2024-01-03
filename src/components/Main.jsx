import Button from "./Button";
import starmask from "../assets/star-mask.png"
import heromysticball from "../assets/mystic-ball-hero.png";
function Main() {
	return (
		<>
			<div className="relative z-0">
                {/* hero */}
                <section className="relative max-w-5xl mx-auto text-center min-h-screen flex flex-col justify-center space-y-8">
                    <img src={starmask} className="-z-10 absolute top-0 right-0 w-full h-full" alt="" />
                    <h1 className="bg-gradient-to-b from-[#CCD9E2] to-[#7E8D98] p-1 bg-clip-text text-7xl text-transparent font-medium tracking-tighter">Personalised soundscapes to help you focus, sleep and relax</h1>
                    <p className="text-[#7E8D98] max-w-2xl mx-auto text-2xl">Immerse yourself in relaxation and self-discovery by listening to sounds backed by science, curated for you.</p>
                    <Button label="Try Endel" />
                    <img src={heromysticball} className="absolute -bottom-40 -z-50 rounded-full left-0 right-0 w-[600px] mx-auto shadow-2xl" alt="" />
                </section>
            </div>
		</>
	);
}

export default Main;
