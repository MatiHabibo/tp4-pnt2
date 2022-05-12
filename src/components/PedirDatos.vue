<template>

  <section class="src-components-pedir-datos">
    <h1>Traer datos de mockapi.io</h1>
     <button class="btn btn-warning my-3 mr-3" @click="getPostsXHRcb()">
         XHR - callback
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRPromise()">
        Pomise - callback
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">
        FETCH
      </button>
        <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">
        AXIOS
        </button>
      <button class="btn btn-danger my-3" @click="users = []">Clear</button>
  
  
      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.Nombre }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.Telefono }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">
          Se encontraron {{ users.length }} usuarios
        </h5>
      </div>
  
  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-pedir-datos',
    props: [],
    mounted () {

    },
    data () {
      return {
          url: "https://627d5109bf2deb7174ebbd3a.mockapi.io/api/v1/usuarios",
          users: []
      }
    },
    methods: {
    wrapperXhrPromise() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", this.url);
        xhr.addEventListener("load", () => {
          if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response);
            resolve(respuesta);
          } else {
            console.error("ERROR XHR CALLBACK (STATUS)", xhr.status);
            let error = {
              title: "ERROR XHR CALLBACK (STATUS)",
              status: xhr.status,
            };
            reject(error);
          }
        });
        xhr.addEventListener("error", (e) => {
          console.error("ERROR XHR CB(Ajax)", e);
          let error = {
            title: "ERROR XHR CB(Ajax)",
            info: e,
          };
          reject(error);
        });
        xhr.send();
      });
    },

    getPostsXHRcb() {
      const xhr = new XMLHttpRequest();
      xhr.open("get", this.url);
      xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
          let respuesta = JSON.parse(xhr.response);
          this.users = respuesta;
        } else {
          console.error("ERROR XHR CALLBACK (STATUS)", xhr.status);
        }
      });
      xhr.addEventListener("error", (e) => {
        console.error("ERROR XHR CB(Ajax)", e);
      });
      xhr.send();
    },
    async getPostsXHRPromise() {
    try{
          let respuesta = await this.wrapperXhrPromise()
          // console.log(respuesta);
          this.users = respuesta;
    }catch(error){
      console.error("error xhrPromise", error)
    }
     
    
    },
    async getPostsFetch(){
      try{
              let response = await fetch(this.url)
              let respuesta = await response.json()
              this.users = respuesta;
      }catch(error){
             console.error("error xhrPromise", error)
      }
    },
    async getPostsAxios(){
      try{
           let { data } = await this.axios(this.url)
            this.users = data; 
      }catch(error){
            console.error("error axios", error)
      }
    }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-pedir-datos {

  }
</style>
