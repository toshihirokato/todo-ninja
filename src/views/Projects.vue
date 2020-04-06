<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container fluid class="my-5">

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
        <v-expansion-panel-content class="font-weight-bold grey--text">
          due by {{ project.due }}<br>
          <div class="font-weight-light">{{ project.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>
import db from '../main'

export default {
  data() {
    return {
      projects: [
        // { title: 'Design a new website', person: 'The Net Ninja', due: '4th April 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet mollitia quis accusamus, numquam quas similique veniam doloribus facilis dolorem quod sequi quaerat repellat est minima, natus porro libero aspernatur.' },
        // { title: 'Code up the homepage', person: 'Chun Li', due: '10th Oct 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil eligendi at cupiditate in voluptatum magnam esse, minima tempore ipsum aut nemo ea fugit, provident, temporibus eaque alias hic? Alias.' },
        // { title: 'Design video thumbnails', person: 'Ryu', due: '20 th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa blanditiis hic error obcaecati, fugiat quasi iste totam laboriosam. Quasi tenetur deleniti est rerum esse animi nostrum tempore, incidunt alias.' },
        // { title: 'Create a community forum', person: 'Gouken', due: '20th Jan 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque doloremque, maxime ipsum eum impedit voluptatum deserunt in molestiae cupiditate beatae nostrum debitis est, inventore quam explicabo. Sit, aspernatur voluptatem!' },
        // { title: 'Design a new website..again', person: 'The Net Ninja', due: '4th April 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet mollitia quis accusamus, numquam quas similique veniam doloribus facilis dolorem quod sequi quaerat repellat est minima, natus porro libero aspernatur.' }
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if(change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.idn
          })
        }
      })
    })
  }
}
</script>

<style>

</style>
