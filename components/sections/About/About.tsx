import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AboutSection } from './AboutSection'
import { Section } from '@/components/Section'

export const About = () => {
    return (
        <Section id="about" className="flex flex-col -mt-2">
            <h1>About Me</h1>

            <div className="mt-5 flex flex-col space-y-10">
                <AboutSection title="Work">
                    <p>
                        Currently I&apos;m focused on freelancing as a solo
                        developer on{' '}
                        <Button
                            variant="link"
                            className="text-base underline hover:no-underline font-normal"
                            asChild
                        >
                            {/* <a
                                href="https://www.upwork.com/freelancers/"
                                target="_blank"
                            > */}
                            Upwork
                            {/* </a> */}
                        </Button>
                        , helping small to medium-sized businesses to achieve
                        their goals.
                    </p>
                </AboutSection>

                <AboutSection title="Stack">
                    <div>
                        <p>
                            My main expertise lies in web development and here
                            are my trusty tools to build modern and performant
                            websites:
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1">
                            <Badge>Next.js</Badge>
                            <Badge>React</Badge>
                            <Badge>Inertia.js</Badge>
                            <Badge>TailwindCSS</Badge>
                            <Badge>Material-UI</Badge>
                            <Badge>Django</Badge>
                            <Badge>ExpressJS</Badge>
                            <Badge>Node.js</Badge>
                            <Badge>Laravel</Badge>
                            <Badge>MongoDB</Badge>
                            <Badge>MySQL</Badge>
                            <Badge>PostgreSQL</Badge>
                            <Badge>GraphQL</Badge>
                        </div>
                    </div>
                </AboutSection>

                <AboutSection title="Services">
                    <p>
                        I focus on building professional, responsive and
                        SEO-optimized websites. These include, but not limited
                        to landing pages, e-commerce shops, portfolios or
                        personal sites and ERP/CRM solutions.
                    </p>
                    <p>
                        ❖ MY CORE EXPERIENCE:
                    </p>
                    <p>
                        ✔ Entrepreneurial web applications
                    </p>
                    <p>
                        ✔ E-commerce SaaS-based product solutions
                    </p>
                    <p>
                        ✔ Marketplace web app solutions
                    </p>
                    <p>
                        ✔ Custom ERP & CRM solutions
                    </p>
                    <p>
                        ✔ Front-end development with React, Next.js
                    </p>
                    <p>
                        ✔ Back-end development with Django, Laravel, Express
                    </p>
                    <p>
                        ✔ MongoDB, MySQL, PostgreSQL as a Database
                    </p>
                    <p>
                        ✔ Amazon Web Services, Azure Services, Firebase
                    </p>
                    <p>
                        ✔ Responsive webpage development</p>
                    <p>
                        ✔ Converting PSD, Figma, and XD designs to React, Next.js
                    </p>
                    <p>
                        And much more..
                    </p>

                    <p>
                        Whether you want a
                        new website built from scratch or improve an existing
                        one, feel free to reach out to me on these platforms.
                    </p>
                </AboutSection>
            </div>
        </Section>
    )
}
