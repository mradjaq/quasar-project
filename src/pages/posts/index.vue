<template>
    <q-page class="q-pa-md">
        <div class="q-pb-sm">
            <q-btn @click="toCreate" label="Create New" icon="add" color="primary" />
        </div>
        <div class="q-gutter-md row items-start" style="max-width: 1000px">
            <q-input standout="bg-teal text-white" v-model="search" placeholder="search" />
            <q-btn @click="searchData" label="Search" icon="search" color="primary" />
            <q-select  rounded filled v-model="filter" :options="options" label="Category Post" />
            <q-btn @click="filtTable" label="Filter By Cat" icon="search" color="primary" />
        </div>

        <q-markup-table>
            <thead class="bg-primary text-white">
                <tr>
                    <th><b>ID</b></th>
                    <th><b>Title</b></th>
                    <th><b>Content</b></th>
                    <th><b>Category</b></th>
                    <th width="50"></th>
                </tr>
            </thead>
            <tbody align="center">
                <tr v-for="(d, index) in data" :key="d.id">
                    <td>{{ d.id }} </td>
                    <td>{{ d.title }} </td>
                    <td>{{ d.content }}</td>
                    <td>{{ d.category.content }}</td>
                    <td>
                       <q-btn-group>
                            <q-btn @click="toDetail(d.id)" size="sm" icon="visibility"/>
                            <q-btn @click="toEdit(d.id)" size="sm" icon="edit" color="primary" />
                            <q-btn @click="deleteData(d.id, index)" size="sm" icon="delete" color="red" />
                        </q-btn-group>
                    </td>
                </tr>
            </tbody>
        </q-markup-table>
       
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            search: "",
            options: [],
            filter: "",
            current: 1
        }
    },
    methods:{
        toDetail(id){
            this.$router.push(`posts/${id}`);
        },
        toEdit(id){
            this.$router.push(`posts/edit/${id}`);
        },
        toCreate(){
            this.$router.push(`posts/create`);
        },
        deleteData(id, index){
            this.$axios.delete("http://localhost:3000/posts/"+ id)
            .then(res => {
                this.data.splice(index,1);
                console.log(res.data);
            })
        },
        searchData(){
            this.$axios.get("http://localhost:3000/posts?q="+this.search+"&_expand=category")
            .then(res => {
                console.log(res);
                this.data = res.data
            })
        },
        filtTable(){
            
            
            this.$axios.get("http://localhost:3000/posts?categoryId="+this.filter.value+"&_expand=category")
            .then(res => {
                console.log(res);
                this.data = res.data
            })
            console.log(this.filter);
        }
    },
    mounted(){
        this.$axios.get("http://localhost:3000/posts?_expand=category&page=3&limit=10")
        .then(res => {
        console.log(res);
        this.data = res.data
            
        this.$axios.get("http://localhost:3000/categories")
        .then(res => {
            for(let i=0; i< res.data.length; i++){
                this.options.push({"label":res.data[i].content, "value":res.data[i].id})
            }
                
        })
            
        })
    }
}
</script>
<style></style>