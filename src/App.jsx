import { Navbar, Hero, About } from "./components"

const App = () => {
  return (
    <main className="flex flex-col">
      <div className="sticky top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="w-full min-h-screen hero-image z-0">
        <Hero />
      </div>
      <div className="w-full min-h-screen about-image z-0">
        <About />
      </div>
      <div className="">

      </div>
    </main>
  )
}

export default App