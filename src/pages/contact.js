import React from "react";
import Layout from "../components/Layout";
import { ContactForm } from "../components/form/containers/ContactForm";
import Section from "../components/ui/Section";

const ContactPage = () => {
  return (
    <Layout>
      <Section>
        <h1>Contact</h1>
        <p>
          I'm always looking to collaborate or work on an interesting project.
          <br /> Leave your information below and I'll be in touch.
        </p>
      </Section>
      <Section maxWidth="25rem">
        <ContactForm />
      </Section>
    </Layout>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
