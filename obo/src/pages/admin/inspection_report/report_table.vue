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
            <v-toolbar-title class="pl-4">Building Inspection Report</v-toolbar-title>
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
                    <div class="user-role">Engineer</div>
                  </div>
                </div>
              </v-btn>
            </div>
          </v-toolbar>

          <v-container fluid>
            <v-row align="center" class="my-2">
              <v-col cols="12" md="6">
                <h2 class="welcome-header">Welcome Chrize! 👋</h2>
              </v-col>
              <v-col cols="12" md="6" class="text-md-right">
                <p class="datetime-display">{{ formattedDateTime }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="3" v-for="(card, i) in dashboardCards" :key="i">
                <v-card :class="['status-card-new', card.customClass]" flat>
                  <div class="d-flex justify-space-between align-center">
                    <div class="flex-grow-1">
                      <div class="card-label">{{ card.label }}</div>
                      <div class="card-value">{{ card.value }}</div>
                    </div>
                    <v-icon size="36" :color="card.iconColor">{{ card.icon }}</v-icon>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-4" align="center" no-gutters>
              <v-col cols="12" md="8" class="d-flex align-center">
                <v-text-field
                  v-model="searchQuery"
                  density="compact"
                  variant="outlined"
                  label="Search by name or application number..."
                  prepend-inner-icon="mdi-magnify"
                  hide-details
                  class="flex-grow-1"
                  bg-color="white"
                />

                <v-menu offset-y>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      color="#2563EB"
                      variant="flat"
                      class="ml-2 text-white"
                      height="40"
                    >
                      <v-icon left>mdi-filter-variant</v-icon>
                      Filter
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-select
                        v-model="selectedStatus"
                        :items="statusOptions"
                        label="Status"
                        density="compact"
                        variant="outlined"
                        hide-details
                      />
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>

            <v-row class="mt-4">
              <v-col cols="12">
                <v-card class="elevation-1">
                  <v-table class="applicants-table">
                    <thead>
                      <tr>
                        <th class="text-left text-subtitle-2">Applicant Name</th>
                        <th class="text-left text-subtitle-2">Application Number</th>
                        <th class="text-left text-subtitle-2">Inspection Date</th>
                        <th class="text-left text-subtitle-2">Status</th>
                        <th class="text-left text-subtitle-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="applicant in filteredApplicants"
                        :key="applicant.appNumber"
                      >
                        <td>
                          <v-avatar
                            size="36"
                            class="mr-3"
                            :style="{
                              backgroundColor: applicant.avatarBg,
                              color: applicant.avatarColor,
                              fontWeight: 500,
                            }"
                          >
                            {{ applicant.initials }}
                          </v-avatar>
                          {{ applicant.name }}
                        </td>
                        <td>{{ applicant.appNumber }}</td>
                        <td>{{ applicant.date }}</td>
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
                            v-if="applicant.status === 'Pending'"
                            :class="getStatusButtonClass(applicant.status)"
                            size="small"
                            variant="text"
                            to="ReportPending"
                          >
                            View Details
                          </v-btn>
                          <v-btn
                            v-else-if="applicant.status === 'Passed'"
                            :class="getStatusButtonClass(applicant.status)"
                            size="small"
                            variant="text"
                            to="ReportApproved"
                          >
                            View Details
                          </v-btn>
                          <v-btn
                            v-else-if="applicant.status === 'Violation'"
                            :class="getStatusButtonClass(applicant.status)"
                            size="small"
                            variant="text"
                            to="/violation-details"
                          >
                            View Details
                          </v-btn>
                        </td>
                      </tr>
                      <tr v-if="filteredApplicants.length === 0">
                        <td colspan="5" class="text-center py-4">No applicants found.</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const drawer = ref(true);
const formattedDateTime = ref("");
let intervalId = null;

const searchQuery = ref("");
const selectedStatus = ref("All");
const statusOptions = ref(["All", "Pending", "Passed", "Violation"]);

