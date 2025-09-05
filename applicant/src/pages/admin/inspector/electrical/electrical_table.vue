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
            <v-toolbar-title class="pl-4">As to Electrical Works</v-toolbar-title>
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
                      alt="Conrad Fisher"
                    />
                  </v-avatar>
                  <div class="ml-3 text-left">
                    <div class="user-name">Conrad Fisher</div>
                    <div class="user-role">Engineer</div>
                  </div>
                </div>
              </v-btn>
            </div>
          </v-toolbar>
          <v-container fluid>
            <v-row align="center">
              <v-col cols="12" md="6">
                <h2 class="welcome-header">Welcome Conrad! 👋</h2>
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
                            >{{ applicant.status }}</v-chip
                          >
                        </td>
                        <td>
                          <v-btn
                            color="#2563EB"
                            variant="text"
                            size="small"
                            @click="showInspectionDetails(applicant)"
                            >View Details</v-btn
                          >
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>

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
                <v-col cols="12" md="6">
                  <div class="info-label">Inspection Date</div>
                  <div class="info-value">{{ selectedApplicant.inspectionDate }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Application Number</div>
                  <div class="info-value">{{ selectedApplicant.appNumber }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Inspection Time</div>
                  <div class="info-value">{{ selectedApplicant.inspectionTime }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Applicant Name</div>
                  <div class="info-value">{{ selectedApplicant.name }}</div>
                </v-col>
                <v-col cols="12">
                  <div class="info-label">Project Location</div>
                  <div class="info-value mb-0">{{ selectedApplicant.location }}</div>
                </v-col>
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
                <v-col cols="12" md="6">
                  <div class="info-label">Inspection Date</div>
                  <div class="info-value">{{ selectedApplicant.inspectionDate }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Application Number</div>
                  <div class="info-value">{{ selectedApplicant.appNumber }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Inspection Time</div>
                  <div class="info-value">{{ selectedApplicant.inspectionTime }}</div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="info-label">Applicant Name</div>
                  <div class="info-value">{{ selectedApplicant.name }}</div>
                </v-col>
                <v-col cols="12">
                  <div class="info-label">Project Location</div>
                  <div class="info-value mb-0">{{ selectedApplicant.location }}</div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-end pa-4 pt-2">
              <v-btn color="#2563EB" variant="flat" @click="openElectricalChecklistDialog"
                >Create Report</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="electricalChecklistDialogVisible" max-width="800px">
          <v-card class="pa-4">
            <v-card-title class="text-h5 font-weight-bold pb-4"
              >Electrical Works Checklist</v-card-title
            >
            <v-card-text>
              <v-container>
                <div v-for="(item, index) in checklistItems" :key="index" class="mb-2">
                  <v-row align="center">
                    <v-col cols="12" sm="4">
                      <v-checkbox
                        v-model="item.checked"
                        :label="item.label"
                        hide-details
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <v-text-field
                        v-if="item.label !== 'Others'"
                        v-model="item.remarks"
                        placeholder="Enter remarks..."
                        variant="outlined"
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row v-if="item.label === 'Others' && item.checked">
                    <v-col cols="12">
                      <v-textarea
                        v-model="item.remarks"
                        label="Enter detailed assessment findings..."
                        variant="outlined"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </div>
              </v-container>
            </v-card-text>
            <v-card-actions class="justify-end pa-4">
              <v-btn color="error" variant="flat" @click="submitReport('VIOLATION')"
                >Violation</v-btn
              >
              <v-btn
                color="success"
                variant="flat"
                class="ml-2"
                @click="submitReport('PASSED')"
                >Passed</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="confirmActionDialogVisible" max-width="450px" persistent>
          <v-card class="rounded-lg">
            <v-card-title class="text-h5 font-weight-bold pt-6 px-6"
              >Confirm Action</v-card-title
            >
            <v-card-text class="px-6 py-4"
              >Are you sure you want to mark this inspection as
              {{ statusToConfirm }}?</v-card-text
            >
            <v-card-actions class="pa-4">
              <v-spacer></v-spacer>
              <v-btn
                variant="text"
                @click="confirmActionDialogVisible = false"
                class="px-4"
                >Cancel</v-btn
              >
              <v-btn
                :color="statusToConfirm === 'PASSED' ? '#22C55E' : '#EF4444'"
                variant="flat"
                @click="handleConfirmation"
                class="px-4 text-white"
                style="border-radius: 8px"
              >
                {{ statusToConfirm === "PASSED" ? "Confirm" : "Confirm Violation" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="finalReportDialogVisible" max-width="850px" persistent>
          <v-card class="rounded-lg">
            <v-card-title
              class="d-flex justify-space-between align-center pt-4 pb-2 px-6"
            >
              <span class="text-h5 font-weight-bold">Electrical Works Checklist</span>
              <v-btn icon variant="text" @click="finalReportDialogVisible = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="px-6">
              <div class="d-flex justify-space-between align-center mb-6">
                <div>
                  <div class="report-info-label">
                    Assigned Inspector: Eng. Joyce Oberos
                  </div>
                  <div class="report-info-label">Date of Inspection: 06/07/2023</div>
                </div>
                <v-chip
                  :color="
                    statusToConfirm === 'PASSED' ? 'green-lighten-5' : 'orange-lighten-4'
                  "
                  :text-color="
                    statusToConfirm === 'PASSED' ? 'green-darken-3' : 'orange-darken-4'
                  "
                  label
                  class="font-weight-bold text-capitalize"
                  size="small"
                >
                  {{ statusToConfirm?.toLowerCase() }}
                </v-chip>
              </div>

              <div v-for="(item, i) in reportItems" :key="i" class="mb-5">
                <div class="report-item-title">{{ item.title }}</div>
                <div class="report-item-desc">{{ item.desc }}</div>
              </div>
            </v-card-text>
            <v-card-actions class="pa-6 pt-2">
              <v-spacer></v-spacer>
              <v-btn
                color="#2563EB"
                variant="flat"
                size="large"
                prepend-icon="mdi-send-outline"
                class="text-white"
                @click="submitFinalReport"
                style="border-radius: 8px"
              >
                Submit Report
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

const drawer = ref(true);
const inspectionDialogVisible = ref(false);
const createReportDialogVisible = ref(false);
const selectedApplicant = ref(null);
const formattedDateTime = ref("");
let intervalId = null;

const electricalChecklistDialogVisible = ref(false);

const confirmActionDialogVisible = ref(false);
const statusToConfirm = ref(null);

// ADDED: State for the final report dialog
const finalReportDialogVisible = ref(false);

const checklistItems = ref([
  { label: "General Requirements", checked: false, remarks: "" },
  { label: "General Wiring Method", checked: false, remarks: "" },
  { label: "Services, Feeders & Branch Circuits", checked: false, remarks: "" },
  { label: "Grounding & Bonding", checked: false, remarks: "" },
  { label: "Hazardous Locations", checked: false, remarks: "" },
  { label: "Special Occupancies", checked: false, remarks: "" },
  { label: "Swimming Pools & Related Installations", checked: false, remarks: "" },
  { label: "Emergency & Standby Systems & Fire Pumps", checked: false, remarks: "" },
  { label: "Others", checked: false, remarks: "" },
]);

// ADDED: Data for the final report summary display
const reportItems = ref([
  {
    title: "Application for Building Permit",
    desc: "The necessary application for the building permit has been completed.",
  },
  {
    title: "Scaffolding & Sidewalk",
    desc:
      "Preparations and assessments related to scaffolding and sidewalk requirements have been addressed.",
  },
  {
    title: "Safety Requirements for Construction/Demolition",
    desc:
      "All essential safety requirements for construction and/or demolition activities have been met.",
  },
  {
    title: "Structural Hazards",
    desc: "Identified structural hazards have been assessed and addressed.",
  },
  {
    title: "Others",
    desc: "Additional miscellaneous items or considerations have been reviewed.",
  },
]);

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

const openElectricalChecklistDialog = () => {
  createReportDialogVisible.value = false;
  electricalChecklistDialogVisible.value = true;
};

const submitReport = (status) => {
  statusToConfirm.value = status;
  confirmActionDialogVisible.value = true;
};

// MODIFIED: This function now opens the final report dialog instead of finishing
const handleConfirmation = () => {
  // Close the previous dialogs
  confirmActionDialogVisible.value = false;
  electricalChecklistDialogVisible.value = false;

  // Open the new final report dialog
  finalReportDialogVisible.value = true;
};

// ADDED: This function handles the final submission from the report summary dialog
const submitFinalReport = () => {
  const status = statusToConfirm.value;
  console.log(`✅ FINAL REPORT SUBMITTED with status: ${status}`);
  console.log("Checklist Data:", checklistItems.value);

  // You would typically send this data to your backend here

  // Close the final dialog
  finalReportDialogVisible.value = false;

  // Reset everything for the next inspection
  checklistItems.value.forEach((item) => {
    item.checked = false;
    item.remarks = "";
  });
  statusToConfirm.value = null;
  selectedApplicant.value = null;

  // Here you would likely update the main applicant list to show the new status
  // For example, you could change "Approved" to "Inspected - Passed"
  alert(`Report for ${status} has been submitted!`);
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
/* Your existing styles (No changes needed) */
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
  font-size: 1.75rem;
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
.v-btn {
  font-weight: 500;
  text-transform: none;
}
.v-container {
  padding: 14px 32px;
}
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

/* ADDED: Styles for the Final Report Dialog */
.report-info-label {
  color: #667085;
  font-size: 0.9rem;
}
.report-item-title {
  font-weight: 600;
  color: #101828;
  font-size: 1rem;
  margin-bottom: 4px;
}
.report-item-desc {
  color: #667085;
  font-size: 0.9rem;
  padding-left: 16px; /* Indent the description */
  border-left: 2px solid #eef2ff;
}
</style>
