<template>
  <v-app>
    <v-card>
      <v-layout style="height: 100vh">
        <v-navigation-drawer v-model="drawer" permanent location="left" width="256">
          <v-list density="compact" nav class="mt-4">
            <v-list-subheader class="construction-permit-header">
              <v-icon size="20" class="mr-4">mdi-office-building</v-icon>
              Construction Permit
            </v-list-subheader>

            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" />
            <v-list-item
              prepend-icon="mdi-office-building"
              title="Building Permit"
              value="building_permit"
            />
            <v-list-item
              prepend-icon="mdi-file-document-outline"
              title="Occupancy Permit"
              value="occupancy_permit"
              class="active-nav-item mx-2"
            />
            <v-list-item
              prepend-icon="mdi-clipboard-list-outline"
              title="Compliance Monitoring"
              value="compliance_monitoring"
            />
          </v-list>

          <template v-slot:append>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" />
            </v-list>
          </template>
        </v-navigation-drawer>

        <v-main>
          <v-toolbar color="white" flat>
            <v-toolbar-title class="pl-4">Occupancy Permit Applicants</v-toolbar-title>
            <v-spacer></v-spacer>

            <div class="d-flex align-center pr-4">
              <v-btn icon class="mr-4">
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

          <v-container fluid>
            <v-row align="center">
              <v-col cols="12" md="6">
                <h2 class="welcome-header">Welcome Chrize! 👋</h2>
              </v-col>
              <v-col cols="12" md="6" class="text-md-right">
                <p class="datetime-display">{{ formattedDateTime }}</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="4" v-for="(card, i) in dashboardCards" :key="i">
                <v-card class="status-card" :color="card.color">
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <div class="text-subtitle-1 text-white">{{ card.label }}</div>
                      <div class="mt-2 card-number-total">{{ card.value }}</div>
                    </div>
                    <v-icon size="48" color="#FFFFFF">{{ card.icon }}</v-icon>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-4">
              <v-col cols="12">
                <v-card class="elevation-1">
                  <v-table class="applicants-table">
                    <thead>
                      <tr>
                        <th class="text-left text-subtitle-2">Date</th>
                        <th class="text-left text-subtitle-2">Time</th>
                        <th class="text-left text-subtitle-2">Applicant Name</th>
                        <th class="text-left text-subtitle-2">
                          Location of Installation
                        </th>
                        <th class="text-left text-subtitle-2">Status</th>
                        <th class="text-left text-subtitle-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="applicant in applicants" :key="applicant.appNumber">
                        <td>{{ applicant.date }}</td>
                        <td>{{ applicant.time }}</td>
                        <td>
                          <span :class="applicant.nameClass">{{ applicant.name }}</span>
                        </td>
                        <td>{{ applicant.location }}</td>
                        <td>
                          <v-chip
                            :class="getStatusChipClass(applicant.status)"
                            label
                            size="small"
                          >
                            {{ applicant.status }}
                          </v-chip>
                        </td>
                        <td>
                          <v-btn
                            color="#2563EB"
                            variant="text"
                            size="small"
                            @click="showInspectionDetails(applicant)"
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
        </v-main>

        <!-- PENDING: Inspection Details Dialog -->
        <v-dialog v-model="inspectionDialogVisible" max-width="650px">
          <v-card class="pa-4 rounded-lg inspection-dialog-card" v-if="selectedApplicant">
            <v-btn
              icon
              variant="text"
              class="close-btn"
              @click="inspectionDialogVisible = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <v-card-title class="d-flex align-center">
              <v-icon left class="mr-3 dialog-title-icon" size="32"
                >mdi-calendar-month</v-icon
              >
              <span class="font-weight-bold text-h6 dialog-title-text"
                >Inspection Details</span
              >
            </v-card-title>

            <v-card-text class="mt-4">
              <v-row>
                <v-col cols="12" md="6"
                  ><div class="info-label">Inspection Date</div>
                  <div class="info-value">
                    {{ selectedApplicant.inspectionDate }}
                  </div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Application Number</div>
                  <div class="info-value">{{ selectedApplicant.appNumber }}</div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Inspection Time</div>
                  <div class="info-value">
                    {{ selectedApplicant.inspectionTime }}
                  </div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Applicant Name</div>
                  <div class="info-value">{{ selectedApplicant.name }}</div></v-col
                >
                <v-col cols="12"
                  ><div class="info-label">Project Location</div>
                  <div class="info-value mb-0">
                    {{ selectedApplicant.location }}
                  </div></v-col
                >
              </v-row>
            </v-card-text>

            <v-card-actions class="justify-end pa-4 pt-2">
              <v-btn
                color="#4CAF50"
                variant="flat"
                class="action-btn text-white"
                @click="approveSchedule(selectedApplicant)"
                >Approve Schedule</v-btn
              >
              <v-btn
                color="#F44336"
                variant="flat"
                class="action-btn text-white"
                @click="rejectSchedule(selectedApplicant)"
                >Reject Schedule</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- APPROVED: Create Report Dialog -->
        <v-dialog v-model="createReportDialogVisible" max-width="650px">
          <v-card class="pa-4 rounded-lg inspection-dialog-card" v-if="selectedApplicant">
            <v-btn
              icon
              variant="text"
              class="close-btn"
              @click="createReportDialogVisible = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card-title class="d-flex align-center">
              <v-icon left class="mr-3 dialog-title-icon" size="32"
                >mdi-calendar-month</v-icon
              >
              <span class="font-weight-bold text-h6 dialog-title-text"
                >Inspection Details</span
              >
            </v-card-title>
            <v-card-text class="mt-4">
              <v-row>
                <v-col cols="12" md="6"
                  ><div class="info-label">Inspection Date</div>
                  <div class="info-value">
                    {{ selectedApplicant.inspectionDate }}
                  </div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Application Number</div>
                  <div class="info-value">{{ selectedApplicant.appNumber }}</div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Inspection Time</div>
                  <div class="info-value">
                    {{ selectedApplicant.inspectionTime }}
                  </div></v-col
                >
                <v-col cols="12" md="6"
                  ><div class="info-label">Applicant Name</div>
                  <div class="info-value">{{ selectedApplicant.name }}</div></v-col
                >
                <v-col cols="12"
                  ><div class="info-label">Project Location</div>
                  <div class="info-value mb-0">
                    {{ selectedApplicant.location }}
                  </div></v-col
                >
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-end pa-4 pt-2">
              <v-btn
                color="#2563EB"
                variant="flat"
                class="action-btn text-white"
                @click="goToCreateReportPage(selectedApplicant)"
              >
                Create Report
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router"; // Import the useRouter hook

