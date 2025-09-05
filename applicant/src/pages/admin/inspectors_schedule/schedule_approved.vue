<template>
  <v-card flat>
    <v-layout style="height: 100vh">
      <v-navigation-drawer v-model="drawer" permanent width="256">
        <v-list density="compact" nav class="mt-4">
          <v-list-subheader class="construction-permit-header">
            <v-icon size="20" class="mr-4">mdi-office-building</v-icon>
            Construction Permit
          </v-list-subheader>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-office-building"
            title="Building Permit"
            value="building_permit"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-file-document-outline"
            title="Occupancy Permit"
            value="occupancy_permit"
            class="active-nav-item mx-2"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-clipboard-list-outline"
            title="Compliance Monitoring"
            value="compliance_monitoring"
          ></v-list-item>
        </v-list>
        <template v-slot:append>
          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-logout"
              title="Logout"
              value="logout"
            ></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main class="main-content">
        <v-toolbar color="white" flat>
          <v-toolbar-title class="toolbar-title"
            >Building Inspection Details</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <div class="d-flex align-center pr-4">
            <v-btn icon class="mr-2">
              <v-badge dot color="error">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
            <v-btn variant="text" class="pa-0" style="height: auto">
              <div class="d-flex align-center">
                <v-avatar size="40">
                  <v-img
                    src="https://i.pinimg.com/736x/fb/73/17/fb7317fec4ff12a1f12e9710dc898692.jpg"
                    alt="Chrize Azada"
                  />
                </v-avatar>
                <div class="ml-3 text-left">
                  <div class="user-name">Chrize Azada</div>
                  <div class="user-role">Administrative</div>
                </div>
              </div>
            </v-btn>
          </div>
        </v-toolbar>

        <v-container fluid class="content-wrapper">
          <v-card class="header-card" flat>
            <v-card-text class="d-flex align-center">
              <v-avatar color="#bbdefb" size="56">
                <span class="text-h5 font-weight-bold">CF</span>
              </v-avatar>
              <div class="ml-4">
                <h1 class="header-title">Conrad Fisher</h1>
                <p class="header-subtitle">conradfisher@gmail.com</p>
                <p class="header-subtitle">BP-2023-8888-001</p>
              </div>
              <v-spacer></v-spacer>
              <v-chip size="default" color="success" variant="tonal" class="status-chip">
                <v-icon start size="small">mdi-check-circle</v-icon>
                Inspection Scheduled
              </v-chip>
            </v-card-text>
          </v-card>

          <v-row>
            <v-col cols="12">
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Inspector Schedule</v-card-title>
                <v-table class="inspector-table">
                  <thead>
                    <tr>
                      <th class="text-left text-subtitle-2">Inspection Type</th>
                      <th class="text-left text-subtitle-2">Status</th>
                      <th class="text-left text-subtitle-2">Inspector Name</th>
                      <th class="text-left text-subtitle-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Architectural Works</td>
                      <td>
                        <v-chip class="status-chip-approved" label size="small"
                          >Approved</v-chip
                        >
                      </td>
                      <td>Eng. Joyce Oberos</td>
                      <td>
                        <v-btn
                          color="#2563EB"
                          variant="text"
                          size="small"
                          @click="showSummaryDialog"
                          >View Details</v-btn
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>Civil/Structural Works</td>
                      <td>
                        <v-chip class="status-chip-approved" label size="small"
                          >Approved</v-chip
                        >
                      </td>
                      <td>Eng. Roberto Martinez</td>
                      <td>
                        <v-btn
                          color="#2563EB"
                          variant="text"
                          size="small"
                          @click="showSummaryDialog"
                          >View Details</v-btn
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>Electrical Works</td>
                      <td>
                        <v-chip class="status-chip-approved" label size="small"
                          >Approved</v-chip
                        >
                      </td>
                      <td>Eng. Bernadette Veroza</td>
                      <td>
                        <v-btn
                          color="#2563EB"
                          variant="text"
                          size="small"
                          @click="showSummaryDialog"
                          >View Details</v-btn
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>Sanitary Plumbing Works</td>
                      <td>
                        <v-chip class="status-chip-approved" label size="small"
                          >Approved</v-chip
                        >
                      </td>
                      <td>Eng. Andrew Villapane</td>
                      <td>
                        <v-btn
                          color="#2563EB"
                          variant="text"
                          size="small"
                          @click="showSummaryDialog"
                        >
                          View Details
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-dialog v-model="summaryDialog" max-width="500px">
          <v-card class="summary-card">
            <v-card-title class="summary-header approved-header">
              <div class="d-flex align-center">
                <v-icon color="#166534" class="mr-2">mdi-check-decagram</v-icon>
                <span>Approved</span>
              </div>
              <v-btn icon @click="summaryDialog = false" size="small">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="pt-6 px-6 pb-6">
              <v-row>
                <v-col cols="12">
                  <div class="summary-block">
                    <div class="summary-label">Inspection Date</div>
                    <div class="summary-value">January 15, 2025</div>
                  </div>
                  <div class="summary-block mt-4">
                    <div class="summary-label">Inspection Time</div>
                    <div class="summary-value">10:30 AM</div>
                  </div>
                  <div class="summary-block mt-4">
                    <div class="summary-label">Architectural Works</div>
                    <div class="summary-value">Eng. Joyce Oberos</div>
                  </div>
                  <div class="summary-block mt-4">
                    <div class="summary-label">Civil/Structural Works</div>
                    <div class="summary-value">Eng. Roberto Martinez</div>
                  </div>
                  <div class="summary-block mt-4">
                    <div class="summary-label">Electrical Works</div>
                    <div class="summary-value">Eng. Bernadette Veroza</div>
                  </div>
                  <div class="summary-block mt-4">
                    <div class="summary-label">Sanitary Plumbing Works</div>
                    <div class="summary-value">Eng. Andrew Villapane</div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn block color="success" variant="flat" size="large">
                Send Schedule
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const drawer = ref(true);
    const summaryDialog = ref(false);
    const inspectors = ref([
      "Eng. Joyce Oberos",
      "Eng. Roberto Martinez",
      "Eng. Bernadette Veroza",
      "Eng. Andrew Villapane",
    ]);

    const showSummaryDialog = () => {
      summaryDialog.value = true;
    };

    return {
      drawer,
      summaryDialog,
      inspectors,
      showSummaryDialog,
    };
  },
};
</script>

