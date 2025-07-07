import { Layout } from '@/components/layout'
import { Typography } from '@/components/typography'

const InvestingPage = () => {
    return (
        <Layout>
            <section className="flex flex-col space-y-8 py-12">
                <Typography variant="h1" underline>
                    💰 Angel Investing
                </Typography>
                
                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Investment Thesis</Typography>
                    <p className="text-lg text-muted-foreground">
                        I invest in early-stage startups where technical founders are building innovative solutions in infrastructure, 
                        AI tooling, developer productivity, and fintech. Having scaled systems that serve millions of users, 
                        I focus on companies tackling complex technical challenges with strong engineering leadership.
                    </p>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Investment Focus Areas</Typography>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">🏗️ Infrastructure & DevTools</Typography>
                            <p className="text-muted-foreground">
                                Developer productivity tools, infrastructure platforms, observability, and systems that help 
                                engineering teams build and deploy software faster.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">🤖 AI & ML Tooling</Typography>
                            <p className="text-muted-foreground">
                                AI infrastructure, model deployment platforms, and tools that democratize access to 
                                advanced AI capabilities for small teams and developers.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">💳 Fintech & SaaS</Typography>
                            <p className="text-muted-foreground">
                                B2B SaaS platforms, payment infrastructure, banking technology, and financial services 
                                that improve business operations and compliance.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Typography variant="h3">📱 Consumer Platforms</Typography>
                            <p className="text-muted-foreground">
                                Consumer applications with strong network effects, productivity tools, and platforms 
                                that help people organize, connect, and create.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Portfolio Companies</Typography>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="border-l-4 border-primary pl-4">
                            <Typography variant="h3">Monday Chill</Typography>
                            <p className="text-muted-foreground">
                                Consumer wellness platform focused on mental health and mindfulness.
                            </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                            <Typography variant="h3">Spice Capital II</Typography>
                            <p className="text-muted-foreground">
                                Venture fund backing early-stage startups in technology and innovation.
                            </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                            <Typography variant="h3">Fizz</Typography>
                            <p className="text-muted-foreground">
                                Social platform connecting college students through authentic campus communities.
                            </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                            <Typography variant="h3">Teamblind</Typography>
                            <p className="text-muted-foreground">
                                Anonymous professional network for workplace discussions and career insights.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Brown Girl Angels</Typography>
                    <p className="text-lg text-muted-foreground">
                        I lead the San Francisco chapter of Brown Girl Angels, a community of women angel investors 
                        supporting diverse founders. Through this role, I help connect underrepresented entrepreneurs 
                        with capital, mentorship, and strategic guidance while building a more inclusive investment ecosystem.
                    </p>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">What I Bring to Founders</Typography>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="icon-[tabler--code] size-6 text-primary mt-1" />
                            <div>
                                <Typography variant="h3">Technical Expertise</Typography>
                                <p className="text-muted-foreground">
                                    Deep engineering experience across distributed systems, infrastructure, and scalable platforms.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="icon-[tabler--users] size-6 text-primary mt-1" />
                            <div>
                                <Typography variant="h3">Team Building</Typography>
                                <p className="text-muted-foreground">
                                    Guidance on hiring, scaling engineering teams, and creating high-trust, inclusive cultures.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="icon-[tabler--network] size-6 text-primary mt-1" />
                            <div>
                                <Typography variant="h3">Network Access</Typography>
                                <p className="text-muted-foreground">
                                    Connections to technical talent, other investors, and potential customers across fintech and infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <Typography variant="h2">Get in Touch</Typography>
                    <p className="text-lg text-muted-foreground">
                        I'm always interested in meeting technical founders who are building the future of infrastructure, 
                        AI, and developer tools. If you're raising a pre-seed or seed round and think we might be a good fit, 
                        I'd love to hear about what you're building.
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

export default InvestingPage