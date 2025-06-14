import About from "@/features/about/container/About";
import Lesson from "@/features/Lesson/container/Lesson";
import Hero from "@/features/home/container/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Hero />
      <About />
      <Lesson />
    </main>
  );
}
