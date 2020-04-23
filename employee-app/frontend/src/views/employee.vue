<template>
  <div class="employee">
    <div class="container d-flex justify-content-center">
      <div class="col-md-6">
        <ul v-for="(employee, i) in employeeDetails" :key="i">
          <li>
            <div class="card shadow p-4 c-shaw">
              <h2 class="mb-4 ml-auto mr-auto">Employee {{i + 1}}</h2>
                <form @submit.prevent>
                  <div class="form-group">
                    <p><b>First Name:</b> <a href="#">{{employee.first_name}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Last Name:</b> <a href="#">{{employee.last_name}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Employee No.:</b> <a href="#">{{employee.employee_no}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Email:</b> <a href="#">{{employee.email}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Phone:</b> <a href="#">{{employee.phone}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Gender:</b> <a href="#">{{employee.gender}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>City:</b> <a href="#">{{employee.city}}</a></p>
                  </div>
                  <div class="form-group">
                    <p><b>Department Id:</b> <a href="#">{{employee.department_id}}</a></p>
                  </div>
                  <!-- <div class="form-group d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary mr-3" @click="getDesignation()">Edit</button>
                    <button type="button"  class="btn btn-danger">Delete</button>
                  </div> -->
                </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employee',
  data(){
    return{
      employeeDetails: [],
    }
  },
  methods: {
    getEmployees(){
      this.$http.get('http://localhost:8000/api/employees')
      .then((res) => {
        this.employeeDetails = res.body.data
      })
    },
    addEmployees(){
      this.$http.post('http://localhost:8000/api/employees')
      .then((res) => {
        this.employeeDetails = res.body.data
      })
    },
  },
  created(){
    this.getEmployees()
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
