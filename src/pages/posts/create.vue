<template>
    <q-page class="q-pa-sm">
        <div class="q-pb-sm">
            <q-btn label="Back" icon="arrow_back" color="primary" @click="backToIndex"/>
        </div>

        <q-markup-table>
            <tbody>
                
                <tr>
                    <td><b>Title</b></td>
                    <td>
                        <q-input v-model="title" standout="bg-teal text-white" text-align="center" label="title" />
                    </td>
                </tr>
                <tr>
                    <td><b>Content</b></td>
                    <td>
                    <q-input  v-model="content" standout="bg-teal text-white" label="Content" /></td>
                </tr>
                <tr>
                    <td><b>Category</b></td>
                    <td><q-select  rounded filled v-model="categoryId" :options="options" label="Category Post" /></td>
                </tr>
                
            </tbody>
        </q-markup-table>
        <div class="q-pa-md q-gutter-sm">
            <q-btn   @click="postData"  color="secondary" label="Submit" align="around"/>
        </div>
    </q-page>
</template>

<script>
export default {
    data(){
        return {
            data:{},
            title: "",
            content: "",
            options: [],
            categoryId: ""
        }
    },
    methods: {
        backToIndex(){
            this.$router.push(`/posts`)
        },
        postData(){
            let currentDate = new Date();
            this.$axios.post("http://localhost:3000/posts", {
                title: this.title,
                content : this.content,
                categoryId: this.categoryId.value ,
                date: currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDate()
                +"||"+currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
            }).then(
            res => {
            console.log(res.data);
            this.data = res.data
            this.$router.push(`/posts`)
            });
        }
        
    },
    mounted(){
        this.$axios.get("http://localhost:3000/categories")
        .then(res => {
            for(let i=0; i< res.data.length; i++){
                this.options.push({label:res.data[i].content, value:res.data[i].id})
            }
        })
        
        
    }
   
}
</script>
<style></style>