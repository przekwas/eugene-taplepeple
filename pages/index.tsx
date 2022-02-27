import Image from 'next/image';
import Head from 'next/head';
import eugene from '../public/eugene.png';
import ghost from '../public/ghost.png';
import { useEffect, useState } from 'react';
import { GiTopHat } from 'react-icons/gi';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	const [isCool, setIsCool] = useState<boolean>(false);

	useEffect(() => {
		const coolNames = ['bg-zinc-900', 'text-zinc-100'];
		const unCoolNames = ['bg-slate-200', 'text-slate-900'];
		document
			.querySelector('body')
			?.classList.add('debug-screens', 'duration-300', 'transition-all');
		if (isCool) {
			document.querySelector('body')?.classList.remove(...unCoolNames);
			document.querySelector('body')?.classList.add(...coolNames);
		} else {
			document.querySelector('body')?.classList.remove(...coolNames);
			document.querySelector('body')?.classList.add(...unCoolNames);
		}
	});

	return (
		<>
			<Head>
				<title>{isCool ? 'Ghost' : 'Eugene Taplepeple'}</title>
			</Head>
			<div className="max-w-2xl mx-auto">
				<div className="flex flex-col items-center justify-between min-h-screen py-4">
					<div className="text-3xl font-bold">
						<h1 className={isCool ? 'metal' : ''}>
							{isCool ? 'Ghost' : 'Eugene Taplepeple'}
						</h1>
					</div>
					<div className="md:w-2/3">
						<Image src={isCool ? ghost : eugene} alt="picture of eugene" />
					</div>
					<div className="px-4">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora id
							quas, voluptas, eum possimus cumque incidunt similique error, fugit
							asperiores atque natus eos voluptatum dolorum exercitationem ratione
							mollitia? Dolorem, quia!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus libero
							nostrum ab quo optio debitis consequatur doloremque omnis, deserunt
							mollitia ipsum inventore tempora necessitatibus, laborum aliquid
							officiis soluta facere aspernatur.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ab
							porro sed assumenda dicta a recusandae aliquid eum? Provident tempora
							obcaecati voluptas enim id dicta consequuntur ullam ratione recusandae
							deleniti.
						</p>
					</div>
					<div className="text-2xl">
						<button
							onClick={() => setIsCool(!isCool)}
							className={`flex items-center justify-between mx-3 bg-transparent font-semibold py-2 px-4 border rounded ${
								isCool
									? 'text-sky-700 border-sky-500'
									: 'text-red-700 border-red-500 metal'
							}`}>
							{isCool ? (
								<>
									<GiTopHat />
									<span className="px-2">Take off The Hat</span>
									<GiTopHat />
								</>
							) : (
								<>
									<GiTopHat />
									<span className="px-2">Put on The Hat</span>
									<GiTopHat />
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
