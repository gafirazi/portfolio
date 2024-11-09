<template>
  <div class="home-introduction">
    <div class="home-introduction__wrapper">
      <div class="home-introduction__info info">
        <div class="info__title">
          Frontend Developer.
        </div>
        <div class="info__subtitle">
          Crafting frontend experiences with passion and heart, bringing ideas to life pixel by pixel.
        </div>
        <div class="info__contact-me">
          <button class="info__contact-me-button">
            Let's Make Magic
          </button>
        </div>
      </div>
      <div class="home-introduction__profile profile">
        <img
          src="/face.png"
          alt="profile"
          class="profile__image"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .home-introduction {
    width: 100%;
    // height: 100vh;
    display: flex;
    background-image: linear-gradient(90deg, $main-color 67%, $sub-color 33%);

    &__wrapper {
      width: 1000px;
      margin: auto;
      display: flex;
      // justify-content: center;
      align-items: center;
      padding: 6.8% 0;
      gap: 20%;
    }

    .info {
      width: 25vw;
      flex-grow: 0;
      flex-shrink: 0;

      &__title {
        font-size: 70px;
        color: $sub-color;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 30px;
      }

      &__subtitle {
        font-size: 24px;
        line-height: 1.5;
        color: white;
        margin-bottom: 30px;
      }

      &__contact-me {
        &-button {
          border: 2px solid $sub-color;
          background-color: $main-color;
          color: $sub-color;
          padding: 18px 40px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          font-size: 16px;

          &:hover {
            box-shadow: 0 0.8em 0.8em -0.2em $sub-color;
            transform: translateY(-0.5em);
          }
        }
      }
    }

    .profile {
      &__image {
        width: 120%;
      }
    }
  }
</style>