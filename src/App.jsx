import './App.css'
import TestimonialCard from './components/TestimonialCard'

function App() {

  return (
    <>
    <TestimonialCard name={"Supritha"} feedback={"This service was amazing!"}/>
    <TestimonialCard name={"Prisha"} feedback={"The service can be better"}/>
    <TestimonialCard name={"Ananya"} feedback={"The service was the worst. Not at all recommended!"}/>
    </>
  )
}

export default App
