<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__title">
        Hit me up
      </div>
      <div class="footer__column column">
        <div class="column__contacts">
          <div class="column__contact">
            gafiraziirfandi@gmail.com
          </div>
          <div class="column__contact">
            linkedin.com/id/gafiirfandi
          </div>
        </div>
        <div class="column__navigation">
          <div class="column__navigation-item">
            Crafted Gems
          </div>
          <div class="column__navigation-item">
            My Résumé
          </div>
        </div>
      </div>
      <div class="footer__line"></div>
      <div class="footer__bottom bottom">
        <div class="bottom__name">
          © Gafirazi Irfandi {{ (new Date()).getFullYear() }}
        </div>
        <div class="bottom__column column">
          <div class="column__social">
            GH
          </div>
          <div class="column__social">
            LN
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .footer {
    background-color: #362a82;
    color: $sub-color;

    &__wrapper {
      width: 1000px;
      margin: auto;
      // display: flex;
      gap: 30px;
      // justify-content: center;
      padding: 20vh 0;
    }

    &__title {
      color: white;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 20px;
    }

    .column {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;

      &__contacts, &__navigation {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 40%;
      }

      &__contact, &__navigation-item {
        font-size: 24px;
      }
    }

    &__line {
      height: 1px;
      width: 100%;
      background-color: $sub-color;
      margin-bottom: 30px;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__name {
        font-size: 30px;
      }

      .column {
        display: flex;
        gap: 20px;
        margin: 0;

        &__social {
          font-size: 24px;
        }
      }
    }
  }
</style>