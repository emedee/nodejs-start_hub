<template>
  <div class="about">
    <div class="container d-flex justify-content-center" v-if="display">
      <div class="col-md-6">
        <div class="card shadow p-4">
          <h2 class="mb-4 ml-auto mr-auto">Edit Contact</h2>
          <form @submit.prevent="updateContact(contactList._id)">
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
              <button type="submit" class="btn btn-primary ml-3 mr-3">Update</button>
              <button type="reset" class="btn btn-danger">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="container d-flex justify-content-center" v-else>
      <div class="col-md-6">
        <ul>
          <li v-for="(contacts, i) in contactList" :key="i">
            <div class="card shadow p-4 c-shaw">
              <h2 class="mb-4 ml-auto mr-auto">Contact {{i+1}}</h2>
                <form @submit.prevent="submitContact">
                  <div class="form-group">
                    <p><b>Name:</b> <a href="#">{{contacts.name}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Email:</b> <a href="#">{{contacts.email}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Phone:</b> <a href="#">{{contacts.phone}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Gender:</b> <a href="#">{{contacts.gender}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>City:</b> <a href="#">{{contacts.city}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Contact Id:</b> <a href="#">{{contacts._id}}</a></p>
                  </div>
                  <div class="form-group d-flex justify-content-center">
                    <button type="button" @click="editContact(contacts)" class="btn btn-secondary mr-3">Edit</button>
                    <button type="button" @click="deleteContact(contacts._id)"  class="btn btn-danger">Delete</button>
                  </div>
                </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: "About",
  data(){
    return{
      contact: {
        name: '',
        email: '',
        phone: '',
        gender: '',
        city: '',
      },
      contactList: [],
      display: false,
      contactUpdate: null,
      contactId: null,
    }
  },
  methods: {
    reloadPage(){
      var timeout = setTimeout("location.reload(true)",1000);
      function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout("location.reload(true)",1000);
      }
    },
    showContacts(){
      this.$http.get('http://localhost:8085/api/contacts')
        .then(function(res){
          this.contactList = res.body.data
        })
    },
    deleteContact(i){
      this.$http.delete(`http://localhost:8085/api/contacts/${i}`)
        .then(function(res) {
          console.log(res);
        }, function(error){
          console.log(error);
        },) 
      // swal("Success!", "Contact deleted successfully!", "success");
      swal({
        title: "Success!",
        text: "Contact Deleted Successfully!",
        icon: "success",
        buttons: false
      });
      this.reloadPage()
    },
    editContact(id){
      this.display = true
      this.contact = id
      this.contactUpdate = this.contactList.indexOf(id)
      this.contactId = this.contactList[this.contactUpdate]._id
    },
    updateContact(){
      this.contactList[this.contactId] = this.contact;
      this.$http.put(`http://localhost:8085/api/contacts/${this.contact._id}`, this.contact)
        .then(function(res) {
        console.log(res);
        }, function(error){
        console.log(error);
        }) 
      swal("Success!", "Contact Updated successfully!", "success");
      this.display = false
    },
  },
  created(){
    this.showContacts();
  }
}
</script>
<style scoped>
  li{
    list-style-type: none;
  }
  .c-shaw{
    margin-top: 10px !important;
  }
  ul{
    padding: 0px !important;
  }
</style>
