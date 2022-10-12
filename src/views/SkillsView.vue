<template>
  <div id="skill_container">
    <div id="galleries">
      <div class="card" v-for="card in disp_cards" :key="card.id">
        <img class="card_img" :src="card.image" />
        <div class="card_description">
          <div class="card_text">
            {{ card.description1 }}<br />
            {{ card.description2 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_text: "",
      disp_cards: [],
      cards: [
        {
          description1: "HTML5",
          description2: "★★★★☆",
          image: require("../assets/html5-original.svg"),
        },
        {
          description1: "CSS5",
          description2: "★★★☆☆",
          image: require("../assets/css3-original.svg"),
        },
        {
          description1: "JavaScript",
          description2: "★★★☆☆",
          image: require("../assets/javascript.svg"),
        },
        {
          description1: "PHP",
          description2: "★★☆☆☆",
          image: require("../assets/php.svg"),
        },
        {
          description1: "WordPress",
          description2: "★★★☆☆",
          image: require("../assets/wordpress-icon.svg"),
        },
        {
          description1: "Vue.js",
          description2: "★☆☆☆☆",
          image: require("../assets/vue.svg"),
        },
        {
          description1: "node.js",
          description2: "★☆☆☆☆",
          image: require("../assets/nodejs.svg"),
        },
      ],
    };
  },
  created() {
    this.UpdateCards();
  },
  methods: {
    UpdateCards() {
      this.disp_cards = [];
      if (this.search_text != "") {
        for (let Target_Key in this.cards) {
          if (
            this.cards[Target_Key].description.indexOf(this.search_text) > -1
          ) {
            this.disp_cards.push(this.cards[Target_Key]);
          }
        }
      } else {
        this.disp_cards = this.cards;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#skill_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

//   @media screen and (max-width: 400px) {
//     #skills_container #cards_container .card[data-v-ebf7afd4] {
//     width: 140px;
//     height: 140px;
//     margin: 10px;
//     border-radius: 20px;
//     padding: 25px;
// }
//   }

  #galleries {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .card {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      box-shadow: 0px 5px 10px -4px #000000;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      .card_img {
        width: 60%;
        height: 60%;  
        object-fit: contain;
      }

      .card_description {
        background-color: #fff;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        font-size: 15px;
        font-weight: 900;
        position: absolute;
        opacity: 0;
        transition: 0.3s;
        line-height: 1.7rem;
        text-align: center;

        &:hover {
          opacity: 1;
          background-color: rgba($color: #fff, $alpha: 0.9);
        }
      }

      .card_text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
      }
    }
  }
}
</style>
