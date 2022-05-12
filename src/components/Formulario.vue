<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h1>Formulario</h1>

    <vue-form :state="formState" @submit.prevent="send()">
 
    <validate tag="div">
      <label for="nombre">Nombre</label>
      <input type="text" class="form-control" autocomplete="off" v-model.trim="formData.nombre" required name="nombre" :minlength="nomMin" :maxlength="nomMax"/>
 
      <field-messages name="nombre" show="$dirty">
        <div slot="required" class="alert alert-danger">Nombre requerido</div>
        <div slot="minlength" class="alert alert-danger">Minimo {{ nomMin }} letras</div>
        <div slot="maxlength" class="alert alert-danger">Maximo {{ nomMax }} letras</div>
      </field-messages>
    </validate>
  <br>
      <validate tag="div">
      <label for="edad">Edad</label>
      <input type="number" name="edad" class="form-control" autocomplete="off" v-model.number="formData.edad" required :min="edMin" :max="edMax"/>
 
      <field-messages name="edad" show="$dirty">
        <div slot="required" class="alert alert-danger">Nombre requerido</div>
        <div slot="min" class="alert alert-danger">Edad minima {{ edMin }}</div>
        <div slot="max" class="alert alert-danger">Edad Maxima {{ edMax }}</div>
      </field-messages>
    </validate>
  <br>
    <validate tag="div">
      <label for="email">Email</label>
      <input v-model.trim="formData.email" name="email" autocomplete="off" type="email" required />
 
      <field-messages name="email" show="$dirty">
        <div slot="required" class="alert alert-danger">Email requerido</div>
        <div slot="email" class="alert alert-danger">Ingrese un email valido</div>
      </field-messages>
    </validate>
 
    <button class="btn btn-danger my-3" :disabled="formState.$invalid">Enviar</button>
  </vue-form>

  <table class="table table-dark" id="myTable">
     <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Mail</th>
        </tr>
     </thead>
     <tbody>

       <tr v-for="(ing, index) in ingresos" :key="index">
          <td>{{ ing.nombre}}</td>
          <td>{{ ing.edad}} </td>
          <td>{{ ing.email}}</td>
       </tr>
       <tr v-if="(formState.$valid)">
          <td>{{ formData.nombre}}</td>
          <td>{{ formData.edad}} </td>
          <td>{{ formData.email}}</td>
      
        </tr>
    </tbody>
   </table>

<br>
  <!-- <p>Form data</p>
  <pre>{{ formData }}</pre>
  
  <p>Form state</p>
  <pre>{{ formState }}</pre> -->
  </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.initialData(),
        ingresos:[{}],
        nomMin: 5,
        nomMax : 15,
        edMin: 18,
        edMax: 120
      }
    },
    methods: {
      initialData(){
        return {
          nombre : '',
          edad: '',
          email: ''
        }
      },
      send(){
        console.log({...this.formData}) 
        this.ingresos.push(this.formData);
        this.formState._reset() 
        this.formData = this.initialData()
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron{
    background-color: green;
  }
    pre {
    color: black;
  }
</style>