<style scoped>
/* ===================================== */
/* General Layout & Theme */
/* ===================================== */
.main-content {
  background-color: #f8f9fa;
}
.content-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 16px 24px 24px 24px;
}

/* ===================================== */
/* Navigation Drawer */
/* ===================================== */
.v-navigation-drawer {
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}
.construction-permit-header {
  color: #101828;
  font-weight: 600;
  font-size: 0.9rem;
  padding-left: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.construction-permit-header .v-icon {
  color: #2563eb !important;
}
.active-nav-item {
  background-color: #a9c3fa6e;
  color: rgb(58, 57, 57) !important;
  border-radius: 4px;
}
.active-nav-item :deep(.v-icon) {
  color: rgb(97, 97, 97) !important;
}
.v-list-item:hover {
  background-color: transparent;
}

/* ===================================== */
/* Header Toolbar */
/* ===================================== */
.toolbar-title {
  padding-left: 16px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #344054;
}
.user-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #101828;
}
.user-role {
  font-size: 0.8rem;
  color: #667085;
}

/* ===================================== */
/* Header Card */
/* ===================================== */
.header-card {
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid #eaecf0;
}
.header-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #101828;
  line-height: 1.2;
}
.header-subtitle {
  color: #667085;
  font-size: 0.9rem;
}

/* ===================================== */
/* Section Cards */
/* ===================================== */
.section-card {
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid #eaecf0;
}
.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #101828;
  padding: 16px 24px 8px 24px;
}
.v-card-text {
  padding: 8px 24px 16px 24px;
}

/* ===================================== */
/* Inspector Table */
/* ===================================== */
.inspector-table th {
  font-weight: 600 !important;
  color: #4a4a4a !important;
  background-color: #f5f5f5 !important;
  border-bottom: 1px solid #e0e0e0;
}
.inspector-table td {
  font-weight: 400 !important;
  color: #333333;
  border-bottom: 1px solid #e0e0e0;
}
.v-table__wrapper > table > tbody > tr:last-child > td {
  border-bottom: none !important;
}

/* ===================================== */
/* Status Chips */
/* ===================================== */
.status-chip {
  font-weight: 500;
}
.status-chip-approved {
  background-color: #d1fae5;
  color: #059669;
  font-weight: 500;
  border-radius: 16px;
  font-size: 0.75rem;
  height: 22px;
}

/* ===================================== */
/* Dialog Styles */
/* ===================================== */
.summary-card {
  border-radius: 12px !important;
}
.summary-header {
  font-weight: 600;
  font-size: 1.1rem;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.approved-header {
  background-color: #f0fdf4;
  color: #15803d;
}
.summary-block .summary-label {
  font-size: 0.875rem;
  color: #667085;
  margin-bottom: 4px;
}
.summary-block .summary-value {
  font-size: 0.95rem;
  color: #1f2937;
  font-weight: 500;
}
</style>
