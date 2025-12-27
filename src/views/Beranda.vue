<template>
  <div class="landing-page">
    <Navbar/>
    <main>
    <WelcomeHeroSection :menus="menus" />
    <AboutSection/>
    <WelcomeMenuSection/>
    <WelcomeTestiSection/>
    <WelcomeSosmedSection/>
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import WelcomeHeroSection from "../components/WelcomeHeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import WelcomeMenuSection from "../components/WelcomeMenuSection.vue";
import WelcomeTestiSection from "../components/WelcomeTestiSection.vue";
import WelcomeSosmedSection from "../components/WelcomeSosmedSection.vue";
import Footer from "../components/Footer.vue";



defineProps({
  menus: Array,
});
</script>