import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <section className="">
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Education />
      </section>
    </main>
  );
}
