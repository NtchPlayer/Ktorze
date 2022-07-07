<template>
  <div>
    <h1>{{ this.slug }}</h1>
    <p>Path: {{ $route.path }}</p>
  </div>
</template>

<script>
export default {
  name: 'slug',
  layout: 'app',
  asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
