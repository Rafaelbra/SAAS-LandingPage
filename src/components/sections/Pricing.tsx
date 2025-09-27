import { pricingPlans } from "../../utils/pricing-plan"
import { Container } from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import { Title } from "../shared/Title"


export const Pricing = () => {
    return (
        <section id="pricing" className="py-5">
            <Container className="text-center">
                <Title> Pricing</Title>
                <Paragraph className="mt-4"> Choose the plan that's right for your business.</Paragraph>
            </Container>

            <div>
                {pricingPlans.map((plan, key) => (
                    <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                        <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 ">

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}