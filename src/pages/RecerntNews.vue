<template>
<Layout>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>最新动态</h1>
            <span class="subheading">及时掌握行业的最新动向。。。</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <el-card v-for="item of $page.recerntNews.edges" :key="item.id" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{item.node.title}}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="date-box">
        <p>发布于：{{ item.node.published_at | dateFormat('YYYY-MM-DD HH:mm:ss') }}</p>
        <p>更新于：{{ item.node.updated_at | dateFormat('YYYY-MM-DD HH:mm:ss')}}</p>
      </div>
      <div  class="text item" v-html="mdToHtml(item.node.content)"> </div>
      <div class="thumb-wrapper" :style="{'backgroundImage': `url(${serverUrl}${item.node.thumbnail.url})`}" ></div>
    </el-card>
  </div>
    
</Layout>
  
</template>
<page-query>
query {
  recerntNews: allStrapiRecerntNews {
    edges {
      node {
        id
        title
        content
        published_at
        updated_at
        thumbnail {
          url
        }
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
export default {
  name: 'recerntNews',
  data () {
    return {
      serverUrl: ''
    }
  },
  methods: {
    mdToHtml (md) {
      const markdown = new MarkdownIt()
      return markdown.render(md)
    }
  },
  mounted () {
    this.serverUrl = process.env.GRIDSOME_API_URL
  }
}
</script>

<style scoped>
.date-box p {
  margin: 15px 0;
  font-size: 12px;
  color: #999;
}
.thumb-wrapper {
  width:100%;
  height: 200px;
  background-repeat: no-repeat ;
  background-size: contain;
  background-position:50%;
}
.box-card {
  margin-bottom: 15px;
}
</style>
