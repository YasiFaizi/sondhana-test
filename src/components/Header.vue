<template>
  <v-container fluid>
    <!-- <v-app-bar
      id="header"
      color="#202020"
      dark
      style="height: 80px; position: fixed"
      app
    >
      <v-app-bar-nav-icon class="mt-4"></v-app-bar-nav-icon>
      <v-spacer />
      <v-card
        class="mt-4"
        height="45"
        color="#363636"
        style="border-radius: 40px"
      >
        <v-row>
          <v-col>
            <v-avatar size="38" class="mt-1 ml-2">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg "
                alt="John"
              />
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-subtitle class="mt-n1 ml-n3" style="font-weight: bold"
              >sdafsafsadf
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </v-app-bar>


    <v-navigation-drawer
      fluid
      dense
      :mini-variant.sync="mini"
      style="margin-top: 81px"
      value="true"
      id="sidebar"
      app
      v-model="drawer"
    >
      <br />
      <v-list-item>
        <v-list-item-title id="texts"
          ><h3>Sondhana Influncer</h3>
        </v-list-item-title>
      </v-list-item>
      <v-list-item-title id="texts">www.Sondhana.com</v-list-item-title>
      <br />
      <hr style="height: 2px; background-color: #f5f5f5; border: none" />


      <div>
        <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header style="text-color: blue"
              >Overall</v-expansion-panel-header
            >
            <v-expansion-panel-content style="width: 100%">
              <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.href"
                link
                id="li"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-navigation-drawer> -->

 
   <v-navigation-drawer
      v-model="drawer"
      app
      fixed
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Popcorn DB
          </v-list-item-title>
          <v-list-item-subtitle>
            Information
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <v-list-item-group >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          color="black"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> 

    <v-app-bar app color="black " dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

  </v-container>
</template>
<script>

export default {
  name: "Header",

  data: () => ({
       drawer: false,
       items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'Country', icon: 'mdi-map' },
          { title: 'Vaccine', icon: 'mdi-needle' },
        ],
        right: null, 
  }),
};

</script>