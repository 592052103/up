<template>
<div id="userInfo">
    <div id="userName">
        <p>姓名:</p>
        <!-- placeholder 的意思是默认输入框里面的输入内容信息 -->
        <input v-model="userName" placeholder="编辑我....">
        <p>消息是: {{userName}}</p>
    </div>
    <div id="userSex">
        <p>性别:</p>
        <input type="radio" name="sex" value="male" v-model="userSex">
        <label for="male">male</label>
        <input type="radio" name="sex" value="female" v-model="userSex">
        <label for="female">female</label>
    </div>
    <div id="userPhone">
        <p>电话号码:</p>
        <input name="phoneNum" placeholder="请输入电话号码......">
    </div>
    <div id="userAddress">
        <p>住址:</p>
        <input name="address" placeholder="请输入地址......">
    </div>
    <div id="hobby">
        <p>单个复选框:</p>
        <!-- 绑定一个change事件,当发生了变化的时候，触发事件 -->
        <input type="checkbox" id="checkbox" v-model="checked" @change="changeAllChecked()">
        <!-- 引入了名称checked 作为变量 -->
        <label for="checkbox">{{checked}}</label>
        <p>多个复选框:</p>
        <!-- V-model 的存在可以绑定变量值与script里面的变量名称对应，可以将获取的变量值与下面的参数绑定在一起-->
        <input type="checkbox" id="runoob" value="Runoob" v-model="checkNames">       
        <label for="runoob">runoob</label>
        <input type="checkbox" id="google" value="Google" v-model="checkNames">
        <label for="google">google</label>
        <input type="checkbox" id="taobao" value="Taobao" v-model="checkNames">
        <label for="taobao">taobao</label>
        <br>
        <span>选择值为:{{checkNames}}</span>  
    </div>
    <div id="province">
        <p>所在城市:</p>
        <select v-model="selected" name="province">
            <option value="">深圳</option>
            <option value="广东省广州市">广州</option>
            <option value="广东省惠州市">惠州</option>
        </select>
    </div>

    <!-- ajax请求事件 -->
    <div id="ajax">
        {{ info }}
    </div>

    <!-- table 获取返回值信息 -->
    <div id="tableTest">
        <table>
            <thead>
                <tr>
                    <th>TableTestDisplay</th>
                </tr>
            </thead>
            <tbody id="tableTest">
                <tr v-for="li in list">
                    <td> {{li.userName}}</td>
                </tr>
            </tbody>

        </table>


    </div>



    <div>
        <input type="button" name="submit" value="get提交" @click="sendGet">
        <input type="button" name="submit" value="post提交" @click="sendPost">
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs'
export default {
  name: 'form',
  data () {
    return {
    //   userName: 'Hello Vue.js!'
    // 当javaScript里面绑定的变量值是上面的变量值的时候，需要给这个变量值加上单引号
    userSex:'male',
    checked:false,
    checkNames:[],
    selected:'广东省广州市'
    }
  },
  methods:{
      
      changeAllChecked: function(){
          //alert("触发了change事件")
          if (this.checked){
              alert("true")
          }else{
              alert("false")
          }
      },
      sendGet: function(){        
        this.axios.get("/api/fcb/api/v1/getStr")
        //获取Json字符串的返回值
        .then(response => (
            
            //this.info = response.data.field_list[2].field_name
            //alert(response.data.field_list[2].field_name + response.data.field_list[2].field_size);
            alert(this.info = response.data.field_list[2].field_name)
            ))
        .catch(function(error){
            console.log(error)
        })  
      },
      sendPost: function(){
        //   alert("post方法")
        axios({
            method: 'post',
            url:    '/api/fcb/api/v1/add',
            data:   {
                userName: 'redis',
                address : 'hellRedis'
            }         
        }).then(res => {
            //alert("添加信息成功");
            console.log(res)
        }).catch(function(error){
            console.log(error)
        })
        

      },
    changeAllChecked: function(){
        
        // axios.get('http://www.runoob.com/try/ajax/json_demo.json')
        // .then(response => (this.info = response))
        // .catch(function(error){
        //     console.log(error)
        // })
    }
  }
//   mounted(){
//       axios.get('http://www.runoob.com/try/ajax/json_demo.json')
//       .then(response => (alert(response)))
//       .catch(function(error){
//           //请求失败处理
//           console.log(error)
//       });
//   }
}
</script>