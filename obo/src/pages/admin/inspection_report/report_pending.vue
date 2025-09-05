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
                <span class="text-h5 font-weight-bold">JM</span>
              </v-avatar>
              <div class="ml-4">
                <h1 class="header-title">Jacqueline Azada</h1>
                <p class="header-subtitle">jacquelineazada@gmail.com</p>
                <p class="header-subtitle">BP-2023-8888-001</p>
              </div>
              <v-spacer></v-spacer>
              <v-chip size="default" color="warning" variant="tonal" class="status-chip">
                <v-icon start size="small">mdi-clock-outline</v-icon>
                Building Inspection
              </v-chip>
            </v-card-text>
          </v-card>

          <v-row>
            <v-col cols="12" lg="8">
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Applicant Information</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6">
                      <div class="info-block">
                        <div class="info-label">Applicant Name</div>
                        <div class="info-value">Jacqueline Azada</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Project Location</div>
                        <div class="info-value">San Felipe, Deca II Naga City</div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="info-block">
                        <div class="info-label">Project Name</div>
                        <div class="info-value">Commercial</div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card class="schedule-card" flat>
                <v-card-title class="schedule-title">Inspection Schedule</v-card-title>
                <v-card-text>
                  <div class="schedule-item">
                    <span class="schedule-label">Date</span>
                    <span class="schedule-value">January 15,2025</span>
                  </div>
                  <div class="schedule-item mt-4">
                    <span class="schedule-label">Time</span>
                    <span class="schedule-value">10:30am</span>
                  </div>
                  <div class="schedule-item mt-4">
                    <span class="schedule-label">Inspection Status</span>
                    <v-chip class="status-chip-result-pending" label size="small"
                      >Pending Result</v-chip
                    >
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Inspection Results</v-card-title>
                <v-table class="inspector-table" fixed-header height="300px">
                  <thead>
                    <tr>
                      <th class="text-left text-subtitle-2">Inspection Type</th>
                      <th class="text-left text-subtitle-2">Status</th>
                      <th class="text-left text-subtitle-2">Inspector Name</th>
                      <th class="text-left text-subtitle-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(inspection, i) in inspections" :key="i">
                      <td>{{ inspection.type }}</td>
                      <td>
                        <v-chip class="status-chip-pending" label size="small">
                          {{ inspection.status }}
                        </v-chip>
                      </td>
                      <td>{{ inspection.inspector }}</td>
                      <td>
                        <v-btn
                          color="#2563EB"
                          variant="text"
                          size="small"
                          @click="showReportDialog(i)"
                        >
                          View Report
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-dialog v-model="reportDialogVisible" max-width="800px">
          <v-card class="report-card" v-if="selectedInspection">
            <div class="report-header">
              <div>
                <div class="report-header-supertitle">DIV-307</div>
                <div class="report-header-title">{{ selectedInspection.type }}</div>
              </div>
              <v-btn icon variant="text" @click="reportDialogVisible = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <v-card-text class="pa-6">
              <div class="d-flex align-start">
                <div>
                  <div class="report-info-label">
                    Assigned Inspector: {{ selectedInspection.inspector }}
                  </div>
                  <div class="report-info-label">
                    Date of Inspection: {{ selectedInspection.date }}
                  </div>
                </div>
                <v-spacer></v-spacer>
                <v-chip class="status-chip-pending" label size="small">
                  {{ selectedInspection.status }}
                </v-chip>
              </div>
              <div class="report-content-placeholder"></div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-4">
              <v-btn :disabled="currentIndex === 0" @click="goToPrevious">
                <v-icon left>mdi-chevron-left</v-icon>
                Previous
              </v-btn>
              <v-spacer></v-spacer>
              <span class="text-body-2"
                >{{ currentIndex + 1 }} of {{ inspections.length }}</span
              >
              <v-spacer></v-spacer>
              <v-btn
                :disabled="currentIndex === inspections.length - 1"
                @click="goToNext"
                color="primary"
                variant="flat"
              >
                Next
                <v-icon right>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const drawer = ref(true);
    const reportDialogVisible = ref(false);
    const currentIndex = ref(0);

    const inspections = ref([
      {
        type: "Architectural Works",
        status: "Pending",
        inspector: "Eng. Joyce Oberos",
        date: "01/15/2025",
      },
      {
        type: "Civil/Structural Works",
        status: "Pending",
        inspector: "Eng. Roberto Martinez",
        date: "01/15/2025",
      },
      {
        type: "Electrical Works",
        status: "Pending",
        inspector: "Eng. Bernadette Veroza",
        date: "01/15/2025",
      },
      {
        type: "Sanitary Plumbing Works",
        status: "Pending",
        inspector: "Eng. Andrew Villapane",
        date: "01/15/2025",
      },
    ]);

    const selectedInspection = computed(
      () => inspections.value[currentIndex.value] || {}
    );

    const showReportDialog = (index) => {
      currentIndex.value = index;
      reportDialogVisible.value = true;
    };

    const goToNext = () => {
      if (currentIndex.value < inspections.value.length - 1) {
        currentIndex.value++;
      }
    };

    const goToPrevious = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    return {
      drawer,
      inspections,
      reportDialogVisible,
      currentIndex,
      selectedInspection,
      showReportDialog,
      goToNext,
      goToPrevious,
    };
  },
};
</script>

<style scoped>
.main-content {
  background-color: #f8f9fa;
}
.content-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 16px 24px 24px 24px;
}

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

.schedule-card {
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid #eaecf0;
}
.schedule-title {
  font-size: 1rem;
  font-weight: 600;
  color: #101828;
  padding: 16px 24px 8px 24px;
  border-bottom: 1px solid #eaecf0;
}
.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}
.schedule-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #667085;
}
.schedule-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #344054;
}

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

.status-chip {
  font-weight: 500;
}
.status-chip-pending {
  background-color: #fef9c3;
  color: #f59e0b;
  font-weight: 500;
  border-radius: 16px;
  font-size: 0.75rem;
  height: 22px;
}
.status-chip-result-pending {
  background-color: #fef3c7;
  color: #d97706;
  font-weight: 500;
  border-radius: 16px;
  font-size: 0.75rem;
  height: 22px;
}

.info-block {
  margin-bottom: 1.25rem;
}
.info-block:last-child {
  margin-bottom: 0;
}
.info-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #667085;
  margin-bottom: 4px;
}
.info-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: #344054;
}
.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.report-card {
  border-radius: 12px !important;
}
.report-header {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.report-header-supertitle {
  font-size: 0.8rem;
  color: #667085;
  margin-bottom: 2px;
}
.report-header-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #101828;
}
.report-info-label {
  font-size: 0.9rem;
  color: #4a4a4a;
  line-height: 1.6;
}
.report-content-placeholder {
  margin-top: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0b0b0;
}
</style>