const drawer = ref(true);
const inspectionDialogVisible = ref(false);
const createReportDialogVisible = ref(false);
const selectedApplicant = ref(null);
const formattedDateTime = ref("");
let intervalId = null;
const router = useRouter(); // Initialize the router

const applicants = ref([
  {
    date: "Jan 16, 2024",
    time: "09:30 AM",
    name: "Sarah Geronimo",
    location: "Barangay Concepcion Grande",
    status: "Pending",
    nameClass: "",
    appNumber: "BP-2024-001",
    inspectionDate: "Jan 15, 2024",
    inspectionTime: "10:00 am",
  },
  {
    date: "Jan 17, 2024",
    time: "10:15 AM",
    name: "Michael Padilla",
    location: "Barangay San Felipe",
    status: "Approved",
    nameClass: "font-weight-bold",
    appNumber: "BP-2024-002",
    inspectionDate: "Jan 17, 2024",
    inspectionTime: "11:00 am",
  },
]);

const pendingCount = computed(
  () => applicants.value.filter((app) => app.status === "Pending").length
);

const approvedCount = computed(
  () => applicants.value.filter((app) => app.status === "Approved").length
);

const dashboardCards = computed(() => [
  {
    label: "Total Applicants",
    value: applicants.value.length,
    color: "#2563EB",
    icon: "mdi-account-group",
  },
  {
    label: "Pending Schedule",
    value: pendingCount.value,
    color: "#FBBF24",
    icon: "mdi-clock-time-three-outline",
  },
  {
    label: "Approved",
    value: approvedCount.value,
    color: "#34D399",
    icon: "mdi-check-circle-outline",
  },
]);

