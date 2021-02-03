<template>
  <div class="app-container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <section class="2">
        <div class="flex mt-10 pl-10 pr-20 justify-between">
          <h5 class="text-2xl font-bold">Gigs</h5>
          <slot name="action-button"></slot>
        </div>
      </section>
      <slot name="content">
        <section></section>
      </slot>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
.sidebar {
position: fixed;
top: 0;
left: 0;
background-color: #fefeff;
bottom: 0;
width: 260px;
height: 100vh;
}

.drop-down::before {
top: 406px;
left: 792px;
width: 24px;
height: 24px;
opacity: 0.5;
}

.main {
margin-left: 260px;
background-color: #fbfbff;
min-height: 100vh;
}

.tab-active {
border-bottom-width: 2px;
border-bottom-color: #fbb30b;
top: 1px;
}

.search-icon {
top: 50%;
transform: translateY(-50%);
left: 1px;
}

.input-width {
width: 300px;
}

.input-left-padding {
padding-left: 40px;
}

.gig-button {
background-color: #2f417e;
}

.light-orange {
background: #fcf4e6;
}

.deep-orange {
background-color: #fbb30b;
}

.orange-text {
color: #fbb30b;
}

.pink-border {
border-bottom-width: 2px;
border-bottom-color: #fbb30b;
top: 1px;
}

.filter-width {
width: 150px;
}

.admin-custom-table1 {
width: 100%;
margin-top: 40px;
border-spacing: 0 15px;
border-collapse: separate;
}

@media (max-width: 1023px) {
.admin-custom-table1 {
  width: 900px;
}
}

.admin-custom-table1 tr th {
background: transparent;
text-align: center;
padding-bottom: 35px;
}

.admin-custom-table1 tr th:first-child {
/* padding-left: 40px; */
text-align: left;
}

.admin-custom-table1 tr th:last-child {
text-align: left;
}

.admin-custom-table1 tr {
background-color: #ffffff;
border: 0;
position: relative;
}
.admin-custom-table1 thead tr {
background-color: transparent;
}

.admin-custom-table1 tr td {
border-top: 2px solid transparent;
text-align: center;
border-bottom: 2px solid transparent;
padding-top: 10px;
padding-bottom: 10px;
}

.admin-custom-table1 tr td:first-child {
/* border: 2px solid #f0f0f0; */
border-right: none;
padding-left: 40px;
text-align: left;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
}

.admin-custom-table1 tr td:last-child {
border: 2px solid transparent;
border-left: none;
text-align: left;
position: relative;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
padding-left: 10px;
}
</style>

<script>
import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';

export default {
  components: { Sidebar, Navbar },
  name: 'DashboardLayout',
};
</script>
