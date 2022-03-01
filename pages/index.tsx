import Image from 'next/image';
import Head from 'next/head';
import eugene from '../public/eugene.png';
import ghost from '../public/ghost.png';
import Eugene from '../components/Eugene';
import Ghost from '../components/Ghost';
import { GiTopHat } from 'react-icons/gi';
import { useEffect, useState } from 'react';
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

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		setIsCool(!isCool);
	};

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
					<div className="px-4">{isCool ? <Ghost /> : <Eugene />}</div>
					<div className="text-2xl">
						<button
							onClick={handleClick}
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
