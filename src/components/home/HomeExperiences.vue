<template>
  <div class="home-experiences">
    <div class="home-experiences__wrapper">
      <div class="home-experiences__title">
        Where I've Made an Impact,
      </div>
      <div class="home-experiences__cards cards">
        <div
          v-for="(experience, index) in experiences"
          class="cards__card card"
          @click="updateSelectedExperienceIndex(index)"
        >
          <div class="card__image-wrapper">
            <img
              :src="experience.image"
              alt=""
              class="card__image"
            >
          </div>
          <div class="card__info">
            <div class="card__title">
              {{ experience.title }}
            </div>
            <div class="card__description">
              {{ experience.company }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedExperienceIndex = ref(null)
const experiences = [
  {
    company: 'Blibli',
    title: 'Software Engineer',
    image: '/logo-blibli.png'
  },
  {
    company: 'OVO',
    title: 'Frontend Engineer Intern',
    image: '/logo-ovo.png',
  },
  {
    company: 'DOKU',
    title: 'Software Engineer Intern',
    image: '/logo-doku.png',
  },
  {
    company: 'AKT Living Academy',
    title: 'Web Developer',
    image: '/logo-akt.png',
  },
  {
    company: 'Sinergia Worldwide Education',
    title: 'Programming Lecturer',
    image: '/logo-sinergia.jfif',
  }
]

const updateSelectedExperienceIndex = (index) => {
  selectedExperienceIndex.value = index
}
</script>

<style lang="scss" scoped>
  .home-experiences {
    // background-color: $main-color;
    background-color: #F9F9F9;

    &__wrapper {
      width: 1000px;
      margin: auto;
      // display: flex;
      gap: 30px;
      // justify-content: center;
      padding: 10vh 0;
    }

    &__title {
      font-size: 50px;
      font-weight: 700;
      // color: $sub-color;
      color: $main-color;
      margin-bottom: 50px;
    }

    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;

      .card {
        background-color: white;
        width: calc(100% / 2 - 20px);
        transition: 0.2s ease-in;
        cursor: pointer;
        display: flex;
        align-items: center;
        box-shadow: 3px 5px 48px -16px rgba(214,214,214,0.74);

        &:hover {
          scale: 1.04;
        }

        &__image-wrapper {
          // background-color: #F9F8FD;
          // padding: 40px;
          padding-left: 20px;
          display: flex;
          justify-content: center;
        }

        &__image {
          height: 100px;
        }

        &__info {
          padding: 20px;
          height: max-content;
        }

        &__title {
          font-weight: 600;
          color: $main-text-color;
          margin-bottom: 20px;
        }

        &__description {
        }
      }
    }
  }
</style>