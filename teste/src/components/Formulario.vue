<template>
  <div id="formulario" class="mu-elevation-4">
    <div id="topo" class="mu-primary-color mu-elevation-2">
      <h2 class="mu-secondary-text-color">Entre em contato</h2>
    </div>
    <mu-form id="f" :model="form" class="mu-demo-form" :label-position="labelPosition">
      <mu-form-item prop="input" label="Name">
        <mu-text-field v-model="form.input"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="input" label="Email">
        <mu-text-field type="email" v-model="form.input"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="textarea" label="Conteudo">
        <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
      </mu-form-item>
      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary" class="mu-secondary-text-color">Enviar</mu-button>
      </mu-flex>
    </mu-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value8: 'teste',
      labelPosition: 'top',
      form: {
        input: '',
        textarea: ''
      }
    }
  }
}
</script>
<style>
.mu-demo-form {
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
}
#formulario {
  background-color: #fff;
}
#f{
  padding-top: 1em;
  padding-bottom: 1em;
}
#topo {
  height: 4em;
}
h2 {
  padding-top: 0.5em;
  text-align: center!important;
}
</style>
