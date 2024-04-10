import { Section } from '@/components/Section'
import { ContactForm } from './ContactForm'
// import { Links } from './Links'

export const Contact = () => {
    return (
        <Section id="contact" className="flex flex-col">
            <h1>Contact</h1>

            {/* <div className="mt-5 flex flex-col-reverse md:flex-row gap-10 justify-between"> */}
            <div className="mt-5 flex-col-reverse md:flex-row gap-10 justify-between">
                {/* <Links /> */}

                {/* <div className="max-w-md flex flex-col"> */}
                <div className="flex flex-col">
                    <p className="font-semibold text-xl">
                        Have a project in mind?
                    </p>

                    <p className="mt-1 mb-3 text-muted-foreground">
                        Leave me a message and I will reach out to you as soon
                        as possible.
                        {/* If you want to contact me. */}
                    </p>
                    {/* <p>
                        [Skype] live:.cid.661219ed7b0ba8ed
                    </p> */}

                    {/* <ContactForm /> */}
                </div>
            </div>
        </Section>
    )
}
