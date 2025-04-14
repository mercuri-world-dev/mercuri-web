<script>
	import logo from '$lib/assets/logos/mercuri_logo_star_only.png';
	import img1 from '$lib/assets/images/carousel1.avif';
	import img2 from '$lib/assets/images/carousel2.avif';
	import img3 from '$lib/assets/images/carousel3.avif';
	import img4 from '$lib/assets/images/carousel4.avif';
	import girl from '$lib/assets/images/girl.avif';
	import ImagesCarousel from '$lib/shared/ui/components/home-components/ImagesCarousel.svelte';
	import TextScroll from '$lib/shared/ui/components/home-components/TextScroll.svelte';
	import Footer from '$lib/shared/ui/components/footers/Footer.svelte';
	let cards = [
		{
			number: '196',
			text: 'volunteers',
			img: 'https://framerusercontent.com/images/d9bvi6XFJuaCypR3rz8kCqElc.png'
		},
		{
			number: '31',
			text: 'international chapters',
			img: 'https://framerusercontent.com/images/pBEuVLokvfMigQMYovCP3g0zPkk.png'
		},
		{
			number: '21',
			text: 'languages translated\n',
			number2: '6,473',
			text2: 'people reached',
			img: 'https://framerusercontent.com/images/0QmEx6KqhtnM0MdQsYgFpqM2NCY.png'
		}
	];

	let teams = [
		{
			title: 'Technology',
			description:
				'Our technology team builds mobile applications, digital databases, and browser extensions to support individuals with mental illness.'
		},
		{
			title: 'Translation',
			description:
				'Our translation team translates mental health resources into over a dozen different languages.'
		},
		{
			title: 'Outreach',
			description:
				'Our outreach team shares mental health resources through in-person community events and social media.'
		},
		{
			title: 'Education',
			description: 'Our education team develops and curates evidence-based mental health resources.'
		}
	];
	let images = [img1, img2, img3, img4];
</script>

<div class="relative rounded-2xl bg-[#eae4f2] px-4 py-8 text-center">
	<h1 class="text-3xl font-bold text-[#1a1a3d] md:text-4xl">
		Pioneering innovative digital solutions for global
		<div class="text-[#2c2c76]">mental well-being.</div>
	</h1>

	<div class="relative mt-8 ml-auto transition-all" style="width: fit-content; max-width: 90%;">
		<img
			src={girl}
			alt="A stylized sketch of a girl's face."
			class="rounded-l-4xl shadow-lg duration-200 hover:shadow-[-7px_8px_0px_0_#4f46e5] hover:grayscale-0"
			loading="lazy"
		/>

		<div class="absolute right-4 text-right" style="top: 20%;">
			<div
				class="inline-block rounded-xl border-2 border-white/50 bg-white/0 px-4
                       py-2 text-sm text-white md:text-base"
			>
				Half of the world's population lives in nations
			</div>
		</div>

		<div class="absolute right-4 text-right" style="top: 30%;">
			<div
				class="inline-block rounded-xl border-2 border-white/50 bg-white/0 px-4
                       py-2 text-sm text-white md:text-base"
			>
				with fewer than one psychiatrist per 10,000 people.
			</div>
		</div>
	</div>
</div>

<div class="flex w-full justify-center p-10">
	<div
		class="w- mx-auto flex w-11/16 max-w-screen-lg flex-col items-center gap-8 lg:flex-row lg:items-start"
	>
		<h2 class="max-w-md text-left">
			<div class="text-4xl font-bold text-indigo-900">mercuri.world</div>
			<div class="mt-2 text-xl text-[#1a1a3d]">
				makes mental health resources <br />
				<span class="text-4xl font-bold text-blue-950 italic">accessible to <em>everyone</em>.</span
				>
			</div>
			<p class="text-black-900 mt-4 font-medium">
				We are a collective of <span class="text-indigo-700"
					>activists, researchers, engineers, and creatives</span
				>
				based in over a dozen nations. We develop, translate, and curate
				<span class="text-indigo-700">evidence-based digital mental health resources</span> and disseminate
				them digitally and through our global outreach network.
			</p>
		</h2>

		<div class="flex flex-col gap-4 lg:flex-row">
			<div class="flex flex-col gap-4">
				{#each cards.slice(0, 2) as card}
					<div
						class="relative h-40 overflow-hidden rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0 lg:w-64"
					>
						<img src={card.img} alt="Card " class="h-full w-full rounded-4xl object-cover" />
						<div class="absolute bottom-4 left-4 text-3xl font-bold text-gray-300">
							<span class="text-5xl text-white">{card.number}</span> <br />
							{card.text}
						</div>
					</div>
				{/each}
			</div>

			<div
				class="relative h-84 w-full overflow-hidden rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0 lg:w-64"
			>
				<img src={cards[2].img} alt="Card " class="h-full w-full rounded-4xl object-cover" />
				<div class="absolute bottom-4 left-4 text-4xl font-bold text-gray-300">
					<span class="text-6xl text-white">{cards[2].number}</span> <br />
					{cards[2].text}
					<span class="text-6xl text-white">{cards[2].number2}</span> <br />
					{cards[2].text2}
				</div>
			</div>
		</div>
	</div>
</div>

<TextScroll />

<div class="flex min-h-screen items-center justify-center px-4">
	<div
		class="relative w-full max-w-6xl overflow-hidden rounded-4xl border-2 border-indigo-900 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-[7px_10px_2px_rgb(0,0,255)]"
	>
		<h2 class="px-4 text-center text-3xl font-bold md:text-5xl">
			<span
				class="mx-auto inline-block max-w-full bg-clip-text text-transparent"
				style="background-image: linear-gradient(0deg, rgb(32, 48, 128) 0%, rgb(0, 0, 0) 100%);"
			>
				Meet mercuri.world's teams.
			</span>
		</h2>
		<div class="mx-auto mt-2 max-w-lg px-4 text-center text-sm text-blue-950 md:text-base">
			<span
				class="bg-clip-text font-bold text-transparent"
				style="background-image: linear-gradient(0deg, rgb(32, 48, 128) 0%, rgb(0, 0, 0) 100%);"
			>
				mercuri.world
			</span>
			is made possible by several volunteer teams that work in cohesion to support our mission.
		</div>
		<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each teams as team}
				<div class="textbgcolor relative flex rounded-4xl bg-indigo-50 p-4">
					<img src={logo} class=" m-auto h-10 text-6xl text-indigo-900" alt="mercurilogo" />
					<div class="p-1">
						<div class="m-0 p-0 text-gray-800">{team.description}</div>
						<div class="m-0 mt-2 p-0 text-xl font-extrabold text-indigo-900">{team.title}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<ImagesCarousel {images}></ImagesCarousel>

<Footer />

<style>
	.textbgcolor {
		background-color: rgb(226, 217, 255);
	}
</style>
