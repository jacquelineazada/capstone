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
            <v-toolbar-title class="pl-4">Building Inspection Schedule</v-toolbar-title>
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
              <v-col cols="12" sm="6" md="4" v-for="(card, i) in dashboardCards" :key="i">
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
                            class="mr-2 avatar-style"
                            :style="{
                              backgroundColor: applicant.avatarBg,
                              color: applicant.avatarColor,
                            }"
                          >
                            {{ applicant.initials }}
                          </v-avatar>
                          {{ applicant.name }}
                        </td>
                        <td>{{ applicant.appNumber }}</td>
                        <td>{{ applicant.inspectionDate }}</td>
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
                            color="#2563EB"
                            variant="text"
                            size="small"
                            to="ScheduleMix"
                          >
                            View Details
                          </v-btn>
                          <v-btn
                            v-else-if="applicant.status === 'Scheduled'"
                            color="#065F46"
                            variant="text"
                            size="small"
                            to="ScheduleApp"
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
const statusOptions = ref(["All", "Pending", "Scheduled"]);

const applicants = ref([
  {
    initials: "JA",
    name: "Jacqueline Azada",
    appNumber: "BP-2024-808123-T",
    inspectionDate: "Jan 15, 2024",
    status: "Pending",
    avatarBg: "#bbdefb",
    avatarColor: "#1e88e5",
  },
  {
    initials: "CF",
    name: "Conrad Fisher",
    appNumber: "BP-2024-808124-T",
    inspectionDate: "Jan 16, 2024",
    status: "Scheduled",
    avatarBg: "#c8e6c9",
    avatarColor: "#43a047",
  },
]);

// Computed properties for dynamic status counts
const pendingCount = computed(
  () => applicants.value.filter((app) => app.status === "Pending").length
);
const scheduledCount = computed(
  () => applicants.value.filter((app) => app.status === "Scheduled").length
);

const dashboardCards = computed(() => [
  {
    label: "Total Schedules",
    value: applicants.value.length,
    color: "#2563EB",
    icon: "mdi-calendar-check",
  },
  {
    label: "Pending",
    value: pendingCount.value,
    color: "#FBBF24",
    icon: "mdi-clock-outline",
  },
  {
    label: "Scheduled",
    value: scheduledCount.value,
    color: "#34D399",
    icon: "mdi-calendar-month",
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
    case "Scheduled":
      return "status-chip-scheduled";
    default:
      return "";
  }
};

// Function to update the time
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
    timeZone: "Asia/Manila", // Set timezone to Philippines
  });
};

// Lifecycle hooks to start and stop the clock
onMounted(() => {
  updateTime(); // Call it once on mount
  intervalId = setInterval(updateTime, 1000); // Update every second
});
onUnmounted(() => {
  clearInterval(intervalId); // Clean up interval on component unmount
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

/* Welcome Header and Time Styles */
.welcome-header {
  font-size: 1.5rem;
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
  padding: 16px;
  color: #fff;
}
.status-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}
.card-number-total {
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2rem;
  color: #fff;
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
.status-chip-scheduled {
  background-color: #d1fae5;
  color: #065f46;
  font-weight: 500;
  border-radius: 16px;
}

/* Avatars */
.avatar-style {
  font-weight: 400;
}

/* Search and Filter */
.v-text-field {
  max-width: 450px;
}
.v-btn {
  font-weight: 500;
  text-transform: none;
}
.v-container {
  padding: 14px 32px;
}
</style>
