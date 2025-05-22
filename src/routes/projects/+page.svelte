<script lang="ts">
    import logo from '$lib/assets/logos/mercuri_logo_star_only.png';
	import girl from '$lib/assets/images/girl.avif';
    import Footer from '$lib/shared/ui/components/footers/Footer.svelte';
    import TextScroll from '$lib/shared/ui/components/home-components/TextScroll.svelte';
	import NavigationBar from '$lib/shared/ui/components/navigation-bars/NavigationBar.svelte';

    let projects = [
        {
			id: '01',
            title: 'CareerQuest',
            members: ['Nora Sun', 'Brian Chan', 'Maya Church', 'Mridu Karanam'],
            description:
                'Identifying suitable and accommodating employment while living with mental illness can be challenging. CareerQuest is a simple and free program to match individuals living with mental illness with career opportunities near them and guide them through the application process.',
            link: 'wqjektfg',
        },
        {	
			id: '02',
            title: 'AI-Assisted Translation',
            members: ['Elizabeth Zhang'],
            description:
                'In the age of increasingly-accurate AI translation software, we are utilizing this resource along with human validation to translate longer, more ambitious texts such as books and long essays.',
            link: '',
        },
        {
			id: '03',
            title: 'Multilingual Resource Library',
            members: ['Lawrence Burton III', 'Emme McDonald', 'Sophia Groth', 'Maggie Chen', 'Aarushi Mehrotra'],
            description:
                'The vast majority of digital mental health resources are only offered in English. Our multilingual resource library includes 400+ mental illness screeners, workshops, games, and guides written natively in or translated to over a dozen languages with advanced filtering options.',
            link: '',
        },
        {
			id: '04',
            title: 'Mobile Mental Well-being Resource Hub',
            members: ['Lawrence Burton III', 'Emme McDonald', 'Sophia Groth', 'Maggie Chen', 'Aarushi Mehrotra'],
            description:
                'The mercuri.world app provides interactive, pocket-sized versions of the multilingual resources featured in our digital library for your convenience. More features coming soon.',
            link: '',
        },
    ];
</script>

<NavigationBar />
<TextScroll text="our projects" seperator="✷ ❅ ✷" fontSize="80px" />

<!-- Main Container -->
<div class="mt-10 mb-10 max-w-[100rem] mx-auto px-6 sm:px-4 lg:px-8">
	<div class="grid gap-y-12">
		{#each projects as project (project.title)}
			<div 
				data-testid="project-card"
				class="rounded-3xl p-6 px-8 bg-white backdrop-blur-md border-1 border-purple-900 shadow-md hover:shadow-[15px_15px_0px_rgba(80,0,100,0.6)] transition-all duration-300"
			>
				<!-- Logo + Title -->
				<div class="flex justify-between">
					<h2 class="text-5xl sm:text-6xl font-bold text-purple-900 mb-3">
						<span class=" text-purple-700">{project.id}.</span> &nbsp; {project.title}
					</h2>
					<img
						src={logo}
						alt="Mercuri logo which is a five-pointed star"
						class="w-16 h-16 hidden mx-4 sm:inline"
					/>
				</div>

				<h2 class="text-2xl text-purple-700 mb-4">
					<strong>Team Members →</strong> &nbsp; {project.members.join(', ')}
				</h2>
				<div class="bg-purple-200 border-1 border-purple-700 px-6 py-4 rounded-2xl">
					<p class="line-clamp-[5] text-purple-900 text-base sm:text-lg leading-relaxed">{project.description}</p>

					{#if project.link}
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block mt-4 px-5 py-2 text-white bg-purple-700 hover:bg-purple-800 border border-purple-700 rounded-lg font-medium text-sm sm:text-base"
						>
							Learn more →
						</a>
					{:else}
						<button
							disabled
							class="inline-block mt-4 px-5 py-2 text-purple-900 bg-purple-300 border border-purple-200 rounded-lg cursor-not-allowed font-medium text-sm sm:text-base"
						>
							Coming soon
						</button>
					{/if}
				</div>
			</div>
		{/each}

		<!-- CTA Section -->
		<div data-testid="projects-bottom" class="flex justify-center items-center bg-gray-80 px-4">
			<div class="flex flex-col sm:flex-row bg-purple-100 backdrop-blur-md border border-purple-200 shadow-md rounded-3xl overflow-hidden w-full max-w-7xl">
				<!-- Image -->
				<div class="sm:w-3/5 w-full h-64 sm:h-auto">
					<img
						class="w-full h-full object-cover"
						src={girl}
						alt="girl avif of mercuri"
					/>
				</div>

				<!-- Text Content -->
				<div class="p-6 sm:p-8 flex flex-col justify-between w-full sm:w-3/5">
					<div>
						<h2 class="text-3xl sm:text-4xl font-bold text-purple-900">
							Build with us.
						</h2>
						<p class="line-clamp-[7] sm:line-clamp-[10] mt-4 mb-4 text-purple-800 text-base sm:text-lg leading-relaxed">
							We are always open to new team members and project proposals. Our teams accept a variety of talents and assign roles accordingly. Whether your background is in graphic design, UI/UX, front-end, back-end, or full-stack development, and whether you began coding yesterday, several years ago, or work exclusively with no-code development, we would love to work with you.
						</p>
					</div>
					<div>
						<button
							class="inline-block px-6 py-3 text-white bg-purple-700 hover:bg-purple-800 rounded-xl transition duration-300 text-sm sm:text-lg font-semibold"
						>
							<a href="/volunteer">JOIN US →</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Footer />