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
		<main className='bg-primary-black overflow-hidden text-white'>
			<div className='max-w-[1360px] mx-auto' >
				<Navbar />

				<Hero />

				<div className='relative'>
					<About />
					<div className='gradient-03 z-0'/>
					<Explore />
				</div>

				<div className='relative'>
					<GetStarted />
					<div className='gradient-04 z-0'/>
					<WhatsNew />
				</div>

				<World />

				<div className='relative'>
					<Insights />
					<div className='gradient-04 z-0'/>
					<Feedback />
				</div>

				<Footer />
			</div>
		</main>
	)
}
