<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text class="success" v-on="on">Add new project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new Project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :value="due" label="Due Date" prepend-icon="mdi-calendar-range" v-on="on" v-bind="attrs">
              </v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <!-- <v-dialog max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :value="due" label="Due Date" prepend-icon="mdi-calendar-range" v-on="on" v-bind="attrs">
              </v-text-field>
            </template>

            <v-card>
            <v-card-text>
              <v-form class="px-3">
                <v-date-picker v-model="due"></v-date-picker>
              </v-form>
            </v-card-text>

            </v-card>
          </v-dialog> -->

          <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
// import { format } from 'date-fns/format'
import db from '../main'

export default {
  data() {
    return {
      // 初期値を入力
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        //! バリデーションに引っかからなければ、ローディングを true にし、以下を実行する。
        this.loading = true

        console.log(this.title, this.content)
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'The Net Ninja',
          status: 'ongoing'
        }
        //! コレクションにデータを格納する
        db.collection('projects').add(project).then((
          this.loading = false,
          this.dialog = false,
          this.$emit('projectAdded')
        ))
      }
    }
  },
  // computed: {
  //   formattedDate() {
  //     return this.due ? format(this.due, 'Do MMM YYYY') : ''
  //   }
  // }
}
</script>

<style>

</style>
