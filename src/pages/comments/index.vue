<template>
    <q-page class="q-pa-md">
        <div class="q-pb-sm">
            <q-btn label="Create New" icon="add" color="primary" />
        </div>
        <q-markup-table>
            <thead class="bg-primary text-white">
                <tr>
                    <th><b>ID</b></th>
                    <th><b>Comment</b></th>
                    <th width="50"></th>
                </tr>
            </thead>
            <tbody align="center">
                <tr v-for="(d, index) in data" :key="d.id">
                    <td>{{ d.id }} </td>
                    <td>{{ d.comment }} </td>
                    <td>
                       <q-btn-group>
                            <q-btn @click="toDetail(d.id, index)" size="sm" icon="visibility"/>
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
        }
    },
    methods:{
        deleteData(id, index){
            this.$axios.delete("http://localhost:3000/comments/"+ id)
            .then(res => {
                this.data.splice(index,1);
                console.log(res.data);
                
            })
        }
    },
    mounted(){
        this.$axios.get("http://localhost:3000/comments")
        .then(res => {
        console.log(res);
        this.data = res.data
        });
    }
}
</script>
<style></style>