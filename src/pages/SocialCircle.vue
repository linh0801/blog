<template>
  <Layout>
    <!-- Page Header -->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>社交圈</h1>
            <span class="subheading">及时掌握行业的最新动向。。。</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane :label="`粉丝 ${followerCount}`" name="fans">
        <el-row>
          <el-col :span="6" :style="{marginBottom: '15px'}" v-for="(item, index) of $page.followers.edges" :key="item.node.id" :offset="index % 3 === 0 ? 0 : 2">
            <el-card :body-style="{ padding: '15px' }">
              <div>
                <g-link :to="`/social-circles/${item.node.id}`"><i class="el-icon-star-off" style="margin-right: 5px;"></i>{{ item.node.userName}}</g-link>
                <br/>
                <g-link :to="`/social-circles/${item.node.id}`"><i class="el-icon-message" style="margin-right: 5px;"></i>TA 的主页</g-link>
              </div>
              <img :src="`${serverUrl}${item.node.avatar.url}`" class="image">
              
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane :label=" `关注 ${followingCount}`" name="focus">
        <el-row>
          <el-col :span="6" :style="{marginBottom: '15px'}" v-for="(item, index) of $page.following.edges" :key="item.node.id" :offset="index % 3 === 0 ? 0 : 2">
            <el-card :body-style="{ padding: '15px' }">
              <div>
                <g-link><i class="el-icon-star-off" style="margin-right: 5px;"></i>{{ item.node.userName}}</g-link>
                <br/>
                <a><i class="el-icon-message" style="margin-right: 5px;"></i>TA 的主页</a>
              </div>
              <img :src="`${serverUrl}${item.node.avatar.url}`" class="image">
              
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
  </el-tabs>
  </div>
  </Layout>
</template>
<page-query>
query {
  followers: allStrapiSocialCircle(filter: {type:{ eq: "follower"} } ) {
    edges {
      node {
        id
        userName
        type
        avatar {
          url
        }
      }
    }
  },
  following: allStrapiSocialCircle(filter: {type:{ eq: "following"} } ) {
    edges {
      node {
        id
        userName
        type
        avatar {
          url
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  name: 'socialCircle',
  data () {
    return {
      activeName: 'fans',
      currentDate: new Date(),
      serverUrl: ''
    }
  },
  mounted () {
    this.serverUrl = process.env.GRIDSOME_API_URL
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
    }
  },
  computed: {
    followerCount () {
      return this.$page.followers.edges.length
    },
    followingCount () {
      return this.$page.following.edges.length
    }
  }
}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
