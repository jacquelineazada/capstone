<template>
  <div class="page-wrapper">
    <v-container fluid class="main-content" style="max-width: 1200px">
      <div class="header-section">
        <h1>Ito muna for now po</h1>
      </div>

      <v-row justify="center">
        <v-col cols="12" md="3" class="d-flex">
          <v-card class="service-card flex-grow-1">
            <v-card-text>
              <div class="icon-container" style="background-color: #e6f7ff">
                <v-icon size="40" color="#007bff">mdi-account-settings</v-icon>
              </div>
              <div class="card-title">Admin</div>
              <div class="card-description">
                Manage user roles, permissions, and system settings.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block to="TableAdmin"> View Dashboard </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="d-flex">
          <v-card class="service-card flex-grow-1">
            <v-card-text>
              <div class="icon-container" style="background-color: #fff3e0">
                <v-icon size="40" color="#ff9800">mdi-calendar-month</v-icon>
              </div>
              <div class="card-title">Building Inspection Schedule</div>
              <div class="card-description">
                View and manage the schedule of building inspections.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block to="DataTable"> View Schedule </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="d-flex">
          <v-card class="service-card flex-grow-1">
            <v-card-text>
              <div class="icon-container" style="background-color: #e3f2fd">
                <v-icon size="40" color="#2196f3">mdi-clipboard-list-outline</v-icon>
              </div>
              <div class="card-title">Building Inspection Report</div>
              <div class="card-description">
                Generate and view reports from completed building inspections.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block to="ReportTable"> View Reports </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="3" class="d-flex">
          <v-card class="service-card flex-grow-1">
            <v-card-text>
              <div class="icon-container" style="background-color: #fce4ec">
                <v-icon size="40" color="#e91e63">mdi-account-group</v-icon>
              </div>
              <div class="card-title">Building Inspector</div>
              <div class="card-description">
                Manage and assign roles to building inspectors.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block to="inspector"> Manage Inspectors </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CompletionForms",
};
</script>

<style scoped>
.page-wrapper {
  background-color: #ffffff;
  min-height: 100vh;
}

.main-content {
  padding-top: 60px;
  padding-bottom: 60px;
}

.header-section {
  text-align: center;
  margin-bottom: 50px;
}

.header-section h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.header-section p {
  font-size: 1rem;
  color: #6c757d;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.service-card {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  border: none;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.v-card__text {
  padding: 32px 24px 16px 24px;
  flex-grow: 1;
}

.icon-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #eaf2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.card-description {
  font-size: 0.95rem;
  color: #7f8c8d;
  line-height: 1.5;
  min-height: 110px;
}

.v-card__actions {
  background-color: transparent;
  padding: 16px 24px;
  border-top: 1px solid #e0e0e0;
}

.v-btn {
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: none;
}
</style>
