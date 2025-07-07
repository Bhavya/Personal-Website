import { SkillsCarousel } from '@/components/skills-carousel'
import { Typography } from '@/components/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { biography, experience } from '@/data'

export const About = () => {
    return (
        <section className="flex flex-col space-y-8 py-4">
            <Typography variant="h1" underline>
                📝 About Me
            </Typography>

            {/* Summary Section */}
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Summary</Typography>
                <p className="text-md text-muted-foreground">
                    I&apos;m an Engineering Manager, technologist, and creator passionate about building resilient
                    systems, empowering teams, and driving meaningful impact through technology. With extensive
                    experience in infrastructure, protocols, and frameworks, I lead high-performing teams at Chime,
                    delivering scalable solutions that serve millions of users. I also founded{' '}
                    <a href="www.oatproductivity.com" className="text-primary">
                        Oat Productivity
                    </a>
                    , a company dedicated to developing personal agile planners that guide users toward organized
                    thinking and effective goal management, reflecting my commitment to creating impactful,
                    user-centered products.
                </p>
                <p className="text-md text-muted-foreground">
                    Outside of work, I serve as a technical advisor for startups, mentor aspiring leaders, and explore
                    the intersection of technology and creativity. I&apos;m also working on a novel and co-developing a
                    horror game, channeling my love for storytelling and interactive design. Whether tackling complex
                    engineering challenges, shaping the future of tech, or creating immersive experiences, I strive to
                    bring curiosity, precision, and innovation to everything I do.
                </p>
            </div>

            {/* Work Experience Section */}
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Some Stuff I&apos;ve Worked On</Typography>
                <div className="flex flex-col space-y-4 text-muted-foreground">
                    <p>
                        Over the last decade, I've built systems that serve millions of users across fintech, consumer platforms, and developer infrastructure. 
                        At <span className="text-primary font-medium">Chime</span>, I've led teams through high-growth periods, overseeing messaging systems processing 30M+ messages per hour, 
                        building resilience mechanisms that keep banking services running, and creating language frameworks that boost developer productivity.
                    </p>
                    <p>
                        Before fintech, I contributed to products you've probably used. At <span className="text-primary font-medium">Amazon</span>, I worked on 
                        Alexa's style recommendations and real-time routing for Amazon Maps. At <span className="text-primary font-medium">Microsoft</span>, I built 
                        the intelligent storage cleanup features in Windows 10 (earning a patent) and ML-powered content discovery across Windows and Xbox. 
                        My time at <span className="text-primary font-medium">Facebook</span> was spent reimagining photo albums for Timeline and creating the HTML5 batch uploader.
                    </p>
                    <p>
                        As an entrepreneur, I founded <span className="text-primary font-medium">Oat Productivity</span> to create agile planners that blend behavioral science with practical workflows. 
                        I'm also building <span className="text-primary font-medium">Democratized AI Foundry</span> to make advanced AI capabilities accessible to small teams.
                    </p>
                    <p>
                        On the investing side, I'm an active angel investor with a portfolio spanning SaaS, consumer, and infrastructure startups. 
                        I lead the San Francisco chapter of <span className="text-primary font-medium">Brown Girl Angels</span> and advise early-stage companies on technical strategy and team building.
                    </p>
                </div>
            </div>


        </section>
    )
}
