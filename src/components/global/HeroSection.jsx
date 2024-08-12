import { Button } from "../ui/button"
import { Typewriter } from 'react-simple-typewriter'
export const HeroSection = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-8 md:py-6 lg:py-2">

                <div className="container px-4 md:px-6">

                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-[#ff3e00] text-5xl truncate font-bold tracking-tigher py-2">
                                <Typewriter
        words={['Hey👋 , I am Suraj Kumar Jha' , "Fullstack Software Engineer" , "Coding Instructor" , "Content Creator"]}
        loop={false}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Im a passionate full-stack developer with expertise in building modern, scalable, and user-friendly
                                    web applications.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2  min-[400px]:flex-row">

                                <Button variant={"outline"} size={"default"}>
                                    View Projects
                                </Button>

                                <Button variant={"default"} size={"default"}>
                                    Contact Me
                                </Button>
                            </div>

                        </div>

                        <img
                            src="https://keelanjon.com/static/illustration-keelanjon-68a9ba2959b48c1bef6a8a8246779e2b.png"
                            width="350"
                            height="350"
                            alt="Hero"
                            className="mx-auto aspect-auto overflow-hidden object-cover sm:w-full "
                        />
                    </div>
                </div>




            </section>
        </main>
    )
}