<template>
    <q-page class="q-pa-sm">
        <div class="q-pb-sm">
            <q-btn label="Back" icon="arrow_back" color="primary" @click="backToIndex"/>
        </div>

        <q-markup-table>
            <tbody>
                <tr >
                    <td><b>ID</b></td>
                    <td v-if="data.id">{{ data.id }}</td>
                    
                </tr>
                <tr>
                    <td><b>Category</b></td>
                    <td>
                        <p v-if="data.content">{{ data.content }}</p>
                        <q-input v-else v-model="content" standout="bg-teal text-white" text-align="center" aria-placeholder="title"/>
                    </td>
                </tr>
            </tbody>
        </q-markup-table>
        <div class="q-pa-md q-gutter-sm">
            <q-btn v-if="seen"  @click="postData"  color="secondary" label="Submit" align="around"/>
        </div>
    </q-page>
</template>

<script>
export default {
    data(){
        return {
            data:{},
            content: "",
            seen: true
        }
    },
    methods: {
        backToIndex(){
            this.$router.push(`/category`)
        },
        postData(){
            this.$axios.post("http://localhost:3000/categories/", {
                content: this.content,
            }).then(
            res => {
            console.log(res.data);
            this.data = res.data
            this.seen = !this.seen
            this.$router.push(`/category`)
            });
        }
        
    },
   
}
</script>
<style></style>