<template>
  <div id="profile_container">
    <img id="profile_img" src="../assets/sho_profile.jpg" alt="" />
    <h2>金守 翔</h2>
    <div id="profile_description">
      <p class="profile_text">
        {{ Birthdate.year }}年{{ Birthdate.month }}月{{ Birthdate.day }}日産まれ
        {{ Age }}歳
      </p>
      <p class="profile_text">{{ Position }}</p>
      <div id="profile_intro" class="profile_text">
        <p>
          平成生まれ、石川育ち。石川の大学に進学。<br>
          前職は工場でマシンオペレーターをしていましたが、<br>
          心機一転、プログラミングを学び始めました。<br>
          現在は職業訓練に通っており、お客様に寄り添いながら<br>
          WEBサイト制作ができるよう日々勉強しています。
        </p>
      </div>
    </div>
    <div id="socials">
      <a href="https://twitter.com/scratchpyonkey" class="social_icon">
        <!-- <img src="../assets/SNS1_logo.svg" /> -->
      </a>
      <a href="SNSリンク" class="social_icon">
        <!-- <img src="../assets/SNS2_logo.png" /> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Age: 0,
      Birthdate: {
        day: 15,
        month: 11,
        year: 1995,
      },
      Position: "",
    };
  },
  created() {
    this.InitAge();
    this.InitPosition();
  },
  methods: {
    InitAge() {
      let birthdate = new Date(
        this.Birthdate.year,
        this.Birthdate.month - 1,
        this.Birthdate.day
      );
      let today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      if (
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
          today.getDate() < birthdate.getDate())
      ) {
        age--;
      }
      this.Age = age;
    },
    InitPosition() {
      let grade = this.Age - 21;
      this.Position = "社会人" + grade + "年目";
    },
  },
};
</script>

<style lang="scss" scoped>
#profile_container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #profile_img {
    width: 300px;
    height: 300px;
    border-radius: 100px;
    margin: 15px;
    object-fit: cover;
  }
  @media screen and (max-width: 400px) {
    #profile_img {
      width: 200px;
      height: 200px;
      border-radius: 75px;
    }
  }
  #profile_description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .profile_text {
      font-size: 19px;
    }
    @media screen and (max-width: 400px) {
      .profile_text {
        padding: 10px 25px;
      }
    }
  }

  #socials {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .social_icon {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      margin: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        transition: 0.3s;
        &:hover {
          box-shadow: 0px 2px 10px -2px #777777;
        }
      }
    }
  }
}
</style>
