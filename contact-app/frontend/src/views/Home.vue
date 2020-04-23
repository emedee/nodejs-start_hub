<template>
  <div class="home">
    <div class="container mt-3 d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h2 class="mb-4 ml-auto mr-auto">Register</h2>
          <form @submit.prevent="submitContact">
            <div class="form-group">
              <label>Name</label>
              <input v-model="contact.name" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="contact.email" type="email" class="form-control">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input v-model="contact.phone" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>Gender</label>
              <input v-model="contact.gender" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label>City</label>
              <input v-model="contact.city" type="text" class="form-control">
            </div>
            <div class="form-group d-flex justify-content-center">
              <button type="submit" class="btn btn-primary ml-3 mr-3">Submit</button>
              <button type="reset" class="btn btn-danger">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Home',
  data(){
    return{
      status: true,
      contact: {
        name: '',
        email: '',
        phone: '',
        gender: '',
        city: '',
      },
    }
  },
  methods: {
    submitContact(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.contact.name === ''){
          swal("Invalid!", "Please Enter Your Name", "error");
        }else if(!this.contact.email.match(mailformat)){
          swal("Invalid Email!", "Please Enter a valid mail address", "error");
        }else{
          this.$http.post('http://localhost:8085/api/contacts', this.contact)
            .then(function(res){
                console.log(res);
            }, function(error){
                console.log(error);
            })
          swal("Success!", "You Signed up successfully!", "success");
          this.contact = ''
        }
    },
  }
}
</script>
<style scoped>
  
</style>