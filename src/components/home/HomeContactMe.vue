<template>
  <div class="home-contact-me">
    <div class="home-contact-me__wrapper">
      <div class="home-contact-me__title">
        Let's make magic!
      </div>
      <div class="home-contact-me__subtitle">
        Hit me up if you got a question or proposal
      </div>
      <div class="home-contact-me__form form">
        <div class="form__row row">
          <div class="row__column column">
            <div class="column__label">
              Name.
            </div>
            <input
              type="text"
              placeholder="Type in your name"
              class="column__input"
            >
          </div>
          <div class="row__column column">
            <div class="column__label">
              Email.
            </div>
            <input
              type="text"
              placeholder="Type in your email"
              class="column__input"
            >
          </div>
        </div>
        <div class="form__row row">
          <div class="row__column column">
            <div class="column__label">
              Message.
            </div>
            <textarea
              placeholder="Type in your message"
              class="column__input--textarea"
            >
            </textarea>
          </div>
        </div>
        <button class="form__button">
          Shoot
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .home-contact-me {
    background-color: #F9F9F9;

    &__wrapper {
      width: 1000px;
      margin: auto;
      // display: flex;
      // gap: 30px;
      // justify-content: center;
      padding: 10vh 0;
    }

    &__title {
      font-size: 50px;
      font-weight: 700;
      color: $main-color;
      text-align: center;
      margin-bottom: 30px;
    }

    &__subtitle {
      font-size: 30px;
      color: $main-text-color;
      text-align: center;
      margin-bottom: 50px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .row {
        display: flex;
        gap: 20px;

        .column {
          flex-grow: 1;

          &__label {
            color: $main-shaded-text-color;
            font-weight: 300;
          }
          
          &__input, &__input--textarea {
            width: 100%;
            box-sizing: border-box;
            border: none;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 40px;
            border-bottom: 1px solid $main-text-color;
            color: $main-text-color;
            font-size: 16px;
            background-color: transparent;
            
            &::placeholder {
              color: $main-text-color;
              opacity: 0.7;
            }
            
            &:focus {
              outline: none;
              color: $main-color;
              border-color: $main-color;
            }
          }
        }
      }

      &__button {
        height: fit-content;
        border: 1px solid $main-color;
        width: 400px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        background-color: #F9F9F9;
        padding: 10px 30px;
        padding: 20px 20px;
        color: $main-color;
        font-weight: 500;
        cursor: pointer;
        font-size: 16px;
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