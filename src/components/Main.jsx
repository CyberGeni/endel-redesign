import Button from "./Button";
import starmask from "../assets/star-mask.png";
import heromysticball from "../assets/mystic-ball-hero.png";
import Spark from "./Spark";
import brain from "../assets/brain.svg"
function Main() {
	return (
		<>
			<div className="relative z-0 text-center">
				{/* hero */}
				<section className="relative max-w-5xl mx-auto text-center sm:min-h-screen flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
					<img
						src={starmask}
						className="-z-10 absolute top-0 right-0 w-full h-full"
						alt=""
					/>
					<h1 className="pt-40 sm:pt-0 md:pt-0 bg-gradient-to-b from-[#CCD9E2] to-[#7E8D98] py-1 px-4 md:px-6 bg-clip-text text-5xl md:text-6xl lg:text-7xl text-transparent font-medium tracking-tighter">
						Personalised soundscapes to help you focus, sleep and relax
					</h1>
					<p className="tracking-tight text-[#7E8D98] w-3/4 md:w-[unset] max-w-2xl mx-auto px-4 text-lg md:text-xl lg:text-2xl">
						Immerse yourself in relaxation and self-discovery by listening to
						sounds backed by science, curated for you.
					</p>
					<Button label="Try Endel" />
					<img
						src={heromysticball}
						className="transition-all absolute -bottom-36 sm:bottom-7 md:-bottom-40 -z-50 rounded-full left-0 right-0 w-[250px] sm:w-[400px] md:w-[600px] mx-auto shadow-2xl"
						alt=""
					/>
				</section>
				{/* personalized through neuroscience */}
				<section className="mt-72">
					<div className="space-y-4">
						<h1 className="pt-40 sm:pt-0 md:pt-0 bg-gradient-to-b from-[#CCD9E2] to-[#7E8D98] py-1 px-4 md:px-6 bg-clip-text text-5xl md:text-[52px] xl:text-6xl text-transparent font-medium tracking-tighter">Personalized through <br /> neuroscience</h1>
						<p className="tracking-tighter text-[#7E8D98] max-w-4xl mx-auto px-4 text-lg lg:text-xl">
							Our patented technology creates soundcapes that adapt in real time.
							It reacts to inputs like time of day, weather, heart rate, and
							location. Neuroscience shows Endel consistently improves focus and
							lowers stress.
						</p>
					</div>
					<div className="flex items-center justify-center -space-x-20 sm:-space-x-28 lg:-space-x-44 w-full mx-auto">
						<div className="w-full z-[1]">
							<Spark />
						</div>
						<div className="w-fit">
							<img className="z-[-1] rounded-full object-cover w-[800px]" src={brain} alt="" />
						</div>
						<div  className="scale-x-[-1] w-full">
							<Spark />
						</div>
						
					</div>
				</section>
                {/* designed for various moods */}
                <section>
                    <h1>Designed for various moods</h1>
                    <p>Endel is designed to enhance your natural capabilities, create a private environment to reduce stress, and help you be more present and involved without even having to meditate</p>
                </section>
                {/* customized sounds for different times of the day */}
                <section>
                    <img src="" alt="" />
                    <h1 className="pt-40 sm:pt-0 md:pt-0 bg-gradient-to-b from-[#CCD9E2] to-[#7E8D98] py-1 px-4 md:px-6 bg-clip-text text-5xl md:text-7xl text-transparent font-medium tracking-tighter">
						Customized sounds for different times of the day
					</h1>
					<p className="text-[#7E8D98] w-3/4 md:w-[unset] max-w-2xl mx-auto px-4 text-lg md:text-2xl">
						Our patented technology creates soundscapes that adapt in real time.It reacts to inputs like time of day, weather, heart rate, and location and plays sound accordingly.
					</p>
                </section>
			</div>
		</>
	);
}

export default Main;
