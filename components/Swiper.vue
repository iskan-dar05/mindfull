<template>
    <div class="sm:mt-[50px] mt-[40px]">
        <div class="mx-auto font-semibold sm:w-[300px] md:w-[400px] w-[254px] text-center xl:w-[688px]">
            <h2 class="xl:text-[60px] text-[25px] leading-[31.5px] sm:text-[30px] md:text-[40px] xl:leading-[75.6px]">Our Network of <span class="font-extrabold">700+</span> licensed therapists</h2>
        </div>
        <div class="sm:mt-[82px] mt-[18px] xl:p-[10px] p-[4.17px] w-[355px] xl:w-[1272px] sm:w-[392px] md:w-[832px] lg:w-[832px] mx-auto flex justify-center items-center">
            <ClientOnly>
                <swiper-container ref="containerRef" 
                :breakpoints="swiperBreakpoints" 
                class="mx-auto w-full">
                    <swiper-slide
                        v-for="(slide, idx) in slides"
                        :key="idx"
                        >
                            <div class="sm:h-[578px] sm:px-[38px] px-[15.83px] py-[13.78px] rounded-custom4 sm:rounded-custom3 w-[163.33px] bg-black sm:py-[33px] sm:w-[392px]">
                                <div class="sm:w-[316px] w-[131.67px]">
                                    <img class="w-full" :src="slide.img" />
                                </div>
                                <div class="sm:mt-[24px] mt-[10px] flex flex-col gap-[2.08px] sm:w-[165px] sm:gap-[5px] font-outfit text-white">
                                    <p class="sm:text-[20px] text-[8.33px] leading-[10.5px] whitespace-nowrap font-semibold sm:leading-[25.2px] ">
                                        {{ slide.title }}
                                    </p>
                                    <span class="sm:text-[20px] text-[8.33px] leading-[10.5px] font-normal sm:leading-[25.2px]">{{ slide.spec }}</span>
                                </div>
                                <div class="sm:mt-[24px] mt-[10px] font-light text-customcolor">
                                    <p class="sm:text-[20px] text-[8.33px] leading-[10.5px] sm:leading-[25.2px]">{{ slide.content }}</p>
                                </div>
                                <div class="sm:mt-[24px] mt-[10px]">
                                    <span class="xl:text-[20px] text-[8.33px] md:text-[20px] leading-[10.5px] font-outfit font-light sm:leading-[25.2px] text-customcolor">
                                        {{ slide.content2 }}
                                    </span>
                                </div>
                            </div>
                        </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
import p1 from '@/assets/img/p1.png'
import p2 from '@/assets/img/p2.png'
import p3 from '@/assets/img/p3.png'

const slides = ref([
    { 
        title: "Dr. Maya Patel, 38",
        spec: "Psychiatrist",
        content: "Specializes in - Mood disorders, anxiety disorders", 
        content2: "“Compassionate, holistic approach, evidence-based treatments”",
        img: p1
    },
    { 
        title: "Dr. Maya Patel, 38", 
        spec: "Psychiatrist",
        content: "Specializes in - Mood disorders, anxiety disorders", 
        content2: "“Compassionate, holistic approach, evidence-based treatments”",
        img: p2
    },
    { 
        title: "Dr. Maya Patel, 38", 
        spec: "Psychiatrist",
        content: "Specializes in - Mood disorders, anxiety disorders", 
        content2: "“Compassionate, holistic approach, evidence-based treatments”",
        img: p3
    },
    { 
        title: "Dr. Maya Patel, 38",
        spec: "Psychiatrist", 
        content: "Specializes in - Mood disorders, anxiety disorders", 
        content2: "“Compassionate, holistic approach, evidence-based treatments”",
        img: p1
    },
    { 
        title: "Dr. Maya Patel, 38", 
        spec: "Psychiatrist",
        content: "Specializes in - Mood disorders, anxiety disorders", 
        content2: "“Compassionate, holistic approach, evidence-based treatments”",
        img: p1
    }
])


const swiperBreakpoints = ref({
    1536: { slidesPerView: 3},
    1280: { slidesPerView: 3},
    1024: { slidesPerView: 2},
    768: { slidesPerView: 2},
    600: { slidesPerView: 1},
    0: { slidesPerView: 2},
});


</script>