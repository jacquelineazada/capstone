<template>
  <div class="page-wrapper d-flex align-center justify-center">
    <div class="login-container">
      <v-card class="login-card pa-8" width="400">
        <div class="text-center mb-4">
          <v-img
            src="https://www2.naga.gov.ph/wp-content/uploads/2022/05/Naga_City_Official_Seal-1.png"
            alt="LGU Seal"
            width="85"
            height="85"
            contain
            class="mx-auto"
          />
          <h2 class="form-title text-h5 font-weight-bold mt-4 text-grey-darken-4">
            Login
          </h2>
        </div>
        <v-card-text class="pa-0">
          <v-form @submit.prevent="handleLogin">
            <label class="input-label">Role</label>
            <v-select
              v-model="selectedRole"
              :items="roles"
              placeholder="Select your role"
              density="comfortable"
              variant="outlined"
              prepend-inner-icon="mdi-briefcase-outline"
              class="mb-4"
            ></v-select>

            <label class="input-label">Username</label>
            <v-text-field
              placeholder="Enter your username"
              density="comfortable"
              variant="outlined"
              prepend-inner-icon="mdi-account-outline"
              class="mb-4"
            />

            <label class="input-label">Password</label>
            <v-text-field
              placeholder="Enter your password"
              density="comfortable"
              variant="outlined"
              type="password"
              prepend-inner-icon="mdi-lock-outline"
              append-inner-icon="mdi-eye-off-outline"
            />

            <div class="d-flex justify-space-between align-center mt-2 mb-6">
              <v-checkbox-btn label="Remember me" class="ma-0 pa-0"></v-checkbox-btn>
              <a href="#" class="text-primary text-caption font-weight-medium"
                >Forgot password?</a
              >
            </div>

            <v-btn
              block
              color="#2962FF"
              size="large"
              class="login-btn"
              type="submit"
              :disabled="!selectedRole"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    selectedRole: null, // To store the selected role
    roles: [
      "Architectural Works",
      "Civil / Structural Works",
      "Electrical Works",
      "Sanitary Plumbing Works",
    ],
  }),
  methods: {
    handleLogin() {
      // If no role is selected, do nothing. The button should be disabled anyway.
      if (!this.selectedRole) {
        return;
      }

      let route = "";
      switch (this.selectedRole) {
        case "Architectural Works":
          route = "architectural";
          break;
        case "Civil / Structural Works":
          route = "/civil-structural-works";
          break;
        case "Electrical Works":
          route = "electrical";
          break;
        case "Sanitary Plumbing Works":
          route = "/sanitary-plumbing-works";
          break;
        default:
          // Fallback route if something goes wrong
          route = "/dashboard";
      }

      // Use Vue Router to navigate to the designated page
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  background-color: #f7f8fa;
  min-height: 100vh;
}

.login-container {
  max-width: 400px;
  width: 100%;
}

.form-title {
  color: #343a40 !important;
}

.form-subtitle {
  color: #6c757d !important;
  font-size: 1rem;
}

.login-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
  border: 1px solid #e0e0e0;
}

.input-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
  display: block;
}

.v-text-field {
  font-size: 0.95rem;
}

.v-checkbox-btn .v-label {
  font-size: 0.9rem;
  color: #555;
}

a {
  text-decoration: none;
}

.login-btn {
  color: white;
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
}
</style>
