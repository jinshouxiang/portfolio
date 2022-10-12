<template>
  <div id="gallery_container">
    <input id="gallery_searchbar" type="text" placeholder="ギャラリーを検索" @input="UpdateCards" v-model="search_text" />
    <div id="galleries">
      <div class="card" v-for="card in disp_cards" :key="card.id">
        <img class="card_img" :src="card.image" />
        <div class="card_title">
          <a :href="card.url">{{ card.title }}</a>
        </div>
        <div class="card_description">
          {{ card.description1 }}<br>
          {{ card.description2 }}<br>
          {{ card.description3 }}
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
          title: "洋装の金守 デモサイト",
          description1: "実家の実店舗のデモサイトをデザイン・コーディングしました。Google Mapでビジネスオーナーに設定したところ、スマホから8割見られていたのでスマホメインでつくりました。",
          description2: "使用言語：HTML5,CSS3,JavaScript",
          description3: "制作期間：1週間",
          image: require("../assets/kanamori store.png"),
          url: "https://kanamon.conohawing.com/",
        },
        {
          title: "IIP金沢 デモサイト",
          description1: "Lightningのテーマを使い、IIP金沢示野校のデモサイトを作成しました。ファーストビューで離脱率を下げないためにキャッチコピーを考え「習って見たい」となるようにしました。",
          description2: "使用言語：HTML5,CSS3,WordPress",
          description3: "制作期間：1週間",
          image: require("../assets/IIP demo.png"),
          url: "https://kanamon14.com/",
        },
        {
          title: "ポートフォリオサイト",
          description1: "成果１の説明",
          image: require("../assets/sho_profile.jpg"),
          url: ""
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
            this.cards[Target_Key].title.indexOf(this.search_text) > -1 ||
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
#gallery_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #gallery_searchbar {
    width: 60vh;
    height: 40px;
    padding: 0 30px;
    margin: 20px 0;
    border: 1px solid #aaa;
    border-radius: 999px;
    outline: none;
  }

  @media screen and (max-width: 400px) {
    #gallery_searchbar {
      width: 300px;
      height: 40px;
      padding: 0 10px;
      margin: 10px 0;
    }
  }

  #galleries {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .card {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0px 2px 8px -4px #777777;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      .card_img {
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }

      .card_description {
        background-color: #fff;
        width: 100%;
        height: 250px;
        padding: 10px;
        margin-bottom: 50px;
        font-size: 15px;
        font-weight: 900;
        position: absolute;
        opacity: 0;
        transition: 0.3s;
        line-height: 1.7rem;
        text-align: left;

        &:hover {
          opacity: 1;
          background-color: rgba($color: #fff, $alpha: 0.9);
        }
      }

      .card_title {
        width: 100%;
        height: 50px;
        font-size: 17px;
        font-weight: 900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .card_title a {
        text-decoration: none;
        color: #2c3e50;

        &:hover {
          color:#639bb7 ;
        }
      }
    }
  }
}
</style>
