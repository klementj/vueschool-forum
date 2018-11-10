<template>
  <form
    @submit.prevent="save">
      <div class="form-group">
        <textarea
          class="form-input"
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="text"
          ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
</template>

<script>

export default {
  props: {
    threadId: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      text: ''
    }
  },

  methods: {
    save () {
      const postId = 'greatPost' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2',
        '.key': postId
      }
      this.text = ''

      // Passing an Object. {post: post, author: author} ES5 shorthand = {post, author} if same name
      this.$emit('save', { post })
    }
  }
}
</script>
