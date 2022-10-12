<template>
  <div id="app">
    <h1>Sho's Portfolio</h1>

    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/">Profile</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/skills">Skills</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.fade {
  &-enter {
    transform: translate(0,-50px);
    opacity: 0;

    &-to {
      opacity: 1;
    }

    &-active {
      transition: all 1s 0s ease;
    }
  }

  &-leave {
    transform: translate(0, 0);
    opacity: 1;

    &-to {
      transform: translate(0,50px);
      opacity: 0;
    }

    &-active {
      transition: all .5s 0s ease;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-size: 20px;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
      font-weight: bold;
    }
  }
}
</style>
