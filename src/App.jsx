import { Navbar, Hero, About } from "./components"

function App() {
  return (
    <main className="flex flex-col">
      <div className="fixed top-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>
      <div className="w-full min-h-screen hero-image z-0">
        <Hero />
      </div>
      <div className="w-full relative min-h-screen about-image">
        <About />
      </div>
        <div className="absolute">
      </div>
    </main>
  )
}

export default App
