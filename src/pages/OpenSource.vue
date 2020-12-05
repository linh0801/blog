<template>
<Layout>
  <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>开源项目</h1>
            <span class="subheading">项目开源，共享新技术，改变码农新潮流...</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <el-card v-for="item of $page.project.edges" :key="item.id" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{item.node.title}}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="date-box">
        <p>最近更新于：{{ item.node.updated_at | dateFormat('YYYY-MM-DD HH:mm:ss')}}</p>
      </div>
      <div  class="text item" v-html="mdToHtml(item.node.content)"> </div>
      <div class="bottom-content">
          <div class="rela-data">
            <el-tooltip class="item" effect="dark" :content="`star ${item.node.starCount} `" placement="bottom">
              <span> <i class="el-icon-star-off"></i> {{ item.node.starCount }}</span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="`watch ${item.node.watchCount}`" placement="bottom">
              <span><i class="el-icon-view"></i> {{item.node.watchCount}}</span>
            </el-tooltip> 
            <el-tooltip class="item" effect="dark" content="`fork ${item.node.forkCount}`" placement="bottom">
              <span><i class="el-icon-bell"></i> {{item.node.forkCount}}</span>
            </el-tooltip> 
        </div>
        <div class="tag-group">
          <el-tag v-for="tag of item.node.tags" :key="tag.id">{{tag.tagName}}</el-tag>
        </div>
      </div>
      
    </el-card>
  </div>
    
</Layout>
  
</template>
<page-query>
query {
  project: allStrapiOpenSourceProject {
    edges {
      node {
        id
        title
        updated_at
        content
        starCount
        watchCount
        forkCount
        tags {
          id
          tagName
        }
      }
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
export default {
  name: 'openSource',
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
.bottom-content {
  display:flex;
  justify-content: space-between;
}
.rela-data span {
  margin-right: 15px;
}
.el-tag {
  margin-right: 8px;
}

</style>
