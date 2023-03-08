<template>
    <div class="container respSide">
      <aside :class="{ 'is-open': isOpen }">
        <button class="toggle" @click="toggleAside">|||</button>
            <div class="sidebar-brand">
                <button class="close-toggle" @click="toggleAside">X</button>
                <h1><span class="">Revive Heaven Church</span></h1>
            </div>
            <nav>
                <div class="">
                    
                    <div class="sidebar-menu">
                        <ul>
                        <li class="router-link-blk">
                            <router-link to="/overview">
                            <i class="fas fa-archive"></i>
                            <span>Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/aachensMsg">
                            <i class="fas fa-comment-alt"></i>     
                            <span>Aachen's Messages</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/parish">
                            <i class="fas fa-place-of-worship"></i> 
                            <span>Parish</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/members">
                            <i class="fas fa-users"></i>
                            <span>Members</span> 
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/committee">
                            <i class="fas fa-users-cog"></i> 
                            <span>Committee</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/announcementPage">
                            <i class="fas fa-bullhorn"></i>
                            <span>Announcement</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/obituary">
                            <i class="fas fa-book-dead"></i>
                            <span>Obituary</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/events">
                            <i class="fas fa-list-alt"></i>
                            <span>Events</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/flashNews">
                            <i class="fas fa-newspaper"></i>   
                            <span>Flash News</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/downloads">
                            <i class="fa fa-download"></i>   
                            <span>Downloads</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/worshipTime">
                            <i class="fas fa-clock"></i> 
                            <span>Worship Time</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact">
                            <i class="fa fa-envelope"></i> 
                            <span>Contact</span>  
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/settings">
                            <i class="fas fa-cogs"></i>
                            <span>Settings</span>  
                            </router-link>
                        </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </aside>
    </div>
  </template>
  
  <script scoped>
  
  export default {
  name: 'RespSidebar-',
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleAside() {
        this.isOpen = !this.isOpen
      },
      closeAside(event) {
        if (!this.$el.contains(event.target) && !event.target.classList.contains('toggle')) {
          this.isOpen = false
        }
      }
    },
    mounted() {
      document.addEventListener('mouseup', this.closeAside)
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.closeAside)
    }
  }
  </script>
  
  
  <style>

  .respSide{
    z-index: 145;
    position: absolute;
  }
.sidebar-brand{
    justify-content: normal!important;
}
.sidebar-brand h1 {
    margin-top: 0px!important;
    display: flex;
}
.sidebar-brand span {
    font-size: 1.8rem!important;
}
    body{
      padding:0; 
      margin:0; 
      font-family:sans-serif;
    }
  h1{
    margin:0; 
    color:#ddd; 
    padding:10px; 
    /* border-bottom:1px solid #666 */
    }
  button:focus{
    outline:none
    }
    aside{
    background: #ffffff;
    border-right: 1px solid #dddddd;
    box-shadow: 3px 0px 10px 0px #52525294;
      width:250px;
      height:100vh; 
      position:fixed; 
      transition:.3s;
      left:-255px;
      top:0;
      transition-timing-function: cubic-bezier(0.9,0,1,1);
    }

    .is-open{
      left: 0px;
    }

    .is-open .toggle{
      display: none;
    }

  aside.close{
    left:0;
    transition:.3s;
    transition-timing-function: cubic-bezier(0.9,0,1,1);
    }
  nav a{
    display: block; 
    color:#ddd; 
    text-decoration:none;
    padding:10px
    }
  nav a:hover{
    background: none;
    } 
  aside .toggle{
    border:none; 
    background:none; 
    position: absolute;
    right:-50px; 
    top: 15px;
    /* margin-top: 8px; */
    font-size:30px; 
    transform:rotate(90deg); 
    display:inline-block; 
    cursor:pointer
    }
    .close-toggle{
        border:none; 
        background:none; 
        /* position: absolute; */
        /* right:-50px;  */
        /* top: 15px; */
        /* margin-top: 8px; */
        font-size:30px; 
        transform:rotate(90deg); 
        display:inline-block; 
        cursor:pointer
    }

@media (min-width: 1024px) {
  .respSide{
    display: none;
  }
}
  </style>