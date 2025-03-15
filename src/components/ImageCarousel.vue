<template>
  <div class="image-carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(${offset}%)` }">
      <div v-for="(image, index) in images" :key="index" class="carousel-item">
        <img :src="image" alt="Orchestra Image" />
      </div>
    </div>
    <button class="carousel-control prev" @click="changeSlide(-1)">&#10094;</button>
    <button class="carousel-control next" @click="changeSlide(1)">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data() {
    return {
      images: [
        require("@/assets/images/gallery/IMG-20241116-WA0000.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0001.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0002.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0003.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0004.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0005.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0006.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0007.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0008.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0009.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0010.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0011.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0012.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0013.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0014.jpg"),
        require("@/assets/images/gallery/IMG-20241116-WA0015.jpg")
      ],
      currentIndex: 0,
    };
  },
  computed: {
    offset() {
      return -this.currentIndex * 100; /// this.images.length;
    },
  },
  methods: {
    changeSlide(direction) {
      const totalItems = this.images.length;
      this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
    },
    
    handleKeyup(event) {
      if (event.key === 'ArrowLeft') {
        this.changeSlide(-1);
      } else if (event.key === 'ArrowRight') {
        this.changeSlide(1);
      }
    }
  },
  mounted() {
    window.addEventListener('keyup', this.handleKeyup);
  },
  beforeUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }
}
</script>

<style scoped>
.image-carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover; /* Ensures the image covers the carousel area without distortion */
}

.carousel-control {
  position: fixed;
  top: 50%;
  transform: translateY(50%);
  background-color: rgba(0, 0, 0, 0.3); /* Transparent background */
  color: white;
  border: none;
  padding: 20px; /* Increase size */
  cursor: pointer;
  font-size: 24px; /* Increase font size */
  z-index: 10; /* Ensure buttons are above images */
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>
