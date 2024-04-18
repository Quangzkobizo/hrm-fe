<template>
  <div class="my-comp fs-5">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-lg-4 d-flex align-items-center ps-5 my-item">
          <ul class="navbar-nav">
            <li class="nav-item"><i class="fa fa-bars"></i></li>
            <li><a>Home</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <div class="col-lg-8 nav-bar d-flex justify-content-end my-item pe-5">
          <ul class="navbar-nav">
            <li class="nav-item"><i class="fa fa-search"></i></li>
            <li class="nav-item"><i class="fa fa-comments"></i></li>

            <li class="nav-item"><i class="fa fa-bell"></i></li>
            <li class="nav-item"><i class="fa fa-expand-arrows-alt"></i></li>

            <li class="nav-item"><i class="fa fa-th-large"></i></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-comp {
  height: 60px;
  /* border: 2px solid black;*/
}

.my-item li {
  color: rgba(0, 0, 0, 0.5);
  margin-right: 15px;
}

.my-left-item li {
  margin-right: 15px;
}
</style>
