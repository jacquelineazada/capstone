<!-- src/components/LoginCard.vue -->
<template>
  <v-card class="login-card pa-5" color="white">
    <v-card-title class="text-center text-h5 font-weight-bold pb-2 text-grey-darken-4">
      Welcome Back!
    </v-card-title>
    <v-card-subtitle class="text-center mb-6"> Login to your account </v-card-subtitle>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email Address"
          density="compact"
          variant="outlined"
          class="mb-4"
        ></v-text-field>

        <v-text-field
          label="Password"
          density="compact"
          variant="outlined"
          type="password"
          append-inner-icon="mdi-eye-off"
        ></v-text-field>

        <div class="d-flex justify-space-between align-center mt-1 mb-4">
          <v-checkbox-btn label="Remember me" class="ma-0 pa-0"></v-checkbox-btn>
          <a href="#" class="text-primary text-caption font-weight-medium"
            >Forgot password?</a
          >
        </div>

        <v-btn block color="#4A00E0" size="large" class="login-btn" to="/services">
          Login
        </v-btn>

        <div class="text-center mt-6">
          <span class="text-grey-darken-1">Don't have an account?</span>
          <a href="#" class="text-primary font-weight-bold ms-1">Sign up</a>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
// This component is purely presentational for now
</script>

<style scoped>
.login-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
  border: none;
}

.v-text-field {
  font-size: 0.95rem;
}

.v-checkbox-btn .v-label {
  font-size: 0.9rem;
  color: #555;
}

.login-btn {
  color: white;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
}

a {
  text-decoration: none;
}
</style>
