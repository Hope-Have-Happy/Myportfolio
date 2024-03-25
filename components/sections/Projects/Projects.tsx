import { Section } from '@/components/Section'
import { Project } from './Project'

const STACK = {
    LARAVEL: 'Laravel',
    REACT: 'React',
    NEXTJS: 'NextJS',
    POSTGRESQL: 'PostgreSQL',
    MONGODB: 'MongoDB',
    TYPESCRIPT: 'Typescript',
    TAILWIND: 'Tailwind',
    PYTHON: 'Python',
    FASTAPI: 'FastAPI',
    FIREBASE: 'Firebase',
    EXPRESSJS: 'ExpressJS',
    NODEJS: 'Node.js',
    DJANGO: 'Django',
    MYSQL: 'MySQL',
    MATERIALUI: 'Material-UI',
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
                            STACK.REACT,
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
                            STACK.MYSQL,
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="a Responsive Website for a Chemical Distribution Company"
                        description="The task was to develop a website that would effectively showcase their chemical products and services 
                            while adhering to the best practices in the industry."
                        siteUrl="https://harris-and-ford.vercel.app/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.MATERIALUI,
                            STACK.EXPRESSJS,
                            STACK.MONGODB,
                        ]}
                    />

                    <Project
                        title="A Curtain Wall Design Company Website"
                        description="The website with Next.js for aluminium curtain wall, windows and doors built. We used Next.js for SEO 
                            in front-end development and highly efficient express for handling multiple simultaneous client requests in back-end."
                        siteUrl="https://alumtec.ca/"
                        githubUrl=""
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.TAILWIND,
                            STACK.EXPRESSJS,
                            STACK.NODEJS,
                            STACK.POSTGRESQL,
                        ]}
                    />
                </div>
            </div>
        </Section>
    )
}
