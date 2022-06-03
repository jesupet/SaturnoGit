import Vue from "vue";
import Vuex from "vuex";
import { onSnapshot, query, collection, doc, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from "../router/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myFirestore: null,
    listTours: [],
    dataTable: [],
    listUsers: [],
    onemiData: [],
    baikonurData: [],
    spaceLaunchData: [],
    user: { email: "", password: "", firstName: "", lastName: "" },
    fields: [
      {
        key: 'name',
        label: 'Nombre'
      },
      {
        key: 'vacancies',
        label: 'Vacantes',
        sortable: 'true',
      },
      {
        key: 'enrrolled',
        label: 'Inscritos',
        sortable: 'true',
      },
      {
        key: 'duration_hrs',
        label: 'Duración (hrs)',
        sortable: 'true',
      },
      {
        key: 'price_usd',
        label: 'Precio',
        sortable: 'true',
      },
      {
        key: 'available',
        label: 'Disponible',
        sortable: 'true',
      },
      {
        key: 'reg_date',
        label: 'Fecha de creación',
      },
      {
        key: 'id',
        label: 'ID'
      },
    ],
    form: {
      name: '',
      image_url: '',
      vacancies: '',
      enrrolled: '',
      duration_hrs: '',
      price_usd: '',
      id: '',
      description: '',
    },
    show: true,
    editedIndex: '',
    alert: {
      message: "",
      variant: "",
    }
  },
  getters: {
    activeUser() {
      let { currentUser } = getAuth()
      let user1 = { currentUser }
      if (user1.currentUser == undefined) {
        return undefined
      } else {
        return user1.currentUser
      }
    },
    getOnemiData(state) {
      return state.onemiData
    },
    getBaikonurData(state) {
      return state.baikonurData
    },
    getSpaceLaunchData(state) {
      return state.spaceLaunchData
    },
    getHighlightedTours(state, getters) {
      const result = getters.getListTours.filter(tour => tour.highlighted == true);
      return result
    },
    getFavouritesByUser(state, getters) {
      let activeUserEmail = getters.activeUser.email.toString()
      let listUsers = getters.getListUsers
      //let listTours = getters.getListTours
      const activeUserFavourites = listUsers.find(element => element.user_email == activeUserEmail)
      let result = []
      activeUserFavourites.favourites.map((fav) => {
        console.log({ fav })
        state.listTours.map((tour) => {
          if (tour.id == fav) {
            result.push(tour)
          }
        })
      })
      console.log({ result })
      return result
    },
    getUsername(state) {
      return state.user.name
    },
    getPassword(state) {
      return state.user.password
    },
    getListTours(state) {
      return state.listTours
    },
    getListUsers(state) {
      return state.listUsers
    },
    getDataTable(state) {
      function selectProps(data1) {
        const { name, vacancies, enrrolled, duration_hrs, price_usd, available, reg_date, id } = data1;
        return { name, vacancies, enrrolled, duration_hrs, price_usd, available, reg_date, id };
      }
      const data2 = state.listTours.map(selectProps)
      state.dataTable = data2;
      return state.dataTable;
    },
    getFields(state) {
      return state.fields
    },
    getForm(state) {
      return state.form
    },
    changeDateTime(element) {
      let date = element * 1000
      let newDate = new Date(date)
      let newDateMonth = newDate.toLocaleString("es-US", { month: "long" })
      let newDateDay = newDate.toLocaleString("es-US", { day: "numeric" })
      let newDateYear = (newDate.toLocaleString("es-US", { year: "numeric" })) - 1969
      const generatedDate = `Fecha: ${newDateDay} de ${newDateMonth} de ${newDateYear}`
      return generatedDate
    },
    totalVacancies(state) {
      let sum = 0;
      for (let i = 0; i < state.listTours.length; i++) {
        sum += (parseFloat(state.listTours[i].vacancies));
      }
      return sum;
    },
    totalEnrrolled(state) {
      let sum = 0;
      for (let i = 0; i < state.listTours.length; i++) {
        sum += (parseFloat(state.listTours[i].enrrolled));
      }
      return sum;
    },
    totalAvailableTours(state) {
      let result = 0
      for (let i = 0; i < state.listTours.length; i++) {
        if (state.listTours[i].available == true) {
          result += 1
        } else {
          result += 0
        }
      }
      return result
    },
    totalUnavailableTours(state) {
      let result = 0
      for (let i = 0; i < state.listTours.length; i++) {
        if (state.listTours[i].available != true) {
          result += 1
        } else {
          result += 0
        }
      }
      return result
    },
    totalTours(state) {
      let result = state.listTours.length
      return result
    },
    getAlertData(state) {
      console.log(state.alert)
      return state.alert
    },
  },
  
  mutations: {
    instanceFirestore(state, fs) {
      state.myFirestore = fs;
    },
    mutateUsername(state, inputUser) {
      state.user.email = inputUser
    },
    mutatePassword(state, inputPassword) {
      state.user.password = inputPassword
    },
    mutateTours(state, resultTours) {
      state.listTours = resultTours; // Este "tours" es un commit recibido desde la función async getTours en las actions, en este caso equivale a resultTours como aparece en la función anteriormente mencionada
    },
    mutateUsers(state, resultListUsers) {
      state.listUsers = resultListUsers;
    },
    deleteTour(state, payload) {
      const selectTour = doc(this.state.myFirestore, "saturnotours", payload);
      deleteDoc(selectTour);
    },
    addToFavourites(state, payload) {
      let [param1, param2] = payload;
      let userProfile = this.getters.getListUsers.find(element => element.user_email == param1)
      let param3 = userProfile.id.toString()
      //console.log('param1 es el email: ' + param1);
      //console.log('param2 es el ID del tour ' + param2);
      //console.log('param3 es el documento donde está contenido el usuario ' + param3);
      const newFavourite = doc(this.state.myFirestore, "saturnousers", param3);
      updateDoc(newFavourite, { favourites: arrayUnion(param2) });
      //alert('Tour añadido a favoritos')
    },
    removeFromFavourites(state, payload) {
      let [param1, param2] = payload;
      let userProfile = this.getters.getListUsers.find(element => element.user_email == param1)
      let param3 = userProfile.id.toString()
      //console.log('param1 es el email: ' + param1);
      //console.log('param2 es el ID del tour ' + param2);
      //console.log('param3 son los usuarios ' + param3);
      const removeFavourite = doc(this.state.myFirestore, "saturnousers", param3);
      updateDoc(removeFavourite, { favourites: arrayRemove(param2) });
      alert('Tour eliminado de favoritos')
    },
    requestTourInfo(state, payload) {
      let [param1, param2, param3, param4] = payload;
      let userProfile = this.getters.getListUsers.find(element => element.user_email == param1)
      let param5 = userProfile.id.toString()
      //console.log('param1 es el email: ' + param1);
      //console.log('param2 es el ID del tour ' + param2);
      //console.log('param3 es el nombre del tour ' + param3);
      //console.log('param4 es la descripción de la info ' + param4);
      //console.log('param5 es el usuario filtrado ' + param5);
      const newTourInfoRequest = doc(this.state.myFirestore, "saturnousers", param5);
      updateDoc(newTourInfoRequest, { infoRequests: arrayUnion({ param1, param2, param3, param4 }) });
      alert('Solicitud enviada con éxito')
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.state.form.name = ''
      this.state.form.image_url = ''
      this.state.form.vacancies = ''
      this.state.form.enrrolled = ''
      this.state.form.duration_hrs = ''
      this.state.form.price_usd = ''
      this.state.form.id = ''
      this.state.form.description = ''
      // Trick to reset/clear native browser form validation state
      this.state.show = false
      this.$nextTick(() => {
        this.state.show = true
      })
    },
    subscribeToNewsletter(state, subscriberEmail) {
      let subscribersList = 'ieDmCBUyRdhxtUBkRogh'
      const newFavourite = doc(this.state.myFirestore, "saturnoNewsletter", subscribersList);
      updateDoc(newFavourite, { subscribers: arrayUnion(subscriberEmail.toString()) });
    },
    dataToAlert(state, data) {
      state.alert.message = data.message
      state.alert.variant = data.variant
    },
    mutateOnemiData: (state, data) => {
      state.onemiData = data
    },
    mutateBaikonurData: (state, data) => {
      state.baikonurData = data
    },
    mutateSpaceLaunchData: (state, data) => {
      state.spaceLaunchData = data
    },
  },
  actions: {
    async instanceFirestore({ commit }, fs) {
      commit("instanceFirestore", fs());
    },
    async getTours({ commit }) {
      if (this.state.myFirestore) {
        const q = query(
          collection(
            this.state.myFirestore,
            "saturnotours" /* Nombre colección en Firebase */
          )
        );
        onSnapshot(q, (querySnapshot) => {
          const resultTours = [];
          querySnapshot.forEach((doc) => {
            resultTours.push({ id: doc.id, ...doc.data() }); // función propia de firebase
          });
          commit("mutateTours", resultTours);
        });
      }
    },
    async getUsers({ commit }) {
      if (this.state.myFirestore) {
        const q = query(
          collection(
            this.state.myFirestore,
            "saturnousers" /* Nombre colección en Firebase */
          )
        );
        onSnapshot(q, (querySnapshot) => {
          const resultListUsers = [];
          querySnapshot.forEach((doc) => {
            resultListUsers.push({ id: doc.id, ...doc.data() }); // función propia de firebase
          });
          commit("mutateUsers", resultListUsers);
        });
      }
    },
    async onSubmit(context) {
      context.commit("onSubmit")
    },
    async onReset(context) {
      context.commit("onReset")
    },
    async logInUser(context) {
      try {
        const { email, password } = this.state.user;
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/users");
        context.commit("mutateUsername", "")
        context.commit("mutatePassword", "")
      } catch (error) {
        alert("Usuario y/o contraseña no reconocidos");
      }
    },
    logOutUser() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("Sesión cerrada exitosamente");
        })
        .catch(() => {
          // An error happened.
        });
    },
    setUsername(context, inputUsername) {
      context.commit("mutateUsername", inputUsername);
    },
    setPassword(context, inputPassword) {
      context.commit("mutatePassword", inputPassword);
    },
    activateAddToFavourites({ commit }, param1) {
      console.log('Param1 = ' + param1)
      let color = ""
      commit('addToFavourites', param1, color)
      //alert("Agregado a favoritos")
    },
    activateRemoveFromFavourites({ commit }, param1) {
      console.log('Param1 = ' + param1)
      commit('removeFromFavourites', param1)
    },
    activateNewsletterSub({ commit }, subscriberEmail) {
      console.log('Param1 = ' + subscriberEmail)
      let message = ""
      let variant = ""
      if (subscriberEmail != undefined) {
        message ="Su correo fue registrado correctamente, muchas gracias :)"
        variant = "success"
        commit('subscribeToNewsletter', subscriberEmail)
      } else {
        message ="Correo electrónico no válido, intenta de nuevo"
        variant = "danger"
      }
      commit('dataToAlert', {message, variant})
    },
    activateRequestTourInfo({ commit }, param1) {
      console.log('Param1 = ' + param1)
      commit('requestTourInfo', param1)
    },
    async callOnemiData({ commit }) {
      const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-31E&end_date=2022-06-05&api_key=OaGIu1rtXVFHo5u3Nh04arwUua6VCffTerY8mSBX`
      const data = await fetch(URL).then(response => response.json())
      console.log(data)
      commit('mutateOnemiData', data)
    },
    async callBaikonurData({ commit }) {
      const URL = `https://goweather.herokuapp.com/weather/Baikonur`
      const data = await fetch(URL).then(response => response.json())
      console.log(data)
      commit('mutateBaikonurData', data)
    },
    async callSpaceLaunchData({ commit }) {
      const URL = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=4ac9912c9934d28e378d474d52e70a890360a41b&formato=json`
      const data = await fetch(URL).then(response => response.json())
      console.log(data)
      commit('mutateSpaceLaunchData', data)
    },
  }
},
);

//4ac9912c9934d28e378d474d52e70a890360a41b
//{mode: 'no-cors'}
//https://api.nasa.gov/planetary/apod?api_key=OaGIu1rtXVFHo5u3Nh04arwUua6VCffTerY8mSBX
