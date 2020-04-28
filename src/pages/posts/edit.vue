<template>
    <q-page class="q-pa-sm">
        <div class="q-pb-sm">
            <q-btn label="Back" icon="arrow_back" color="primary" @click="backToIndex"/>
        </div>

        <q-markup-table>
            <tbody>
                <tr>
                    <td><b>ID</b></td>
                    <td>{{ detailData.id }}</td>
                    
                </tr>
                <tr>
                    <td><b>Title</b></td>
                    <td>{{ detailData.title }}</td>
                    <td><q-input standout="bg-teal text-white" v-model="newtitle" placeholder="New Title"  text-align="center"/></td>
                </tr>
                <tr>
                    <td><b>content</b></td>
                    <td>{{ detailData.content }}</td>
                    <td><q-input standout="bg-teal text-white" v-model="newcontent" placeholder="New Content" /></td>
                </tr>
                <tr>
                    <td><b>Category</b></td>
                    <td><b>{{detailData.categoryId}}</b></td>
                    <td><q-select  rounded filled v-model="categoryId" :options="options" label="Category Post" /></td>
                </tr>
            </tbody>
        </q-markup-table>
        <div class="q-pa-md q-gutter-sm">
            <q-btn  @click="editData()"  color="secondary" label="Edit" align="around"/>
        </div>
    </q-page>
</template>

<script>
export default {
    
    data(){
        return {
            detailData:{},
            newtitle: "",
            newcontent: "",
            options: [],
            categoryId: ""
        }
    },
    methods: {
        backToIndex(){
            this.$router.push(`/posts`)
        },
        editData(){
            this.detailData.title = this.newtitle ? this.newtitle : this.detailData.title 
            this.detailData.content = this.newcontent ? this.newcontent : this.detailData.content 
            this.detailData.categoryId = this.categoryId ? this.categoryId.value : this.detailData.categoryId
            
        }
    },
    mounted(){
        const todoId = this.$router.currentRoute.params.id; 
        
        this.$axios.get("http://localhost:3000/posts/"+ todoId).then(
        res => {
        console.log(res.data);
        this.detailData = res.data
        });

         this.$axios.get("http://localhost:3000/categories")
        .then(res => {
            for(let i=0; i< res.data.length; i++){
                this.options.push({"label":res.data[i].content, "value":res.data[i].id})
            }
        })
    }
}
</script>
<style></style>