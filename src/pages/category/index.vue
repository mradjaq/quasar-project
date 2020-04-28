<template>
    <q-page class="q-pa-md">
        <div class="q-pb-sm">
            <q-btn @click="toCreate" label="Create New" icon="add" color="primary" />
        </div>
        <div class="q-gutter-md row items-start" style="max-width: 300px">
            <q-input standout="bg-teal text-white" v-model="search" placeholder="search" />
            <q-btn @click="searchData" label="Search" icon="search" color="primary" />
        </div>
        <q-markup-table>
            <thead class="bg-primary text-white">
                <tr>
                    <th><b>ID</b></th>
                    <th><b>content</b></th>
                    <th width="50"></th>
                </tr>
            </thead>
            <tbody align="center">
                <tr v-for="(d, index) in data" :key="d.id">
                    <td>{{ d.id }} </td>
                    <td>{{d.content}}</td>
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
        }
    },
    methods:{
      toCreate(){
          this.$router.push(`category/create`)
      },
      toEdit(id){
          this.$router.push(`category/edit/${id}`)
      },
      toDetail(id){
          this.$router.push(`category/${id}`)
      },
      deleteData(id, index){
            this.$axios.delete("http://localhost:3000/categories/"+ id)
            .then(res => {
                this.data.splice(index,1);
                console.log(res.data);
            })
        }

    },
    mounted(){
        this.$axios.get("http://localhost:3000/categories")
        .then(res => {
        console.log(res);
        this.data = res.data
        });
    }
}
</script>
<style></style>