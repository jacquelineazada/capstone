<template>
  <v-card>
    <v-layout class="h-screen">
      <v-navigation-drawer v-model="drawer" permanent location="left" width="256">
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
                    src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/482007057_953929396944205_496784858672308185_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wHRp2ywmg6sQ7kNvwGuX332&_nc_oc=AdmbCqYfpGyCkJtS3_CBplXRECv1Pt36k8Eps9U4EcpEMLciMtV3sF1WBvXtM5K5jxg&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=Kwmn71tbCPPCwoJ3yEODww&oh=00_AfXA_4VBul9IDSau3RtgmmoM6p3379_D7_JaqiPcyBBRkQ&oe=68B90134"
                    alt="Chrize Azada"
                  ></v-img>
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
          <v-row align="center" class="my-2">
            <v-col cols="12" md="6">
              <h2 class="welcome-header">Welcome Chrize! 👋</h2>
            </v-col>
            <v-col cols="12" md="6" class="text-md-right">
              <p class="datetime-display">{{ formattedDateTime }}</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-card class="status-card" color="#2563EB">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-subtitle-1 text-white">Total Applicants</div>
                    <div class="card-number-total mt-2">
                      {{ applicants.length }}
                    </div>
                  </div>
                  <v-icon size="48" color="#FFFFFF">mdi-account-group-outline</v-icon>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-card class="status-card" color="#FBBF24">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-subtitle-1 text-white">Pending</div>
                    <div class="card-number-pending mt-2">1</div>
                  </div>
                  <v-icon size="48" color="#FFFFFF">mdi-clock-outline</v-icon>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-card class="status-card" color="#34D399">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-subtitle-1 text-white">Verified</div>
                    <div class="card-number-verified mt-2">1</div>
                  </div>
                  <v-icon size="48" color="#FFFFFF">mdi-check-decagram-outline</v-icon>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-card class="status-card" color="#F87171">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-subtitle-1 text-white">Returned</div>
                    <div class="card-number-returned mt-2">1</div>
                  </div>
                  <v-icon size="48" color="#FFFFFF">mdi-arrow-u-left-top</v-icon>
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
              ></v-text-field>

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
                    ></v-select>
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
                      <th class="text-left text-subtitle-2">Date Submitted</th>
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
                          >{{ applicant.initials }}</v-avatar
                        >
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
                          color="#2563EB"
                          variant="text"
                          size="small"
                          :to="{
                            name: 'PendingDetails',
                            params: { id: applicant.appNumber },
                          }"
                        >
                          View Details
                        </v-btn>

                        <v-btn
                          v-else-if="applicant.status === 'Verified'"
                          color="#065F46"
                          variant="text"
                          size="small"
                          :to="{
                            name: 'VerifiedDetails',
                            params: { id: applicant.appNumber },
                          }"
                        >
                          View Details
                        </v-btn>

                        <v-btn
                          v-else-if="applicant.status === 'Returned'"
                          color="#991B1B"
                          variant="text"
                          size="small"
                          :to="{
                            name: 'ReturnedDetails',
                            params: { id: applicant.appNumber },
                          }"
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const drawer = ref(true);
const formattedDateTime = ref("");
let intervalId = null;

const searchQuery = ref("");
const selectedStatus = ref("All");
const statusOptions = ref(["All", "Pending", "Verified", "Returned"]);

const applicants = ref([
  {
    initials: "JA",
    name: "Jacqueline Azada",
    appNumber: "BP-2024-808123-T",
    date: "Jan 15, 2024",
    status: "Pending",
    avatarBg: "#bbdefb",
    avatarColor: "#1e88e5",
  },
  {
    initials: "SG",
    name: "Sarah Geronimo",
    appNumber: "BP-2024-808234-T",
    date: "Jan 16, 2024",
    status: "Verified",
    avatarBg: "#c8e6c9",
    avatarColor: "#43a047",
  },
  {
    initials: "MP",
    name: "Michael Padilla",
    appNumber: "BP-2024-808345-T",
    date: "Jan 17, 2024",
    status: "Returned",
    avatarBg: "#ffcdd2",
    avatarColor: "#e53935",
  },
]);

const filteredApplicants = computed(() => {
  let filtered = applicants.value;

  if (searchQuery.value) {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (applicant) =>
        applicant.name.toLowerCase().includes(lowerCaseQuery) ||
        applicant.appNumber.toLowerCase().includes(lowerCaseQuery)
    );
  }

  if (selectedStatus.value && selectedStatus.value !== "All") {
    filtered = filtered.filter((applicant) => applicant.status === selectedStatus.value);
  }

  return filtered;
});

const getStatusChipClass = (status) => {
  switch (status) {
    case "Pending":
      return "status-chip-pending";
    case "Verified":
      return "status-chip-verified";
    case "Returned":
      return "status-chip-returned";
    default:
      return "";
  }
};

const updateTime = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  };
  formattedDateTime.value = now.toLocaleString("en-US", options);
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

.v-main {
  background-color: #f8f9fa !important;
}

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

.welcome-header {
  font-size: 1.5rem;
  font-weight: 600;
  color: #101828;
}
.datetime-display {
  font-size: 0.95rem;
  color: #667085;
}

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
.card-number-total,
.card-number-pending,
.card-number-verified,
.card-number-returned {
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2rem;
  color: #fff;
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
  font-weight: 400 !important;
  color: #333333;
}

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
.status-chip-returned {
  background-color: #fee2e2;
  color: #991b1b;
  font-weight: 500;
  border-radius: 16px;
}

.avatar-style {
  font-weight: 400;
}

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
