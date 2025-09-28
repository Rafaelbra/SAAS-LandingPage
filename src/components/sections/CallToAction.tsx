import { Container } from "../shared/Container"
import Paragraph from "../shared/Paragraph"

export const CTA = () => {
    return (
        <section className="pb-20 relative">
            <Container>
                <div className="relative rounded-2xl overflow-hidden">
                    <div>
                        <h1>
                            Quick Start your <span> own AI</span> Business
                        </h1>
                        <Paragraph>
                            Leverage our AI-powered platform to revolutionize your digital
                            marketing efforts. Get data-driven insights and automation at your
                            fingertips.
                        </Paragraph>
                    </div>
                </div>
            </Container>
        </section>
    )
}