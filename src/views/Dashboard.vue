<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card text v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="float-right">
              <v-chip small :class="`${project.status} white-text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '4th April 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet mollitia quis accusamus, numquam quas similique veniam doloribus facilis dolorem quod sequi quaerat repellat est minima, natus porro libero aspernatur.' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Oct 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil eligendi at cupiditate in voluptatum magnam esse, minima tempore ipsum aut nemo ea fugit, provident, temporibus eaque alias hic? Alias.' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20 th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa blanditiis hic error obcaecati, fugiat quasi iste totam laboriosam. Quasi tenetur deleniti est rerum esse animi nostrum tempore, incidunt alias.' },
        { title: 'Create a community forum', person: 'Gouken', due: '20th Jan 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque doloremque, maxime ipsum eum impedit voluptatum deserunt in molestiae cupiditate beatae nostrum debitis est, inventore quam explicabo. Sit, aspernatur voluptatem!' }
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
