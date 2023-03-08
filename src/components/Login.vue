<template>
    <div class="signUp">
        <div class="container signupCard">
            <h2>Login</h2>
                
                <!-- <form @submit.prevent="handleSubmit"> -->
                    
                <div class="register">
                <div class="form-group">
                    <input type="text"
                        placeholder=" Phone Number"
                        id="email"
                        v-model="phoneNo"
                        required
                        maxlength="10"
                        @input="mobileDigit"
                        class="form-control"
                        autocomplete="off">
                </div>
                <div class="form-group">
                    <input type="password" 
                    class="form-control"
                        id="password"
                        v-model="password"
                        required
                        placeholder="Password"
                        autocomplete="off">
                </div>
                    
                <button v-on:click="login" >Login</button>
            </div>
            <!-- </form> -->
        </div>
    </div>
</template>
    
    <script>
    import axios from '@/axios/axios'
    
    export default {
      name: 'Login-',
      data(){
          return{
            error: [],
            phoneNo: '',
            password: '',
            validationError: '',
        }
      },

      methods: {
        async login() {
            const payload = {
                phoneNo: this.phoneNo,
                password: this.password
            }
            // let response = await axios.post(`http://192.168.29.60:5000/login`,payload )
            let response = await axios.post(`/login`,payload )
                console.log(response)
                if(response.status==200){
                axios.defaults.headers.common['Authorization'] = response.data.token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userDetails', JSON.stringify(response.data));
                const token  = localStorage.getItem('token')
                if(token === response.data.token) {
                    console.log(axios.defaults.headers.common['Authorization'])
                    this.$router.push({name: 'Overview'})
                }
            }
            console.warn(response)

        },
        mobileDigit(){
            this.phoneNo = this.phoneNo.replace(/[^0-9]/g, '')
        },

        
        },
  created() {
    this.validationError = JSON.parse(localStorage.getItem('validationError'))
  }
    }
    
    
    </script>
    
    <style scoped>
    *{
        /* border: 1px solid red; */
    }
    .signUp{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0px;
        margin-right: 0px;
        background: linear-gradient(358deg, #9fa7eb4f, #c5cbff50), url(@/assets/church06.jpg);
        background-size: cover;
        width: 100%;
        z-index: -99;
    }
    .signUp h2{
        margin-top: 0px;
        margin-bottom: 30px;
        color: #5b67cd;
    }
    .signupCard{    
        background: #f6f6f6;
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 36%);
        border: 1px solid rgb(255 255 255 / 9%);
        border-radius: 2px;
        padding: 48px 48px 65px 48px;
        width: auto;
    }
    .register input{
        width: 300px;
        height: 40px;
        border-radius: 2px;
        color: #6a6767;
        border: 1px solid #e3e3e3;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }
    .register button{
        width: 300px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid var(--multi-purple);
        background: var(--multi-purple);
        color: #5b67cd;
        cursor: pointer;
        font-weight: 600;
    }
    
    </style>
    
    
    
    