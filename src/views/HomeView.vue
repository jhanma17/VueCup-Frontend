<template>
  <div class="home-view">
    <v-row class="ma-0">
      <img alt="VueCup Logo" src="@/assets/VueCupLogo.svg" class="logo" />
    </v-row>

    <div class="login-container">
      <img
        v-if="$vuetify.display.lgAndUp"
        src="https://www.seonetdigital.com/wp-content/uploads/2023/04/seonet-disenoweb-04-800x800.png"
        alt="web design illustration"
        class="login-image"
      />
      <div class="login-form">
        <span class="login-title">
          {{
            formType == "login" ? "Login to my account" : "Create an account"
          }}
        </span>
        <span class="login-body">
          VueCup is the design tool for teams working with vue
        </span>
        <v-row justify="space-between">
          <v-col cols="4">
            <v-btn variant="tonal" size="x-large" rounded="lg" block>
              <div class="auth-btn">
                <v-img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  class="auth-img"
                ></v-img>
                <span class="d-flex">Google</span>
              </div>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn variant="tonal" size="x-large" rounded="lg" block>
              <div class="auth-btn">
                <v-icon class="auth-img" size="25"> mdi-github </v-icon>
                <span class="d-flex">Github</span>
              </div>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn variant="tonal" size="x-large" rounded="lg" block>
              <div class="auth-btn">
                <v-img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                  class="auth-img"
                ></v-img>
                <span class="d-flex">Github</span>
              </div>
            </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-form v-model="validForm">
          <template v-if="formType == 'signup'">
            <span class="login-label"> NAME </span>

            <v-text-field
              v-model="name"
              variant="solo"
              label="Name"
              class="mt-3 mb-5"
              flat
              rounded="lg"
              single-line
              hide-details="auto"
              :rules="nameRules"
            >
            </v-text-field>
          </template>

          <span class="login-label"> EMAIL </span>

          <v-text-field
            v-model="email"
            variant="solo"
            label="Email"
            class="mt-3 mb-5"
            flat
            rounded="lg"
            single-line
            hide-details="auto"
            :rules="emailRules"
          >
          </v-text-field>

          <span class="login-label"> PASSWORD </span>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            variant="solo"
            label="Password"
            class="mt-3 mb-3"
            flat
            rounded="lg"
            single-line
            hide-details="auto"
          >
            <template v-slot:append-inner>
              <v-icon
                :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click="showPassword = !showPassword"
              />
            </template>
          </v-text-field>

          <v-row v-if="formType == 'login'" class="ma-0" justify="end">
            <a class="forgot-password"> Forgot Password? </a>
          </v-row>
        </v-form>

        <v-btn
          size="x-large"
          rounded="lg"
          block
          theme="dark"
          :disabled="!validForm"
          :color="validForm ? '#7efff5' : '#203833'"
          @click="handleSubmit()"
        >
          <span class="login-btn">
            {{ formType == "login" ? "Login" : "Sign up" }}
          </span>
        </v-btn>

        <v-divider></v-divider>

        <v-row class="ma-0" justify="center">
          <span class="login-body">
            {{
              formType == "login"
                ? "Don’t have an account?"
                : "Already have an account?"
            }}
            <a class="forgot-password" @click="switchForm()">
              {{ formType == "login" ? "Sign up" : "Login" }}
            </a>
          </span>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      showPassword: false,
      validForm: false,
      formType: "login",
    };
  },
  computed: {
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ];
    },
    passwordRules() {
      return [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Password must be at least 8 characters",
      ];
    },
    nameRules() {
      return [
        (v) => !!v || "Name is required",
        (v) => v.length >= 3 || "Name must be at least 3 characters",
      ];
    },
  },
  methods: {
    switchForm() {
      this.formType = this.formType === "login" ? "signup" : "login";
    },
    handleSubmit() {
      if (this.formType === "login") {
        this.login();
      } else {
        this.signup();
      }
    },
    async login() {
      try {
        const response = await this.axios({
          method: "POST",
          url: "/authentication/login",
          data: {
            email: this.email,
            password: this.password,
          },
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async signup() {
      try {
        const response = await this.axios({
          method: "POST",
          url: "/authentication/sign-up",
          data: {
            name: this.name,
            email: this.email,
            password: this.password,
          },
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.home-view {
  height: 100vh;
  width: 100%;
}
.logo {
  width: 200px;
  height: 80px;
}
.login-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 80px);
  margin: 0 5vw;
}
.login-image {
  width: 35vw;
}
.login-form {
  display: grid;
  grid-template-rows: 1fr auto;
  height: fit-content;
  gap: 2rem;
  width: 100%;
  max-width: 30rem;
}
.login-title {
  font-size: 1.9rem;
  font-weight: 400;
  color: white;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
}
.login-body {
  font-size: 1.1rem;
  font-weight: 400;
  color: #8f9da3;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
}
.auth-btn {
  display: flex;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
  text-transform: none;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  letter-spacing: 0.5px;
}
.auth-img {
  display: flex;
  width: 25px;
  height: 25px;
  margin-right: 8px;
}
.login-label {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
}
.forgot-password {
  font-size: 1.1rem;
  font-weight: 400;
  color: #7efff5;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
  text-align: right;
}
.forgot-password:hover {
  text-decoration: underline;
  background: none;
  cursor: pointer;
}
.login-btn {
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.2;
  font-family: "Work Sans", sans-serif;
  text-transform: none;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  letter-spacing: 0.5px;
  color: black;
}
.disabled-login-btn {
  background-color: #203833;
}
</style>