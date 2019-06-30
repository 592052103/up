<template>
    <div style="padding:20px" id="app">
        <div class="panel panel-primary">
            <div class="panel-heading">用户管理</div>
            <table class="table table-bordered table-striped text-center">
                <thread>
                    <tr>
                        <th>序号</th>
                        <th>用户名</th>
                        <th>年龄</th>
                        <th>毕业学校</th>
                        <th>操作</th>
                    </tr>
                </thread>
                <tbody>
                    <tr v-for="(user,index) in user">
                        <td>{{index + 1}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.school}}</td>
                        <td><button v-on:click="remove(index)">remove</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{{index + 1}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.school}}</td>
                        <td><button v-on:click="remove(index)">remove</button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="text" id="name" v-model="user.name"></td>
                        <td><input type="text" id="name" v-model="user.age"></td>
                        <td><input type="text" id="name" v-model="user.school"></td>
                        <td><button @click="insert">insert</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data(){
        return{
            user    :{'name':'',age:'',school:''},
            users   :{
                'name':'李磊'
            }
        }

    }
}
</script>
