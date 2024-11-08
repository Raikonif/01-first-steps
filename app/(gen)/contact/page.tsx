import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raikonif Contact Page",
  description: "The most important page of all",
};

function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Send us a message!</p>
    </div>
  );
}

export default ContactPage;
