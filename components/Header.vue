<template>
    <div class="flex items-center justify-between sm:pl-[30px] pl-[20.5px] md:pt-[36px] md:pl-[44px] pt-[26px] lg:pl-[50px] lg:pt-[38px]">
        <div class="flex items-center xl:gap-[19.96px] sm:gap-[10px] md:gap-[12px] gap-[7.6px] lg:gap-[15px]">
            <div class="lg:aspect-[4/3] md:aspect-[4/3] md:w-[40px] w-[28px] aspect-[4/3] w-[18.29px] lg:w-[47.07px]">
                <nuxt-img class="w-full h-full" src="/img/Logo.png"></nuxt-img>
            </div>
            <h3 class="font-subjectivity text-[11.66px] sm:text-[15px] md:text-[18px] md:leading-[15px] leading-[12.01px] lg:leading-[30.9px] lg:text-[20px] italic font-bold xl:text-[30px]">Mindfulify</h3>
        </div>
        <div class="hidden lg:block">
            <ul class="flex items-center font-clash lg:gap-[30px] lg:text-[20px] font-normal xl:text-[30px] xl:gap-[30px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div class="hidden lg:block lg:pr-[100.96px]">
            <button class="flex rounded-custom1 items-center gap-[8px] py-[9px] px-[8px] bg-button font-clash lg:text-[20px] lg:leading-[26px] xl:text-[30px] leading-[36.9px]">
                Download <div class="xl:aspect-[4/3] w-[18px] h-[18px]"><nuxt-img class="w-full h-full" src="/icons/download.svg"></nuxt-img></div>
            </button>
        </div>
        <div class="lg:hidden pr-[18.56px] md:pr-[25px] sm:pr-[20px]">
            <button 
            @click="openNav"
            class="px-[13.6px] px-[14.5px] py-[5px] sm:text-[15px] rounded-custom2 md:text-[18px] md:px-[16px] md:py-[7px] text-[11.66px] leading-[14.34px] font-clash py-[3.5px] bg-button">
                Menu
            </button>
        </div>
        <div 
        class="lg:hidden fixed top-0 right-0 h-screen bg-button w-[200px] transform transition-transform duration-500 ease-in-out"
        :class="isNavOpen ? 'translate-x-0': 'translate-x-full'">
        <p @click="openNav">Close</p>
        </div>
    </div>
</template>



<script setup>
    import { ref } from 'vue'

    const isNavOpen = ref(false)

    const openNav = ()=>{
        isNavOpen.value = !isNavOpen.value
    }
</script>