const getStatusChipClass = (status) => {
  switch (status) {
    case "Pending":
      return "status-chip-pending";
    case "Approved":
      return "status-chip-verified";
    default:
      return "";
  }
};

const showInspectionDetails = (applicant) => {
  selectedApplicant.value = applicant;
  if (applicant.status === "Pending") {
    inspectionDialogVisible.value = true;
  } else if (applicant.status === "Approved") {
    createReportDialogVisible.value = true;
  }
};

const approveSchedule = (applicantToApprove) => {
  const index = applicants.value.findIndex(
    (app) => app.appNumber === applicantToApprove.appNumber
  );
  if (index !== -1) {
    applicants.value[index].status = "Approved";
    applicants.value[index].nameClass = "font-weight-bold";
  }
  inspectionDialogVisible.value = false;
};

const rejectSchedule = (applicantToReject) => {
  applicants.value = applicants.value.filter(
    (app) => app.appNumber !== applicantToReject.appNumber
  );
  inspectionDialogVisible.value = false;
};

const goToCreateReportPage = (applicant) => {
  if (!applicant) return;
  // Navigate to a new route, passing the applicant's ID as a parameter
  router.push({ name: "CreateReport", params: { id: applicant.appNumber } });
};

const updateTime = () => {
  const now = new Date();
  formattedDateTime.value = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  });
};

onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Navigation Drawer */
.v-navigation-drawer {
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}
.v-list-item {
  transition: all 0.1s ease;
  font-weight: 500;
  color: #333;
}
.v-list-item:hover {
  background-color: transparent;
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
  background-color: #2563eb;
  color: white !important;
  border-radius: 8px;
}
.active-nav-item :deep(.v-icon) {
  color: white !important;
}

/* Main Content Area */
.v-main {
  background-color: #f8f9fa !important;
}

/* Toolbar */
.v-toolbar {
  color: #333;
}
.v-toolbar-title {
  padding-left: 16px;
  font-weight: 600;
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

/* Welcome Header & Clock */
.welcome-header {
  font-size: 1.75rem;
  font-weight: 600;
  color: #101828;
}
.datetime-display {
  font-size: 0.95rem;
  color: #667085;
}

/* Dashboard Cards */
.status-card {
  border-radius: 12px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  padding: 24px;
  color: #fff;
}
.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}
.card-number-total {
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1;
}

/* Data Table */
.applicants-table {
  background-color: #ffffff;
}
.applicants-table th {
  font-weight: 600 !important;
  color: #4a4a4a !important;
  background-color: #f5f5f5 !important;
}
.applicants-table td {
  font-weight: 400 !important;
  color: #333333;
}

/* Status Chips */
.status-chip-pending {
  background-color: #fef3c7;
  color: #92400e;
  font-weight: 500;
  border-radius: 16px;
}
.status-chip-verified {
  background-color: #d1fae5;
  color: #065f46;
  font-weight: 500;
  border-radius: 16px;
}

/* General Styles */
.v-btn {
  font-weight: 500;
  text-transform: none;
}
.v-container {
  padding: 14px 32px;
}

/* Inspection Details Dialog */
.inspection-dialog-card {
  position: relative;
}
.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}
.dialog-title-icon {
  color: #4a4a4a;
}
.dialog-title-text {
  color: #333;
}
.info-label {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 4px;
}
.info-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 20px;
}
.action-btn {
  border-radius: 8px;
  text-transform: none;
  font-weight: 600;
  padding: 0 24px;
  height: 44px;
}
</style>
