import { Section } from '@/components/Section'
import { Project } from './Project'

const STACK = {
    LARAVEL: 'Laravel',
    REACT: 'React',
    NEXTJS: 'NextJS',
    POSTGRESQL: 'PostgreSQL',
    MONGODB: 'MongoDB',
    TYPESCRIPT: 'TypeScript',
    JAVASCRIPT: 'JavaScript',
    TAILWIND: 'TailwindCSS',
    PYTHON: 'Python',
    FASTAPI: 'FastAPI',
    FIREBASE: 'Firebase',
    EXPRESSJS: 'ExpressJS',
    NODEJS: 'Node.js',
    DJANGO: 'Django',
    MYSQL: 'MySQL',
    MATERIALUI: 'Material-UI',
    GATSBY: 'Gatsby',
} as const

export const Projects = () => {
    return (
        <Section id="work" className="flex flex-col">
            <h1>Recent Work</h1>

            <div className="mt-4 flex flex-col md:flex-row gap-5">
                {/* using 2 flexboxes to achieve masonry effect */}
                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="portfolio"
                        description="The website you're currently visiting. Personal website, where I occasionally share my thoughts."
                        siteUrl="#"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.TAILWIND,
                        ]}
                    />

                    <Project
                        title="TaskEncher"
                        description="TaskEncher is an intuitive project management tool designed to streamline your workflow, making the 
                            management of projects effortless and efficient. it offers robust features such as task assignment, deadline 
                            setting, progress tracking, and advanced time tracking and reporting tools. We used Next.js to improve SEO with 
                            front-end in website. As a backend, we used Django, which can handle high levels of user traffic and data."
                        siteUrl="https://taskencher.com/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.TAILWIND,
                            STACK.PYTHON,
                            STACK.DJANGO,
                            STACK.MONGODB,
                            STACK.POSTGRESQL,
                        ]}
                    />

                    <Project
                        title="aimro"
                        description="Gatsby, what a framework based on React, is used to generate static sites, which is an excellent choice for content-rich websites such as blogs, portfolios, and business sites.
                            One of the key advantages of Gatsby is its speed."
                        siteUrl="https://www.aimro.ie/"
                        githubUrl=""
                        stack={[
                            STACK.GATSBY,
                            STACK.JAVASCRIPT,
                        ]}
                    />

                    <Project
                        title="hawkrobotix.tech"
                        description="This is a landing page developed using Next.js"
                        siteUrl="https://hawkrobotix.tech/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.TAILWIND,
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="sedam Market for food products"
                        description="“Sedam” is a user-friendly website developed with React, providing a platform to access high-quality food products from domestic manufacturers and world-renowned brands. 
                            The site utilized the power of React’s component-based architecture, along with potential use of technologies like React Router for seamless navigation, and Redux for efficient state management."
                        siteUrl="https://sedam.com.ua/"
                        githubUrl=""
                        stack={[
                            STACK.REACT,
                            STACK.JAVASCRIPT,
                            STACK.EXPRESSJS,
                            STACK.NODEJS,
                            STACK.MONGODB
                        ]}
                    />

                    <Project
                        title="a Responsive Website for a Chemical Distribution Company"
                        description="This Website updated using Next.js. You can see original project in https://www.harrisandford.com/."
                        siteUrl="https://harris-and-ford.vercel.app/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.MATERIALUI,
                        ]}
                    />

                    <Project
                        title="A Curtain Wall Design Company Website"
                        description="The Alumtec Glazing Solution Inc. website, developed with Next.js, includes features like a product gallery, service details, quote requests, and customer engagement tools. 
                            The technology stack include Next.js for SEO in front-end development, highly efficient express.js for handling multiple simultaneous client requests in back-end, and PostgreSQL and MongoDB for data storage."
                        siteUrl="https://alumtec.ca/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.TAILWIND,
                            STACK.EXPRESSJS,
                            STACK.NODEJS,
                            STACK.POSTGRESQL,
                            STACK.MONGODB
                        ]}
                    />

                </div>
            </div>
        </Section>
    )
}
