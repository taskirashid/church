<template>
    <header>

        <div class="headname">
          <h3>Dashboard</h3>
        </div>

        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
            <div class="user-wrapper">
              <span class="las"><img src="@/assets/user.png" alt=""></span>
              <div>
                <h4>{{userDetails.name}}</h4>
                <small>{{userDetails.role}}</small>
              </div>
            </div>
          </button>

          <ul class="dropdown-menu">
            <li>
              <a v-on:click="logout" href="#">Logout</a></li>
          </ul>
        </div>

      </header>
</template>

<script>
import instance from '@/axios/axios'


export default {
  name: 'Topbar-',
  data(){
    return{
      list: [],
      userDetails: ''
    }
  },
  

  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push({name: 'Login'})
      instance.defaults.headers.common['Authorization'] = ''
    },

  },
  created() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'))
  }
}

</script>

<style >


header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  /* box-shadow: 2px 2px 5px rgba(0,0,0,0.2); */
    box-shadow: 0px 2px 0px rgb(0 0 0 / 9%);
  background: #fff;
  position: fixed;
  left: 280px;
  width: calc(100% - 280px);
  top: 0;
  z-index: 100;
  transition: width 300ms;
}


header .headname{
  color: #222;
  /* margin-top: 10px; */
  margin-left: 1.7rem;
  display: flex;
}

header label span{
  font-size: 1.7rem;
  padding-right: 1rem;
}

.user-wrapper{
  display: flex;
  align-items: center;
}

.user-wrapper div h4{
  margin-bottom: 0;
}

.user-wrapper img{
  border-radius: 50%;
  margin-right: 1rem;
  width: 50px;
}

.user-wrapper small{
  display: inline-block;
  color: var(--text-grey);
  margin-top: -10px !important;
}

.btn-default {
  border: none!important;
}
.btn-default:hover {
  background: none!important;
}
.btn-default:active {
  background: none!important;
  box-shadow: none!important;
}
.btn-default.active {
  background: none!important;
  box-shadow: none!important;
}
.btn-default:focus {
  background: none!important;
  box-shadow: none!important;
}
.btn-default:focus-visible {
  background: none!important;
  border: none!important;
  box-shadow: none!important;
}


.open>.dropdown-toggle.btn-default:active {
    background: none!important;
    border: none!important;
}
.open>.dropdown-toggle.btn-default:focus {
    background: none!important;
    border: none!important;
}
.btn-default.active, .btn-default:active, .open>.dropdown-toggle.btn-default {
    color: none!important;
    background: none!important;
    border: none!important;
}


@media (min-width: 1025px) {
  header label{
    display: none;
  }
}


@media (max-width: 1024px) {
  
  /* header {
    left: 70px;
    width: calc(100% - 70px);
  } */
  header h3{
    display: none;
  }
  header {
    left: 0px;
    width: 100%;
  }

}




@media (max-width: 650px) {
  
  .user-wrapper div h4{
    font-size: 14px;
  }
  header .headname{
    margin-top: 4px;
  }

}


</style>