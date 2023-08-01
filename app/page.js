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

import {Footer, Navbar} from '../components'

export default function Home() {
	return (
		<main className='bg-primary-black overflow-hidden h-screen text-white'>
			<div className='max-w-[1360px] mx-auto' >
				<Navbar />
				<Hero />
				{/* <About /> */}
				{/* <Explore /> */}
				{/* <GetStarted /> */}
				{/* <WhatsNew /> */}
				{/* <World /> */}
				{/* <Insights /> */}
				{/* <Feedback /> */}
				{/* <Footer /> */}
			</div>
		</main>
	)
}
