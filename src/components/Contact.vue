<template>
  <div class="component center">
    <h1>Contact Five Star Service Pros</h1>
    <v-btn raised large color="primary" class="center" href="tel:+1-208-260-1765">
      <v-icon color="white">phone</v-icon> (208) 260-1765
    </v-btn>
    <br><br>
    <p>Five Star Service Pros is committed to servicing your plumbing, sewer, flood, and drain cleaning needs in a timely and cost-efficient manner. Contact us today to set up your free quote!</p>
    <div class="form-div">
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field 
          label="Phone Number" 
          v-model="phone" 
          :rules="phoneRules" 
          required
        ></v-text-field>
        <v-select
          label="Service Required"
          v-model="service"
          :items="services"
        ></v-select>
        <v-btn @click="submit" :disabled="!valid" color="primary">submit</v-btn>
        <v-btn @click="clear" color="primary">clear</v-btn>
      </v-form>
      <v-snackbar :timeout="successTimeout" color="success" v-model="successSnack">
        Thank you for contacting us, we'll reach out as quickly as we can.
      </v-snackbar>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'contact',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid.'
      ],
      phone: '',
      phoneRules: [
        (v) => !!v || 'Phone number is required so Five Star can contact you in a timely manner.'
      ],
      service: null,
      services: [
        'Residential Plumbing',
        'Commercial Plumbing',
        'Drain Cleaning',
        'Flood Repair',
        'Other'
      ],
      successSnack: false,
      successTimeout: 5000
    }),
    metaInfo: {
      title: 'Five Star Service Pros - Contact Us',
      meta: [
        {name: 'description', content: 'Contact Five Star Service Pros for honest and reliable answers to all your plumbing and sewer needs. We charge by the job, not the hour, so your bill will never surprise you.'}
      ]
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          axios.post('//formspree.io/service@fivestarboise.com', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            service: this.service
          })
          this.successSnack = true
          this.$router.push('/thank-you')
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .form-div {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
  }
</style>