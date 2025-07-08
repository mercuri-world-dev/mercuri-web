<script>
	import NavigationBar from "$lib/shared/ui/components/navigation-bars/NavigationBar.svelte";
    import ImagesCarousel from "$lib/shared/ui/components/partners-components/ImagesCarousel.svelte";
    import { BookOpen, Mic, CalendarHeart, Mail} from 'lucide-svelte';
    import Footer from "$lib/shared/ui/components/footers/Footer.svelte";

    import carousel1 from "$lib/assets/images/partners/class.avif";
    import carousel2 from "$lib/assets/images/partners/lecturing.avif";
    import carousel3 from "$lib/assets/images/partners/meetingup.avif";
    import carousel4 from "$lib/assets/images/partners/smilingman.avif";

    import logo1 from "$lib/assets/logos/partners/abwis.avif";
    import logo2 from "$lib/assets/logos/partners/envisionrc.avif";
    import logo3 from "$lib/assets/logos/partners/harvardbrain.avif";
    import logo4 from "$lib/assets/logos/partners/nami.png";
    import logo5 from "$lib/assets/logos/partners/talaria.avif";

    let collab_email = "hq@mercuri.world";

    let activities = [
        {
            heading: "Awareness Posters",
            description: "Design and distribute culturally relevant posters that spark open conversations and raise awareness about mental health in diverse communities.",
            icon: BookOpen,
        },
        {
            heading: "Webinars & Workshops",
            description: "Offer expert-led sessions and community dialogues that equip people with tools for managing stress, building resilience, and understanding mental wellness.",
            icon: Mic,
        },
        {
            heading: "Events",
            description: "Organize inclusive gatherings, mental health fairs, and cultural programs that center well-being and bring people together.",
            icon: CalendarHeart,
        },
        {
            heading: "Newsletters",
            description: "Share stories of hope, healing, and grassroots action — along with mental health resources — through regular global newsletters.",
            icon: Mail,
        },
    ];

    let benefits = [
        "Deliver digital mental health care to regions beyond the English-speaking world.",
        "Co-create impactful, bilingual events that empower communities.",
        "Nurture sustainable local programs that foster long-term wellness."
    ];

    let carousel_images = [
        { id: 1, path: carousel1, alt: "Children in a classroom engaged in discussion" },
        { id: 2, path: carousel2, alt: "Senior student mentoring juniors" },
        { id: 3, path: carousel3, alt: "Students enjoying time together" },
        { id: 4, path: carousel4, alt: "A smiling man conveying hope" },
    ];

    let carousel_logos = [
        { id: 1, path: logo1, alt: "ATHENA By Women In STEM (ABWIS) Logo" },
        { id: 2, path: logo2, alt: "Envision Research Competition (EnvisionRC) Logo" },
        { id: 3, path: logo3, alt: "The Harvard Brain Logo" },
        { id: 4, path: logo4, alt: "National Alliance on Mental Illness (NAMI) Logo" },
        { id: 5, path: logo5, alt: "Talaria Summer Institute Logo" },
    ];
</script>

<style lang="postcss">
    @reference '../../app.css'

    .heading {
        @apply text-mercuri-blue;
    }

    .subheading {
        color: #5e46c6;
    }

    .activity-card {
        @apply bg-white border-1 border-solid;

        border-color: #e5e7eb;
        transition: all 0.3s ease;
    }
    .activity-card:hover {
        @apply border-cornflower-blue;

        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(102, 77, 191, 0.15);
    }

    .benefit-card {
        @apply bg-white border-solid border-periwinkle-blue;

        border-left-width: 10px;
        transition: all 0.3s ease;
    }
    .benefit-card:hover {
        @apply border-l-darker-lilac bg-soft-warm-white;

        box-shadow: 0 6px 18px rgba(172, 139, 255, 0.15);
    }

    .gradient-bg {
        background: linear-gradient(135deg,
            /* var(--color-darker-lilac), */
            var(--color-cloudy-lavender),
            var(--color-lilac),
            var(--color-pale-purple),
            var(--color-soft-warm-white)
        );
    }
</style>

<NavigationBar />

<main class="w-full">
    <!-- Mission Section-->
    <section class="gradient-bg py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-10 items-center">
                <div class="lg:w-1/3">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center lg:text-left bg-gradient-to-r from-mercuri-blue to-darker-lilac bg-clip-text text-transparent leading-tight">
                        Our Mission
                    </h1>
                </div>
                <div class="lg:w-2/3">
                    <blockquote class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-mercuri-blue text-lg lg:text-xl leading-relaxed shadow-xl">
                        We believe mental health support should be <span class="font-semibold text-darker-lilac">personal, inclusive, and rooted in empathy</span>. 
                        <br /><br />
                        At <strong class="text-blue-600">mercuri.world</strong>, we walk alongside communities — not ahead of them — to co-create resources that truly resonate. 
                        Whether it’s language, culture, or lived experience, we honor what makes each journey unique, while building care that’s human and accessible for all.
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
    

    <!-- Activity Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="heading text-4xl lg:text-5xl font-extrabold mb-4">
                    How We Uplift Communities
                </h2>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    From schools to shelters, we partner with changemakers to bring real support, hope, and healing into the heart of underserved communities.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each activities as activity}
                    <div class="activity-card p-6 rounded-xl">
                        <svelte:component this={activity.icon} class="w-10 h-10 text-periwinkle-blue mb-4" />
                        <h3 class="subheading font-bold text-xl mb-2">
                            {activity.heading}
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            {activity.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Image Carousel -->
    <section class="py-10">
        <ImagesCarousel images={carousel_images} grayfilter={true}/>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 class="heading text-4xl lg:text-5xl font-extrabold mb-6">
                        Why Partner with us?
                    </h2>
                    <p class="text-gray-700 text-lg lg:text-xl leading-relaxed">
                        When you partner with <strong class="text-blue-600">mercuri.world</strong>, you're not just expanding your reach — you're helping rewrite the mental health story for communities that are often forgotten. Together, we can break silence, bridge gaps, and build systems of support where they’re needed most.
                    </p>
                </div>

                <div class="space-y-4">
                    {#each benefits as benefit}
                        <div class="benefit-card p-6 rounded-sm shadow-sm">
                            <p class="text-gray-800 text-lg leading-relaxed">
                                {benefit}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Partners Section -->
    <section class="gradient-bg py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-mercuri-blue to-darker-lilac bg-clip-text text-transparent">
                Standing Together for Mental Health
            </h2>
            <p class="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                These organizations walk with us on the journey toward mental health justice. Let’s build something bigger — together.
            </p>
        </div>
    </section>

    <!-- Logo Carousel -->
    <section class="py-12">
        <ImagesCarousel speed={30} images={carousel_logos} left_to_right={false} logoStyle={true} />
    </section>

    <!-- CTA -->
    <section class="text-center bg-pale-purple py-16 px-6">
        <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-bold text-mercuri-blue mb-4">Let’s Collaborate</h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you're a local organization, global movement, or passionate individual — your voice matters. Together, we can build lasting mental health support where it’s needed most.
            </p>
            <a href="mailto:{collab_email}" class="inline-block bg-mercuri-blue hover:bg-darker-lilac text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                Reach Out to Us
            </a>
        </div>
    </section>
</main>

<Footer />