<template>
  <div>
    <b-button
      variant="warning"
      size="sm"
      class="nav_btn btn_yellow"
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
        <p class="btn btn-danger" v-if="this.validEmail === false">
          INGRESE CORREO ELECTRÓNICO Y/O CONTRASEÑA VÁLIDO
        </p>
        <p class="btn btn-info" v-if="this.userAlready === true">
          USUARIO YA EXISTE EN BASE DE DATOS
        </p>
        <b-form-group label-for="Usuario-DatosPersonales">
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
        <b-form-group label-for="Usuario-input">
          <b-form-input
            :placeholder="'Correo electrónico'"
            type="email"
            class="form-control my-3"
            id="LogInComponent_Username"
            aria-describedby="emailHelp"
            required
            v-model="user.email"
            @click="(validEmail = true), (userAlready = false)"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="Password-input">
          <b-form-input
            :placeholder="'Contraseña'"
            type="password"
            class="form-control my-3 mb-0"
            id="LogInComponent_Password"
            v-model="user.password"
            required
          ></b-form-input>
          <p class="reminder" v-if="user.password.length <= 7">
            *La contraseña debe tener mínimo 8 caracteres
          </p>
        </b-form-group>
      </form>
      <div style="text-align: end; margin-top: 1rem">
        <b-button
          @click.stop.prevent="SignUpUser"
          variant="outline-primary"
          class="sign_btn"
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
    return {
      user: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        validEmail: true,
      },
      validEmail: true,
      userAlready: false,
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(["myFirestore"]),
  },
  methods: {
    async SignUpUser() {
      this.validEmail = true;
      this.userAlready = false;
      try {
        const { email, password, firstName, lastName } = this.user;
        const auth = getAuth();
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password.length >= 8) {
          await createUserWithEmailAndPassword(auth, email, password);
          await addDoc(collection(this.myFirestore, "saturnousers"), {
            userFirstName: firstName,
            userLastName: lastName,
            user_email: email,
          }),
            this.$router.push("/tours");
        } else {
          console.log("Ingrese correo válido");
          this.validEmail = false;
        }
      } catch {
        console.log("Este usuario ya existe");
        this.userAlready = true;
      }
    },
  },
};
</script>

<style scoped>
.nav_btn {
  padding: 0.7em;
  margin: 1em;
}
.btn_yellow:hover {
  background-color: white;
}
.btn_yellow:focus {
  outline: none;
  box-shadow: none;
}
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
  color: #fff;
}
.reminder {
  font-size: 12px;
  font-weight: 300y;
  color: white;
}
</style>