const applicants = ref([
  {
    initials: "JA",
    name: "Jacqueline Azada",
    appNumber: "BP-2024-808123-T",
    date: "Jan 15, 2024",
    status: "Pending",
    avatarBg: "#FEF3C7",
    avatarColor: "#92400E",
  },
  {
    initials: "SG",
    name: "Sarah Geronimo",
    appNumber: "BP-2024-808234-T",
    date: "Jan 16, 2024",
    status: "Passed",
    avatarBg: "#D1FAE5",
    avatarColor: "#065F46",
  },
  {
    initials: "MP",
    name: "Michael Padilla",
    appNumber: "BP-2024-808345-T",
    date: "Jan 17, 2024",
    status: "Violation",
    avatarBg: "#FEE2E2",
    avatarColor: "#991B1B",
  },
]);

const pendingCount = computed(
  () => applicants.value.filter((app) => app.status === "Pending").length
);
const passedCount = computed(
  () => applicants.value.filter((app) => app.status === "Passed").length
);
const violationCount = computed(
  () => applicants.value.filter((app) => app.status === "Violation").length
);

const dashboardCards = computed(() => [
  {
    label: "Total Applicants",
    value: applicants.value.length,
    icon: "mdi-account-group-outline",
    iconColor: "#FFFFFF",
    customClass: "total-card",
  },
  {
    label: "Pending",
    value: pendingCount.value,
    icon: "mdi-clock-outline",
    iconColor: "#92400E",
    customClass: "pending-card",
  },
  {
    label: "Passed",
    value: passedCount.value,
    icon: "mdi-check-circle",
    iconColor: "#065F46",
    customClass: "passed-card",
  },
  {
    label: "Violation",
    value: violationCount.value,
    icon: "mdi-alert-circle",
    iconColor: "#991B1B",
    customClass: "violation-card",
  },
]);

const filteredApplicants = computed(() => {
  let filtered = applicants.value;
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (app) =>
        app.name.toLowerCase().includes(q) || app.appNumber.toLowerCase().includes(q)
    );
  }
  if (selectedStatus.value && selectedStatus.value !== "All") {
    filtered = filtered.filter((app) => app.status === selectedStatus.value);
  }
  return filtered;
});

const getStatusChipClass = (status) => {
  switch (status) {
    case "Pending":
      return "status-chip-pending";
    case "Passed":
      return "status-chip-passed";
    case "Violation":
      return "status-chip-violation";
    default:
      return "";
  }
};

const getStatusButtonClass = (status) => {
  switch (status) {
    case "Pending":
      return "action-btn-pending";
    case "Passed":
      return "action-btn-passed";
    case "Violation":
      return "action-btn-violation";
    default:
      return "";
  }
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
onUnmounted(() => clearInterval(intervalId));
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}
.v-list-item {
  transition: all 0.1s ease;
  font-weight: 500;
  color: #333;
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

.v-main {
  background-color: #f8f9fa !important;
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

.welcome-header {
  font-size: 1.5rem;
  font-weight: 600;
  color: #101828;
}
.datetime-display {
  font-size: 0.95rem;
  color: #667085;
}

.status-card-new {
  border-radius: 12px;
  padding: 20px;
}
.card-label {
  font-size: 0.9rem;
  font-weight: 500;
}
.card-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.2rem;
}
.total-card {
  background-color: #2563eb;
  color: #ffffff;
}
.pending-card {
  background-color: #fef3c7;
  color: #92400e;
}
.passed-card {
  background-color: #d1fae5;
  color: #065f46;
}
.violation-card {
  background-color: #fee2e2;
  color: #991b1b;
}

.applicants-table {
  background-color: #ffffff;
}
.applicants-table th {
  font-weight: 600 !important;
  color: #4a4a4a !important;
  background-color: #f5f5f5 !important;
}
.applicants-table td {
  font-weight: 500;
  color: #333333;
  vertical-align: middle;
}
.status-chip-pending {
  background-color: #fef9c3 !important;
  color: #a16207 !important;
  border-radius: 16px !important;
  border: none !important;
}
.status-chip-passed {
  background-color: #d1fae5 !important;
  color: #065f46 !important;
  border-radius: 16px !important;
  border: none !important;
}
.status-chip-violation {
  background-color: #fee2e2 !important;
  color: #991b1b !important;
  border-radius: 16px !important;
  border: none !important;
}

.action-btn-pending {
  color: #3730a3 !important;
}
.action-btn-passed {
  color: #065f46 !important;
}
.action-btn-violation {
  color: #991b1b !important;
}

.v-btn {
  font-weight: 500;
  text-transform: none;
  border-radius: 6px;
}
.v-container {
  padding: 14px 32px;
}
</style>
