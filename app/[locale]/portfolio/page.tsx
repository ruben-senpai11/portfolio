import BBorder from "../bborder";
import Footer from "../navigation/footer";
import Header from "../navigation/header";
import ContactForm from "../sections/contact";

export default function Page() {

  return (
    <>
      <BBorder>
        <Header title="white_dev" />
        <div className="main pb-16">
          <section className="about flex flex-col gap-16">
            <h1 className="text-[48px] " >Portfolio</h1>
            <div className="flex flex-col gap-20   ">
            </div>
          </section>
        </div>
        <ContactForm />
        <Footer />
      </BBorder>
    </>
  )
}