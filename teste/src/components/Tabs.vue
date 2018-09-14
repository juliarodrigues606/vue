<template>
  <div id="tabs">
    <mu-container>
    <mu-tabs :value.sync="active" class="mu-elevation-4" center color="teal">
    <mu-tab>
      DESCRIÇÃO
    </mu-tab>
    <mu-tab>
      LIVROS
    </mu-tab>
    <mu-tab>
      CONTATOS
    </mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active === 0">
    <p>“Lorem ipsum purus ad etiam lacinia senectus eleifend vel id, mauris pharetra fermentum erat blandit porta vehicula tristique, justo vestibulum justo class ante dictum in phasellus. nec tristique velit interdum senectus curabitur molestie tortor proin, ipsum dui neque nisi cras fames ultricies metus id, aenean pulvinar cras auctor nec ornare proin. fames senectus ac eu ut potenti litora mollis dapibus, aenean molestie curae semper nunc feugiat consequat senectus, netus leo himenaeos netus fermentum urna praesent. porttitor ante elementum pharetra velit etiam lacinia nibh aliquet imperdiet, fringilla phasellus faucibus lacinia taciti ut commodo mollis enim, interdum bibendum vivamus libero posuere donec tempor libero”</p>
  </div>
  <div class="demo-text" v-if="active === 1">
    <p>“Iaculis turpis torquent accumsan semper integer, risus dapibus sem lacinia auctor, suspendisse aliquam arcu hendrerit. enim consectetur tempor aliquet commodo est varius, risus cubilia et dapibus auctor, quis aliquam semper justo aliquet. varius suscipit elit commodo taciti phasellus arcu viverra sem aliquet commodo, tempus nam risus laoreet amet fusce sed ornare sed, donec magna molestie torquent conubia curabitur congue tempus mi. etiam id per mollis quisque accumsan suspendisse, ultrices leo lectus vivamus ante, fringilla nec pretium aliquam aenean. sagittis mauris sodales libero nostra aliquam class aenean etiam curabitur elementum gravida, maecenas elementum hac sociosqu hac imperdiet quisque himenaeos molestie.”</p>
  </div>
  <div class="demo-text" v-if="active === 2">
    <p>“Accumsan potenti porta egestas quis feugiat per semper, aptent cubilia dapibus sagittis pulvinar libero a etiam, rutrum commodo arcu a aptent nisl. magna morbi nisi lacinia adipiscing non tempor primis magna aliquam, quam nec arcu facilisis accumsan justo nibh rutrum nostra, placerat lacus blandit nam interdum tincidunt nisi faucibus. egestas sed sit tristique nullam phasellus non pretium mollis vitae nisl bibendum quam, ultrices rutrum vestibulum posuere sodales nulla ac fermentum lectus volutpat varius, luctus consequat pharetra aenean inceptos neque maecenas neque vestibulum venenatis condimentum. maecenas vel habitant dictumst ultricies conubia netus dictum nisi nibh mi, leo class arcu sagittis gravida condimentum dui ad ipsum porttitor, nunc euismod fusce tristique leo facilisis euismod sociosqu vulputate. ”</p>
  </div>
</mu-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style>
.demo-text {
  padding: 16px;
  background: #fff
}

#tabs {
  padding-top: 1em;
}
</style>
