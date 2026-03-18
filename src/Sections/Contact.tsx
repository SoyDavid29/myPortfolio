import ContactForm from "../Components/ContactForm";

const Contact: React.FC = () => {
    return (
        <section className="pt-10 px-10 flex flex-col items-center justify-center gap-4 " id="contact">
            <h2 className="font-poppins font-semibold text-2xl text-center">Get in Touch</h2>
            <h3 className="font-poppins font-normal text-lg text-center">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!</h3>
            <ContactForm />
        </section>

    );
};

export default Contact;