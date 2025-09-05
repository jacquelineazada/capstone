<template>
  <v-app class="page-wrapper">
    <v-app-bar app color="white" flat class="page-header">
      <v-icon class="me-3" color="#2962FF">mdi-office-building-outline</v-icon>
      <span class="page-title">Construction Permit Management System</span>
    </v-app-bar>

    <v-navigation-drawer app permanent floating width="320" class="sidebar-drawer">
      <div class="sidebar-content">
        <h2 class="guide-title">Quick Guide</h2>
        <p class="guide-subtitle">Follow these steps to complete your application</p>

        <div class="stepper-container mt-8">
          <div v-for="(step, index) in steps" :key="index" class="step-item">
            <div class="step-circle">{{ index + 1 }}</div>
            <div class="step-text">{{ step.text }}</div>
          </div>
        </div>

        <v-btn color="#2962FF" dark class="mt-11 download-btn" @click="downloadChecklist">
          <v-icon left>mdi-download</v-icon>
          Download Complete Checklist
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-main>
      <v-container class="main-content" fluid>
        <div class="content-panel">
          <v-row>
            <v-col v-for="card in topCards" :key="card.title" cols="12" md="6" lg="4">
              <v-card class="action-card" outlined>
                <v-card-text class="d-flex flex-column align-center">
                  <div class="icon-wrapper" :style="{ backgroundColor: card.iconBg }">
                    <v-icon :color="card.color">{{ card.icon }}</v-icon>
                  </div>
                  <h3 class="action-card-title">{{ card.title }}</h3>
                  <v-btn
                    :color="card.color"
                    dark
                    depressed
                    class="action-btn mt-4"
                    :to="card.to"
                  >
                    {{ card.buttonText }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-card class="welcome-panel mt-8" outlined>
            <v-card-text class="d-flex flex-column align-center text-center">
              <div class="icon-wrapper" style="background-color: #e3f2fd">
                <v-icon color="#2962FF">mdi-home-outline</v-icon>
              </div>
              <h2 class="welcome-title">
                Welcome to Occupancy Permit Application Portal
              </h2>
              <p class="welcome-text">
                Start your building permit application process by following the quick
                guide on the left. Our streamlined system will help you complete your
                application efficiently and track its progress every step of the way.
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ConstructionPermitPage",
  data() {
    return {
      steps: [
        { text: "Fill up the Unified Application Form" },
        { text: "Select Completion Forms" },
        { text: "Download your filled up Forms" },
        { text: "Upload building required documents" },
        { text: "Wait for your application status" },
      ],
      topCards: [
        {
          icon: "mdi-pencil",
          title: "Fill up Unified Application Form",
          buttonText: "Fill up Form",
          color: "#4338CA",
          iconBg: "#E0E7FF",
          to: "/unified",
        },
        {
          icon: "mdi-download",
          title: "Select Required Completion Form",
          buttonText: "Select Completion Form",
          color: "#9333EA",
          iconBg: "#F3E8FF",
          to: "/completion-forms",
        },
        {
          icon: "mdi-folder-outline",
          title: "Upload Requirements",
          buttonText: "Upload Documents",
          color: "#2563EB",
          iconBg: "#DBEAFE",
          to: "/upload",
        },
      ],
    };
  },
  methods: {
    downloadChecklist() {
      const url =
        "https://www2.naga.gov.ph/wp-content/uploads/2022/02/CC-5E-CEO-Securing-Certificate-of-Occupancy-Certificate-of-Use-Certificate-of-Operation.pdf";
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  background-color: #f4f6f9;
}

.page-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
  padding: 0 16px;
}
.page-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #37474f;
}

.sidebar-drawer {
  border-right: none !important;
}
.sidebar-content {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: calc(100% - 32px);
  margin: 16px;
  padding: 24px;
}

.main-content {
  padding: 24px;
  max-width: 1600px;
}

.guide-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #212121;
}
.guide-subtitle {
  font-size: 0.9rem;
  color: #616161;
  margin-top: 4px;
}
.stepper-container {
  position: relative;
  padding-left: 20px;
}
.stepper-container::before {
  content: "";
  position: absolute;
  left: 35px;
  top: 15px;
  bottom: 35px;
  width: 2px;
  background-color: #e0e0e0;
  z-index: 1;
}
.step-item {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  position: relative;
  z-index: 2;
}
.step-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #2962ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
  margin-right: 20px;
}
.step-text {
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
}
.download-btn {
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
}
.content-panel {
  padding: 0;
}
.action-card {
  border-radius: 12px !important;
  text-align: center;
  padding: 24px 16px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0 !important;
  box-shadow: none !important;
  height: 100%;
}
.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.icon-wrapper .v-icon {
  font-size: 32px;
}
.action-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  min-height: 45px;
  margin-bottom: 16px;
}
.action-btn {
  text-transform: none;
  font-weight: 600;
  font-size: 0.95rem;
  width: 100%;
  max-width: 260px;
  border-radius: 8px;
}
.welcome-panel {
  background-color: #ffffff;
  border-radius: 12px !important;
  padding: 32px 16px;
  border: 1px solid #e0e0e0 !important;
  box-shadow: none !important;
}
.welcome-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #212121;
  margin-top: 16px;
}
.welcome-text {
  font-size: 1rem;
  color: #616161;
  max-width: 600px;
  margin: 16px auto;
  line-height: 1.6;
}
</style>
