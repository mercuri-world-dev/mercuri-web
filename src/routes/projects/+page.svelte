<script lang="ts">
    import logo from '$lib/assets/logos/mercuri_logo_star_only.png';
    import girl from '$lib/assets/images/girl.avif';
  
    import Footer from '$lib/shared/ui/components/footers/Footer.svelte';
    import TextScroll from '$lib/shared/ui/components/home-components/TextScroll.svelte';
    import NavigationBar from '$lib/shared/ui/components/navigation-bars/NavigationBar.svelte';
  
    const colors = {
      mercuriBlue: '#243693',
      palePurple: '#E8E4F6',
      lilac: '#D3C7FF',
      darkerLilac: '#8368E3',
    };
  
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
  
  <TextScroll 
    text="our projects" 
    seperator="✺" 
    fontSize="80px" 
  />
  
  <div 
    class="mt-10 mb-10 max-w-[100rem] mx-auto px-6 lg:px-8"
  >
    <div 
      class="grid gap-y-12"
    >
      {#each projects as project (project.title)}
        <div 
          class="rounded-3xl p-6 border shadow-md transition-all duration-300 hover:shadow-[15px_15px_0px_rgba(131,104,227,0.6)]"
          style="background-color: #ffffff; border-color: {colors.mercuriBlue};"
        >
          <div 
            class="flex justify-between items-start"
          >
            <h2 
              class="text-5xl sm:text-6xl font-bold mb-3" 
              style="color: {colors.mercuriBlue};"
            >
              <span 
                style="color: {colors.darkerLilac};"
              >
                {project.id}.
              </span> &nbsp; {project.title}
            </h2>
  
            <img 
              src={logo} 
              alt="Mercuri star logo" 
              class="w-16 h-16 hidden sm:inline" 
            />
          </div>
  
          <h3 
            class="text-2xl mb-4 font-semibold" 
            style="color: {colors.darkerLilac};"
          >
            Team Members → {project.members.join(', ')}
          </h3>
  
          <div 
            class="px-6 py-4 rounded-2xl"
            style="background-color: {colors.lilac}; border: 1px solid {colors.darkerLilac};"
          >
            <p 
              class="text-base sm:text-lg leading-relaxed" 
              style="color: {colors.mercuriBlue};"
            >
              {project.description}
            </p>
  
            {#if project.link}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-4 px-5 py-2 font-medium text-sm sm:text-base rounded-lg"
                style="color: #ffffff; background-color: {colors.darkerLilac}; border: 1px solid {colors.darkerLilac};"
              >
                Learn more →
              </a>
            {:else}
              <button 
                disabled 
                class="inline-block mt-4 px-5 py-2 rounded-lg cursor-not-allowed font-medium text-sm sm:text-base"
                style="color: {colors.mercuriBlue}; background-color: {colors.palePurple}; border: 1px solid {colors.lilac};"
              >
                Coming soon
              </button>
            {/if}
          </div>
        </div>
      {/each}
  
      <!-- Build with us card -->
      <div 
        data-testid="projects-bottom" 
        class="flex justify-center px-4"
      >
        <div 
          class="flex flex-col sm:flex-row shadow-md rounded-3xl overflow-hidden w-full max-w-5xl duration-300 hover:shadow-[0px_0px_15px_rgba(131,104,227,0.7)] hover:scale-105"
          style="background-color: {colors.palePurple}; border: 1px solid {colors.lilac};"
        >
          <div 
            class="sm:w-4/7 w-full h-64 sm:h-auto"
          >
            <img 
              src={girl} 
              alt="Girl for Mercuri" 
              class="w-full h-full object-cover" 
            />
          </div>
  
          <div 
            class="p-6 sm:p-8 flex flex-col justify-between w-full sm:w-3/7"
          >
            <div>
              <h2 
                class="text-3xl sm:text-4xl font-bold"
                style="color: {colors.mercuriBlue};"
              >
                Build with us.
              </h2>
  
              <p 
                class="mt-4 mb-6 text-base sm:text-lg leading-relaxed" 
                style="color: {colors.mercuriBlue};"
              >
                We are always open to new team members and project proposals. Our teams accept a variety of talents and assign roles accordingly. Whether your background is in graphic design, UI/UX, front-end, back-end, or full-stack development, and whether you began coding yesterday, several years ago, or work exclusively with no-code development, we would love to work with you.
              </p>
            </div>
  
            <div 
              class="mt-2"
            >
              <a 
                href="/volunteer"
                class="inline-block px-6 py-3 font-semibold rounded-xl transition duration-300"
                style="background-color: {colors.darkerLilac}; color: #ffffff;"
              >
                JOIN US →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Footer />
  