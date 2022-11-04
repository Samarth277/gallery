import Layout from "../component/Layout"
import Hero from "../component/Hero"
import About from "../component/About"

export default function Home() {
  return (
    <Layout>
      <main className="bg-white p-4">
        <Hero />
        <About />
      </main>
    </Layout>
  )
}