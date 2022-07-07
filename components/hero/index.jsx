import Button from "../button"

const Hero = () => (
    <div className="w-auto mx-6 h-auto flex flex-col justify-center text-white lg:mx-[80px] my-auto">
        <div className="flex flex-col gap-6 min-h-[37.5rem] mt-[75px] lg:mt-[100px] w-full align-middle lg:flex-row-reverse lg:align-middle lg:min-h-0 lg:h-auto lg:max-w-5xl lg:mx-auto lg:justify-between">
            <div className="contents">
                <p className="text-3xl lg:text-4xl font-bold text-center lg:text-left lg:hidden max-w-[37rem] mx-auto">
                    What if your college club was on Raptures?
                </p>
                <div className="mx-auto w-72 h-72 lg:h-96 lg:w-96 relative lg:mx-0">
                    <img
                        src="hero1.png"
                        className="h-44 absolute top-5 left-10 lg:h-60 lg:left-18 lg:top-0"
                    />
                    <img
                        src="hero2.png"
                        className="h-44 absolute -left-2 bottom-0 lg:h-60 lg:bottom-4 lg:right-0"
                    />
                    <img
                        src="hero3.png"
                        className="h-44 absolute bottom-0 -right-2 lg:h-60 lg:bottom-4"
                    />
                </div>
            </div>
            <div className="contents lg:flex lg:flex-col lg:gap-6 lg:width-[700px]">
            <p className="text-3xl lg:text-4xl font-bold text-center lg:text-left hidden lg:block max-w-[32rem]">
                    What if your college club was on Raptures?
                </p>
                <p className="max-w-[24rem] text-center mx-auto lg:text-lg text-base lg:text-left lg:max-w-[28rem] lg:mx-0 opacity-75 leading-5 lg:leading-[24px]">
                    You can build your team quickly and organize your tasks into
                    projects on Raptures.
                    <br className="mb-4" /> Once you complete them, they’ll stay
                    as NFTs to prove your work.
                    <br className="mb-4" /> What more would you need, other than
                    a befitting afterparty? XD
                </p>
                <div className="w-auto mx-auto lg:mx-0 lg:w-auto ">
                    <div className="w-full flex justify-start gap-4 lg:gap-4">
                        <Button label="I wanna join the Waitlist!" link="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Hero
