import {
    About,
    Explore,
    Feedback,
    GetStarted,
    Hero,
    Insights,
    WhatsNew,
    World,
} from '../sections'

import { Footer, Navbar } from '../components'

export default function Home() {
    return (
        <main className='bg-primary-black overflow-hidden h-screen text-white'>
            <Navbar />
            <Hero />
            <About />
            <Explore />
            <GetStarted />
            <WhatsNew />
            <World />
            <Insights />
            <Feedback />
            <Footer />
        </main>
    )
}
