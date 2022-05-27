<template>
  <div>
    <h2>Regístrate en Sa-Tour-Now!</h2>
    <form>
      <div class="mb-3">
        <label for="SignUpComponent_Username" class="form-label"
          >Correo Electrónico</label
        >
        <input
          type="email"
          class="form-control"
          id="SignUpComponent_Username"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
        <div id="emailHelp" class="form-text">
          JAMÁS COMPARTIREMOS TUS DATOS CON EL BIG DATA
        </div>
      </div>
      <div class="mb-3">
        <label for="SignUpComponent_Password" class="form-label"
          >Contraseña</label
        >
        <input
          type="password"
          class="form-control"
          id="SignUpComponent_Password"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="SignUpUser">
        REGÍSTRAME
      </button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "SignUpComp",
  data() {
    return { user: { email: "", password: "" } };
  },
  methods: {
    async SignUpUser() {
      try {
        const { email, password } = this.user;
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        this.$router.push("/AboutMe");
      } catch (error) {
        alert('Este usuario ya existe')
      }
    },
  },
};
</script>
