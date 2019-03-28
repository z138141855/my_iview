<template>
 <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider :style="{background: 'rgb(81, 90, 110)'}"   collapsible :collapsed-width="78" breakpoint="md" v-model="isCollapsed">
                    <Menu  theme="dark" accordion width="auto"  :class="menuitemClasses">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                系统管理
                            </template>
                            <MenuItem name="1-1" @click.native="$router.push({name:'personnel_Management',params: { userId: 34567890 }})">人员管理</MenuItem>
                            
                            <MenuItem name="1-2" @click.native="$router.push({path:'/admin/user_Management',query: { userId: 123 }})">用户管理</MenuItem>                           
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                基础管理
                            </template>
                            <MenuItem name="3-1">远程人员管理</MenuItem>
                            <MenuItem name="3-2">自主管理</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                运营管理
                            </template>
                            <MenuItem name="4-1">商品等级</MenuItem>
                            <MenuItem name="4-2">交易管理</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import { Button, Layout } from 'iview';
export default {
  name: 'admin',
  data () {
    return {
      isCollapsed: false
    }
  },
  component:{
    Button
  },
  computed: {
    menuitemClasses: function () {
        return [
            'menu-item',
            this.isCollapsed ? 'collapsed-menu' : ''
        ]
    }
  },
  created () {
    this.$axios.get('/api/left').then((res) => {
    console.log(res.data);
    }).catch((err) => {
    console.log(err);
    });
    window.wj(22222)
   
  },
  methods: {
    add(){
      alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.ivu-layout{
    height: 100%;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
