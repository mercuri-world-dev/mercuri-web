<script>
	import Footer from "$lib/shared/ui/components/footers/Footer.svelte";
	import NavigationBar from "$lib/shared/ui/components/navigation-bars/NavigationBar.svelte";
    import ImagesCarousel from "$lib/shared/ui/components/partners-components/ImagesCarousel.svelte";
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
        "Creating and distributing mental health awareness posters.",
        "Hosting webinars and workshops on various mental health topics.",
        "Partnering with local libraries to host recurring community mental health events.",
        "Sending out regular newsletters to keep the community informed about upcoming initiatives and resources.",
    ]

    let benefits = [
        "Increasing digital resource access to non-English-speaking populations, improving mental health support on a global scale.",
        "Hosting national and international events to educate individuals of all ages about mental health.",
        "Establishing regular mental health events in local communities to provide consistent support and resources.",
    ]

    let carousel_images = [
        {
            "id" : 1,
            "path" : carousel1,
            "alt": "This is a class with many children who seem to be discussing with each other",
        },
        {
            "id" : 2,
            "path" : carousel2,
            "alt": "This is a class where a senior seems to explaining something to the juniors",
        },
        {
            "id" : 3,
            "path" : carousel3,
            "alt": "Five students are hanging out with each other",
        },
        {
            "id" : 4,
            "path" : carousel4,
            "alt": "A smiling man",
        },
    ]

    let carousel_logos = [
        {
            "id" : 1,
            "path" : logo1,
            "alt": "ATHENA By Women In STEM (ABWIS) Logo",
        },
        {
            "id" : 2,
            "path" : logo2,
            "alt": "Envision Research Competition (EnvisionRC) Logo",
        },
        {
            "id" : 3,
            "path" : logo3,
            "alt": "The Harvard Brain Logo",
        },
        {
            "id" : 4,
            "path" : logo4,
            "alt": "National Alliance on Mental Illness (NAMI) Logo",
        },
        {
            "id" : 5,
            "path" : logo5,
            "alt": "Talaria Summer Institute Logo",
        },
    ]

</script>

<NavigationBar />
<div>
    <div data-testid="partners-activities">
        <h1>Collaborate with mercuri.world.</h1>
        <p>
            At <strong>mercuri.world</strong>, we work with a wide variety of organizations, including hospitals and clinics, 
            colleges and high schools, women&apos;s shelters and homeless shelters, and immigrant and community 
            organizations to offer mental health screenings and support to non-English-speaking, low-income, 
            and underserved communities. Our chapters collaborate closely with these community organizations 
            to spread awareness of and donate <strong>mercuri.world</strong>&apos;s culturally responsive resources that promote 
            mental well-being.
        </p>
        <p>Our collaborative activities may include:</p>
        <ul>
            {#each activities as activity }
                <li>{activity}</li>
            {/each}
        </ul>
        <p>These efforts ensure that marginalized groups receive much-needed mental health care and education.</p>
    </div>
   
    <ImagesCarousel images={carousel_images} />

    <div data-testid="partners-benefits">
        <h1>Why partner with mercuri.world?</h1>
        <p>
            Through a partnership with <strong>mercuri.world</strong>, you can amplify your impact in international and low-income communities, 
            increasing mental health awareness and providing access to crucial resources. By working together, we can amplify 
            our efforts to create lasting change and ensure that mental health resources reach those who need them most.
        </p>
        <h2> A partnership with mercuri.world can lead to …</h2>
        <ul>
            {#each benefits as benefit}
                <li>{benefit}</li>
            {/each}
        </ul>
        <h2>
            For collaboration requests, please email: <a href="mailto:{collab_email}">{collab_email}</a>
        </h2>
    </div>
    <div>
        <h1>Our Partners</h1>
        <p>Learn more about how you can support global mental health equity by partnering with us here</p>
        <ImagesCarousel images={carousel_logos} />
    </div>
</div>
<Footer />