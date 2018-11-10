<template>
<div class="thread-list">
  <h2 class="list-title">Threads</h2>
  <ThreadListItem
    v-for="thread in threads"
    :thread="thread"
    :key="thread['key']"
  />
</div>
</template>

<script>
import ThreadListItem from './ThreadListItem'
// import sourceData from '@/data.json'

export default {
  name: 'ThreadList',
  components: {
    ThreadListItem
  },
  props: {
    threads: {
      requered: true,
      type: Array
    }
  }
}
</script>
