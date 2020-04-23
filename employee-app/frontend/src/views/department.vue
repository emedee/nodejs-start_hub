<template>
  <div class="department">
    <div class="container d-flex justify-content-center">
      <div class="col-md-6">
        <ul v-for="(department, i) in departmentDetails" :key="i">
          <li>
            <div class="card shadow p-4 c-shaw">
              <h2 class="mb-4 ml-auto mr-auto">{{department.name}}</h2>
                <form @submit.prevent>
                  <div class="form-group">
                  </div>
                  <div class="form-group">
                    <p class="text-center"><b>{{department.description}}</b></p>
                  </div>
                  <div class="form-group">
                    <p class="text-center"><a href="#">{{department._id}}</a></p>
                  </div>
                  <!-- <div class="form-group d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary mr-3">Edit</button>
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
  name: 'department',
  data(){
    return{
      departmentDetails: [],
    }
  },
  methods: {
    getDepartments(){
      // console.log(this.employeeDetails[0].department_id)
      this.$http.get(`http://localhost:8000/api/departments`)
      .then((res) => {
        this.departmentDetails = res.body.data
      })
    },
  },
  created(){
    this.getDepartments()
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

