<template>
  <div>
    <b-button
      variant="warning"
      size="sm"
      class="my-2 mx-2 my-sm-0 px-3 py-2"
      type="submit"
      v-b-modal="'SignUpModal'"
    >
      Regístrate
    </b-button>
    <b-modal 
      id="SignUpModal" 
      ref="modal" 
      title="Regístrate a Sa-Tour-Now!" 
      hide-footer
      body-bg-variant="dark"
      body-text-variant="light"
      header-bg-variant="dark"
      header-text-variant="light"
      hide-header-close
    >
      <form ref="form">
        <b-form-group
          label-for="Usuario-DatosPersonales"
        >
          <b-form-input
            :placeholder="'Nombre'"
            type="text"
            class="form-control my-3"
            id="SignInComp_firstName"
            aria-describedby="emailHelp"
            required
            v-model="user.firstName"
          ></b-form-input>
          <b-form-input
            :placeholder="'Apellido'"
            type="text"
            class="form-control my-3"
            id="SignInComp_lastName"
            aria-describedby="emailHelp"
            required
            v-model="user.lastName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-for="Usuario-input"
        >
          <b-form-input
            :placeholder="'Correo electrónico'"
            type="email"
            class="form-control my-3"
            id="LogInComponent_Username"
            aria-describedby="emailHelp"
            required
            v-model="user.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-for="Password-input"
        >
          <b-form-input
            :placeholder="'Contraseña'"
            type="password"
            class="form-control my-3"
            id="LogInComponent_Password"
            v-model="user.password"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <div style="text-align: end; margin-top: 1rem">
        <b-button @click.stop.prevent="SignUpUser" variant="outline-primary" class="sign_btn"
          >Guardar datos</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { mapState } from "vuex";

export default {
  name: "SignUpComp",
  data() {
    return { user: { email: "", password: "", firstName: "", lastName: "" } };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(["myFirestore"]),
  },
  methods: {
    async SignUpUser() {
      try {
        const { email, password, firstName, lastName } = this.user;
        const auth = getAuth();
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          await createUserWithEmailAndPassword(auth, email, password);
          await addDoc(collection(this.myFirestore, "saturnousers"), {
            userFirstName: firstName,
            userLastName: lastName,
            user_email: email,
          }),
          this.$router.push("/users");
          } else {
              console.log("Ingrese correo válido");
            }
      } catch {
          console.log("Este usuario ya existe");
        }  
    },
  },
};
</script>

<style scoped>
.sign_btn {
  background-color: purple;
  border: 0px solid;
  color: white;
}
.sign_btn:hover {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
.sign_btn:focus {
  background-color: purple;
  border: 0px solid;
  border-radius: 0px;
  color: #fff;
}
</style>