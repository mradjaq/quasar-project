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
                    <td>{{ detailData.content }}</td>
                    <td><q-input standout="bg-teal text-white" v-model="newcontent" placeholder="new Title"  text-align="center"/></td>
                </tr>
            </tbody>
        </q-markup-table>
        <div class="q-pa-md q-gutter-sm">
            <q-btn  @click="editData"  color="secondary" label="Edit" align="around"/>
        </div>
    </q-page>
</template>

<script>
export default {
    
    data(){
        return {
            detailData:{},
            newcontent: "",
        }
    },
    methods: {
        backToIndex(){
            this.$router.push(`/category`)
        },
        editData(){
            this.detailData.content = this.newcontent ? this.newcontent : this.detailData.content 
            
        }
    },
    mounted(){
        const todoId = this.$router.currentRoute.params.id; 
        
        this.$axios.get("http://localhost:3000/categories/"+ todoId).then(
        res => {
        console.log(res.data);
        this.detailData = res.data
        });
    }
}
</script>
<style></style>