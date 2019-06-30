<template>
<div id="tableTest">
    <table border="1px">
        <thead>
            <tr>
                <td>序号</td>
                <td>名称</td>
                <td>价格</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in products">
                <td>{{p.id}}</td>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default{
    name : 'tableTest',
    data(){
        return{
            products:[
                {id:1,name:"张三",price:300},
                {id:1,name:"李四",price:400},
                {id:1,name:"王五",price:500},
            ]        
        }
    }
}
</Script>