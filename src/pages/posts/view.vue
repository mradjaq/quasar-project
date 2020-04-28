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
                </tr>
                <tr>
                    <td><b>Content</b></td>
                    <td>{{detailData.content}}</td>
                </tr>
                <tr>
                    <td><b>Create Date</b></td>
                    <td>{{detailData.date}}</td>
                </tr>
                <tr>
                    <td><b>Category</b></td>
                    <td>{{detailData.category.content}}</td>
                </tr>
            </tbody>
        </q-markup-table>
    </q-page>
</template>

<script>
export default {
    data(){
        return {
            detailData:{},
        }
    },
    methods: {
        backToIndex(){
            this.$router.push(`/posts`)
        }
    },
    mounted(){
        const todoId = this.$router.currentRoute.params.id;
        console.log(todoId);
        
        this.$axios.get("http://localhost:3000/posts/"+ todoId+"?&_expand=category").then(
        res => {
        console.log(res.data);
        this.detailData = res.data
        });
    }
}
</script>
<style></style>