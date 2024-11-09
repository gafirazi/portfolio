<template>
  <div class="home-projects">
    <div class="home-projects__wrapper">
      <div class="home-projects__title">
        Crafted Gems,
      </div>
      <div class="home-projects__cards cards">
        <div
          v-for="project in projects"
          class="cards__card card"
          @click="toggleModal(project)"
        >
          <div class="card__image-wrapper">
            <img
              :src="project.image"
              alt=""
              class="card__image"
            >
          </div>
          <div class="card__info">
            <div class="card__title">
              {{ project.name }}
            </div>
            <a
              :href="project.link"
              target="_blank"
              class="card__link"
            >

              {{ project.link }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <modal
      v-if="visibleModal"
      @close="toggleModal"
    >
      <template #title>
        {{ selectedProject.name }}
      </template>
    </modal>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, reactive } from 'vue'

const Modal = defineAsyncComponent(() => import('@/components/general/Modal.vue'))

const projects = [
  {
    name: 'Internusa Berkah Mandiri',
    image: '/logo-ibm.png',
    link: 'https://internusa-epc.com'
  },
  {
    name: 'Malang Medina City',
    image: '/logo-sid.png',
    link: 'https://sidmmc.com'
  },
  {
    name: 'Biotis Staff',
    image: '/logo-biotis.png',
    link: 'https://biotis-staff.com'
  },
  {
    name: 'AKT Living Academy',
    image: '/logo-akt.png',
    link: 'https://aktlivingacademy.com'
  },
  {
    name: 'Laywook',
    image: '/logo-laywook.png',
  },
  {
    name: 'Portfolio',
    image: '/logo-gafi.png',
    link: 'https://gafirazi.com'
  }
]

const visibleModal = ref(false)
let selectedProject = reactive({})

const toggleModal = (project = {}) => {
  selectedProject = project
  visibleModal.value = !visibleModal.value
}
</script>

<style lang="scss" scoped>
  .home-projects {
    background-color: $main-color;

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
      color: $sub-color;
      margin-bottom: 50px;
    }

    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;

      .card {
        background-color: white;
        width: 30%;
        transition: 0.2s ease-in;
        cursor: pointer;

        &:hover {
          scale: 1.04;
        }

        &__image-wrapper {
          background-color: #F9F8FD;
          padding: 40px;
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

        &__link {
          color: $main-color;
          text-decoration: none;
        }
      }
    }
  }
</style>