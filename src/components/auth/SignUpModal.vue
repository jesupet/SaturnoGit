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
    <b-modal id="SignUpModal" ref="modal" title="Regístrate a Sa-Tour-Now!" hide-footer>
      <form ref="form">
        <b-form-group
          label="Datos personales"
          label-for="Usuario-DatosPersonales"
          invalid-feedback="Se requieren su primer nombre y primer apellido"
        >
          <p>Nombre:</p>
          <b-form-input
            :placeholder="'Ingrese su nombre'"
            type="text"
            class="form-control"
            id="SignInComp_firstName"
            aria-describedby="emailHelp"
            required
            v-model="user.firstName"
          ></b-form-input>
          <p>Apellido:</p>
          <b-form-input
            :placeholder="'Ingrese su apellido'"
            type="text"
            class="form-control"
            id="SignInComp_lastName"
            aria-describedby="emailHelp"
            required
            v-model="user.lastName"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Email"
          label-for="Usuario-input"
          invalid-feedback="Se requiere un usuario válido"
        >
          <b-form-input
            :placeholder="'Ingrese su correo electrónico'"
            type="email"
            class="form-control"
            id="LogInComponent_Username"
            aria-describedby="emailHelp"
            required
            v-model="user.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :placeholder="'Ingrese su contraseña'"
          label="Contraseña"
          label-for="Password-input"
          invalid-feedback="Se requiere una contraseña"
        >
          <b-form-input
            type="password"
            class="form-control"
            id="LogInComponent_Password"
            v-model="user.password"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <div style="text-align: end; margin-top: 1rem">
        <b-button @click.stop.prevent="SignUpUser" variant="outline-primary"
          >Ingresar</b-button
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
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(collection(this.myFirestore, "saturnousers"), {
          userFirstName: firstName,
          userLastName: lastName,
          user_email: email,
        }),
          this.$router.push("/users");
      } catch (error) {
        alert("Este usuario ya existe");
      }
    },
  },
};
</script>
