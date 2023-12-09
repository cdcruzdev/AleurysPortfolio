import { Navbar, Hero } from "./components"

function App() {
  return (
    <main className="relative min-h-screen flex">
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>
      <div className="w-full relative inset-0 bg-hero-background bg-cover bg-center bg-no-repeat hero-image z-0"></div>
      <div className="absolute top-1/4 left-0 w-full px-12 z-10">
        <Hero />
      </div>
    </main>
  )
}

export default App
