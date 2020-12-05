<template>
  <Layout>
      <!-- Page Header -->
  <header class="masthead" >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1># {{ $page.tag.tagName }}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post List -->
  <article>
    <div class="container">
      <ul>
        <li v-for="post of $page.tag.posts" :key="post.id">
          {{ post.title}}  
        </li>
      </ul>
    </div>
  </article>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  tag: strapiTag (id: $id) {
    id
    tagName
    posts {
      id
      title
      content
    }
  }
}
</page-query>
<script>
export default {
  name: 'Tag'
}
</script>

<style>

</style>