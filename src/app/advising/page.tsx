import { Layout } from '@/components/layout'
import { Typography } from '@/components/typography'

const AdvisingPage = () => {
    return (
        <Layout>
            <section className="flex flex-col space-y-8 py-12">
                <Typography variant="h1" underline>
                    🚀 Technical Advising
                </Typography>
                
                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">How I Help Startups</Typography>
                    <p className="text-lg text-muted-foreground">
                        I provide technical guidance to early-stage startups, helping founders navigate complex engineering decisions, 
                        build scalable systems, and create high-performing teams. My experience spans fintech, consumer platforms, 
                        and developer infrastructure across companies like Chime, Amazon, Microsoft, and Facebook.
                    </p>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Areas of Expertise</Typography>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">🏗️ Infrastructure & Scale</Typography>
                            <p className="text-muted-foreground">
                                Distributed systems design, messaging platforms, caching strategies, and resilience patterns 
                                for high-growth environments.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">👥 Team Building</Typography>
                            <p className="text-muted-foreground">
                                Engineering leadership, technical mentorship, hiring strategies, and creating inclusive, 
                                high-trust team cultures.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">💰 Fintech & Compliance</Typography>
                            <p className="text-muted-foreground">
                                Payment processing, banking systems, regulatory compliance, and security best practices 
                                for financial services.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">🔧 Developer Experience</Typography>
                            <p className="text-muted-foreground">
                                Language frameworks, tooling, CI/CD pipelines, and productivity systems that help 
                                engineering teams move faster.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Current Advisory Roles</Typography>
                    <div className="flex flex-col space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                            <Typography variant="h3">RipeMetrics</Typography>
                            <p className="text-muted-foreground">
                                Technical advisor for an early-stage SaaS platform focused on customer experience and retention. 
                                Helped architect their analytics infrastructure and scale their data processing capabilities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Let's Work Together</Typography>
                    <p className="text-lg text-muted-foreground">
                        I'm selective about the companies I advise, focusing on technical founders building innovative solutions 
                        in infrastructure, AI tooling, fintech, and developer productivity. If you're tackling complex technical 
                        challenges and could benefit from seasoned engineering leadership, I'd love to hear from you.
                    </p>
                    <div className="flex space-x-4">
                        <a 
                            href="https://www.linkedin.com/in/bhavya-kashyap/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                        >
                            <span className="icon-[tabler--brand-linkedin] size-5" />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AdvisingPage