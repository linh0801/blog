<template>
  <Layout>
      <!-- Page Header -->
  <header class="masthead" style="background-image: url('/img/4.png')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1>{{ $page.detail.userName }}</h1>
            <h2 class="subheading">{{ $page.detail.description }}</h2>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post Content -->
  <!-- <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">
        </div>
      </div>
    </div>
  </article> -->
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  detail: strapiSocialCircle(id: $id) {
    id
    userName
    description
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
export default {
  name: 'SocialDetail',
  data () {
    return {
      serverUrl: ''
    }
  },
  mounted () {
    this.serverUrl = process.env.GRIDSOME_API_URL
  },
  methods: {
    mdToHtml (md) {
      const markdown = new MarkdownIt()
      return markdown.render(md)
    }
  }
}
</script>

<style>

</style>