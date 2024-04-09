<template>
    <div class="row">
        <div class="col-lg-2 my-sidebar">
            <SideBar class="mt-3 ms-3 mb-3"></SideBar>
        </div>

        <div class="col-lg-10">
            <NavBar></NavBar>
        </div>
        
        
    </div>
    
</template>

<script>
    import SideBar from './SideBar.vue';
    import NavBar from './NavBar.vue';

    export default {
        name: 'DashboardComponent',
        components: {
            SideBar,
            NavBar,
        }
    }

</script>

<style>
.my-sidebar{
    background-color: #343a40;
    color: rgba(255,255,255,.8);
}
</style>