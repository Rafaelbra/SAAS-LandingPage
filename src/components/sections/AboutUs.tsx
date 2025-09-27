import { Container } from "../shared/Container"

export const AboutUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img
                            src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                            alt="About Our Mission"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}