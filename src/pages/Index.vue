<template>
<Layout> 
<!-- Page Header  style="background-image: url('/img/home-bg.jpg')"-->
  <header class="masthead" :style="{'backgroundImage': `url(${GRIDSOME_API_URL + blogHead.cover.url})`}">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{blogHead.title}}</h1>
            <span class="subheading">{{blogHead.subTitle}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="post of $page.posts.edges" :key="post.node.id" >
          <a href="post.html">
            <h2 class="post-title">
             <g-link  :to="'/post/'+ post.node.id">{{post.node.title}}</g-link>
            </h2>
            <!-- <h3 class="post-subtitle">
              Problems look mighty small from 150 miles up
            </h3> -->
          </a>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            {{ post.node.created_at | dateFormat('YYYY-MM-DD HH:mm:ss') }}</p>
          
          <span v-for="tag of post.node.tags" :key="tag.id">
            <g-link :to="`/tag/${tag.id}`" >{{tag.tagName}}</g-link>
            &nbsp;&nbsp;
          </span>
          <hr>
        </div>
        
        <!-- Pager -->
        <Pager :info="$page.posts.pageInfo"/>
      </div>
    </div>
  </div>
</Layout>
</template>
<page-query>
query($page: Int) {
  posts: allStrapiPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content  
        created_at
        tags {
          id
          tagName
        }
      }
    }
  }
  allStrapiBlogHead {
    edges {
      node {
        title
        subTitle
        cover {
          url
        }
      }
    }
  } 
}

</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  },
  
  computed: {
    blogHead () {
      return this.$page.allStrapiBlogHead.edges[0].node
    }
  }
}
</script>

<style>

</style>
