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
                <div className="flex flex-col gap-3">
                    {experience.map((item) => (
                        <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-md text-muted-foreground">{item.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Biography Section */}
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Biography</Typography>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {biography.map((item) => (
                        <Card key={item.year} className="w-full">
                            <CardHeader>
                                <CardTitle>{item.year}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">My Skills</Typography>
                <p className="text-lg text-muted-foreground">
                    Over my career, I’ve cultivated a diverse set of skills, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Engineering team leadership and mentorship</li>
                    <li>Infrastructure, protocol design, and system resilience</li>
                    <li>Ruby, GoLang, and microservices architecture</li>
                    <li>Agile development practices and roadmap planning</li>
                    <li>Technical advisory and startup mentoring</li>
                </ul>
                <SkillsCarousel />
            </div>
        </section>
    )
}
