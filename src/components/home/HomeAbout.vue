<template>
  <div class="home-about">
    <div class="home-about__wrapper">
      <div class="home-about__info info">
        <div class="info__title">
          Get to Know Me!
        </div>
        <div class="info__description">
          I am a Software Engineer at Blibli with a Computer Science degree from Universitas Indonesia, passionate about frontend engineering and business strategy. I bridge the gap between technology and business by gathering product requirements, negotiating project scopes, and creating engaging user interfaces. This enables me to align development efforts with organizational goals, ensuring solutions meet user and stakeholder expectations.
          <br><br>
          Committed to enhancing user experiences and continually improving my skills in both frontend development and business processes. With passion and heart, I strive to deliver functional solutions that result in user satisfaction. I look forward to contributing to innovative projects that effectively integrate technology and business.
        </div>
      </div>
      <div class="home-about__skills skills">
        <div
          v-for="skill in skills"
          class="skills__skill"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'JS',
  'Vue',
  'React',
  'Vuex/Pinia',
  'Flutter',
  'Python',
  'Java'
]
</script>

<style lang="scss" scoped>
  .home-about {
    background-color: #F9F9F9;
    
    &__wrapper {
      width: 1000px;
      margin: auto;
      display: flex;
      gap: 30px;
      // justify-content: center;
      padding: 10vh 0;
    }

    .info {
      width: 60%;
      flex-grow: 0;
      flex-shrink: 0;


      &__title {
        font-size: 50px;
        font-weight: 700;
        color: $main-color;
      }

      &__description {
        margin-top: 20px;
        color: $main-text-color;
        line-height: 1.8;
      }
    }

    .skills {
      padding-top: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      height: 100%;

      &__skill {
        height: fit-content;
        border: 1px solid $main-color;
        padding: 10px 30px;
        color: $main-color;
        font-weight: 500;
        cursor: pointer;
        -webkit-transition: ease-in-out 0.5s;
        -moz-transition: ease-in-out 0.5s;
        transition: ease-in-out 0.5s;
        box-shadow: inset 0 0 0 0 $main-color;

        &:hover {
          box-shadow: inset 400px 0 0 0 $main-color;
          color: white;
        }
      }
    }
  }
</style>