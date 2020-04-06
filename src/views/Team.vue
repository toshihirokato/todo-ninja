<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighen-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="subheading">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/ninja.jpeg' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/ryu.jpeg' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/chun.jpeg' },
        { name: 'Goukun', role: 'Social media maverick', avatar: '/gouken.jpeg' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/yoshi.jpeg' },
      ]
    }
  }
}
</script>

<style>

</style>
