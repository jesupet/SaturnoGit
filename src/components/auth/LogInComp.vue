<template>
  <div>
    <h2>Ingreso de socios de Sa-Tour-Now!</h2>
    <form>
      <div class="mb-3">
        <label for="LogInComponent_Username" class="form-label"
          >Correo Electrónico</label
        >
        <input
          type="email"
          class="form-control"
          id="LogInComponent_Username"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="LogInComponent_Password" class="form-label"
          >Contraseña</label
        >
        <input
          type="password"
          class="form-control"
          id="LogInComponent_Password"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="LogInUser">
        INGRESAR
      </button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LogInComp",
  data() {
    return { user: { email: "", password: "" } };
  },
  methods: {
    async logInUser() {
      try {
        const { email, password } = this.user;
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        this.$router.push("/admin");
      } catch (error) {
        alert("Usuario y/o contraseña no reconocidos");
      }
    },
  },
};
</script>
