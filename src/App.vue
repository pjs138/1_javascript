<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6" sm="6">

            <h1 class="my-3">outline</h1>
            <v-btn variant="outlined" prepend-icon="$vuetify">
              button
            </v-btn>
      
            </v-col>
            <v-col cols="12" md="6" sm="6">
            <v-btn variant="tonal">
              button
            </v-btn>
          </v-col>
        </v-row>

    <v-row>
    <v-col cols="12" md="6" sm="6">
      <v-card class="mx-auto" 
      prepend-icon="$vuetify" 
      subtitle="the #1 vUe ui"
      width="400"
      >
      <template v-slot:title>
        <span class="font-weight-black">welcome</span>
      </template>
      <v-card class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi corporis fugiat reprehenderit quod? Odio iste provident praesentium nesciunt suscipit!
      </v-card>
      </v-card>
    </v-col>


    <v-col cols="12" md="6" sm="6">
    </v-col>

    
    </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default{
  name: 'App',
  components:{

  },
  /*new Vue({
    el:"#app",
    vuetify:new Vuetify(),
  })*/
}
</script>

<style>
@font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}
#app{
  font-family: 'Paperlogy-8ExtraBold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align: center;
}
</style>