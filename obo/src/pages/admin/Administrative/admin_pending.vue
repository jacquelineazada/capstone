<template>
  <v-card flat>
    <v-layout>
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
            >Occupancy Permit Applicants</v-toolbar-title
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
              <v-avatar size="56" rounded="lg" class="mr-4 applicant-avatar">
                <span class="text-h5 font-weight-bold">JA</span>
              </v-avatar>
              <div class="d-flex flex-column">
                <h1 class="header-title">Jacqueline Azada</h1>
                <p class="header-email">jacqueline.azada@gmail.com</p>
                <p class="header-application-id">BP-2024-000123-T</p>
              </div>
              <v-spacer></v-spacer>
              <div class="d-flex flex-column align-end">
                <v-chip size="default" class="status-chip mb-2 pending-review-chip">
                  <v-icon start size="small">mdi-clock-outline</v-icon>
                  Pending Review
                </v-chip>
                <p class="header-submitted-date">Submitted: Jan 15, 2024</p>
              </div>
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
                        <div class="info-value">San Felipe, Deca || Naga City</div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="info-block">
                        <div class="info-label">Application Type</div>
                        <div class="info-value">Full</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Project Name</div>
                        <div class="info-value">Commercial</div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Property Details</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6">
                      <div class="info-block">
                        <div class="info-label">Property Type</div>
                        <div class="info-value">Commercial Building</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Building Use</div>
                        <div class="info-value">Retail Store</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Property Address</div>
                        <div class="info-value">
                          456 Commercial Avenue, San Felipe, Deca || Naga City
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="info-block">
                        <div class="info-label">Floor Area</div>
                        <div class="info-value">230 sq m</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Number of Floors</div>
                        <div class="info-value">2 Floors</div>
                      </div>
                      <div class="info-block">
                        <div class="info-label">Lot Area</div>
                        <div class="info-value">350 sq m</div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <v-card class="section-card" flat>
                <v-card-title class="section-title">Required Documents</v-card-title>
                <v-list class="py-0">
                  <v-list-item
                    v-for="(doc, i) in documents"
                    :key="i"
                    class="document-item"
                  >
                    <template v-slot:prepend>
                      <v-icon :icon="doc.icon" color="red-lighten-1"></v-icon>
                    </template>
                    <v-list-item-title class="document-title">{{
                      doc.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Required Document</v-list-item-subtitle>
                    <template v-slot:append>
                      <v-btn color="#2563EB" size="small" @click="viewDocument(doc)"
                        >View</v-btn
                      >
                    </template>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <v-col cols="12" lg="4">
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Application Summary</v-card-title>
                <v-card-text>
                  <div class="summary-item">
                    <span class="info-label">Application Number</span
                    ><span class="info-value font-weight-medium">BP-2024-000123-T</span>
                  </div>
                  <div class="summary-item mt-4">
                    <span class="info-label">Type</span
                    ><span class="info-value">Occupancy Permit</span>
                  </div>
                  <div class="summary-item mt-4">
                    <span class="info-label">Processing Fee</span
                    ><span class="info-value">-</span>
                  </div>
                  <div class="summary-item mt-4">
                    <span class="info-label">Payment Status</span>
                    <v-chip size="default" variant="tonal" class="status-chip">
                      <v-icon start size="small">mdi-clock-outline</v-icon>
                      Pending Evaluation
                    </v-chip>
                  </div>
                  <v-alert
                    density="compact"
                    class="mt-6 note-alert"
                    icon="mdi-information-outline"
                  >
                    Payment will be processed after building inspection is complete.
                  </v-alert>
                </v-card-text>
              </v-card>
              <v-card class="section-card" flat>
                <v-card-title class="section-title">Application Timeline</v-card-title>
                <v-card-text>
                  <v-timeline
                    align="start"
                    side="end"
                    density="compact"
                    truncate-line="both"
                  >
                    <v-timeline-item dot-color="success" size="x-small">
                      <div class="timeline-title">Application Submitted</div>
                      <div class="timeline-time">Jan 15, 2024 - 10:20 AM</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="blue-grey-lighten-2" size="x-small">
                      <div class="timeline-title-pending">Documents Verified</div>
                      <div class="timeline-time">Pending</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="blue-grey-lighten-2" size="x-small">
                      <div class="timeline-title-pending">Building Inspection</div>
                      <div class="timeline-time">Pending</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="blue-grey-lighten-2" size="x-small">
                      <div class="timeline-title-pending">Payment Processing</div>
                      <div class="timeline-time">Pending</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="blue-grey-lighten-2" size="x-small">
                      <div class="timeline-title-pending">Final Approval</div>
                      <div class="timeline-time">Pending</div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>

    <v-dialog
      v-model="dialogVisible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="pdf-dialog-card">
        <v-toolbar color="primary" dark>
          <v-btn icon dark @click="dialogVisible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ selectedDocTitle }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0 pdf-container">
          <iframe :src="selectedDocUrl" width="100%" height="100%" frameborder="0">
            Loading PDF...
          </iframe>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4 bg-white">
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            variant="flat"
            size="large"
            @click="handleReturn"
            class="mx-2"
          >
            <v-icon start>mdi-close-circle-outline</v-icon>
            Return
          </v-btn>
          <v-btn
            color="green"
            variant="flat"
            size="large"
            @click="handleVerify"
            class="mx-2"
          >
            <v-icon start>mdi-check-circle-outline</v-icon>
            Verified
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="scheduleDialogVisible" persistent max-width="700px">
      <v-card class="schedule-card">
        <div class="approval-header">
          <div class="d-flex align-center">
            <v-icon color="success" class="mr-3">mdi-check-circle</v-icon>
            <span class="approval-title">Application Verified</span>
          </div>
          <v-btn icon variant="text" size="small" @click="closeScheduleDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="schedule-title"> Schedule Inspection </v-card-title>
        <v-card-text class="pt-4">
          <v-row>
            <v-col cols="12" md="6">
              <label class="form-label">Date of Inspection</label>
              <v-text-field
                v-model="inspectionDate"
                type="date"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <label class="form-label">Time</label>
              <v-text-field
                v-model="inspectionTime"
                type="time"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <label class="form-label mt-4 d-block">Assign Inspectors</label>
          <v-row>
            <v-col cols="12" md="6">
              <div class="inspector-label">
                <v-icon size="14" color="red-darken-1" class="mr-1"
                  >mdi-triangle-small-down</v-icon
                >
                Architectural Works
              </div>
              <v-select
                v-model="selectedInspectors.architectural"
                :items="inspectors"
                placeholder="Select Inspector"
                density="compact"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <div class="inspector-label">
                <v-icon size="14" color="blue-darken-1" class="mr-1"
                  >mdi-triangle-small-down</v-icon
                >
                Civil/Structural Works
              </div>
              <v-select
                v-model="selectedInspectors.civil"
                :items="inspectors"
                placeholder="Select Inspector"
                density="compact"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <div class="inspector-label">
                <v-icon size="14" color="orange-darken-1" class="mr-1"
                  >mdi-triangle-small-down</v-icon
                >
                Electrical Works
              </div>
              <v-select
                v-model="selectedInspectors.electrical"
                :items="inspectors"
                placeholder="Select Inspector"
                density="compact"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <div class="inspector-label">
                <v-icon size="14" color="teal-darken-1" class="mr-1"
                  >mdi-triangle-small-down</v-icon
                >
                Sanitary Plumbing Works
              </div>
              <v-select
                v-model="selectedInspectors.sanitary"
                :items="inspectors"
                placeholder="Select Inspector"
                density="compact"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-btn
            @click="sendSchedule"
            color="green-darken-1"
            variant="flat"
            block
            size="large"
          >
            Submit Schedule
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="returnDialogVisible" persistent max-width="600px">
      <v-card class="return-card">
        <v-card-title class="return-header">
          <v-icon class="return-header-icon">mdi-close-circle</v-icon>
          <span>Returned Application</span>
          <v-spacer></v-spacer>
          <v-btn icon variant="text" size="small" @click="closeReturnDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-6">
          <div class="return-info-grid">
            <div>
              <div class="info-label">Application Number</div>
              <div class="info-value">BP-2024-000123-T</div>
            </div>
            <div>
              <div class="info-label">Rejection Date</div>
              <div class="info-value">Jan 20, 2024</div>
            </div>
            <div>
              <div class="info-label">Reviewed By</div>
              <div class="info-value">Eng. Chrize Tolosa</div>
            </div>
            <div>
              <div class="info-label">Status</div>
              <div class="info-value">
                <v-chip color="red" variant="tonal" size="small">
                  <v-icon start>mdi-circle-small</v-icon>
                  Rejected
                </v-chip>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div class="form-label font-weight-bold">Select Rejection Reason</div>
            <div class="rejection-checkboxes">
              <v-checkbox
                v-for="reason in rejectionReasons"
                :key="reason"
                v-model="selectedReasons"
                :label="reason"
                :value="reason"
                hide-details
                density="compact"
              ></v-checkbox>
            </div>
          </div>
          <div class="mt-4">
            <div class="form-label font-weight-bold">Detailed Explanation</div>
            <v-textarea
              v-model="rejectionExplanation"
              placeholder="Please provide detailed explanation for the rejection..."
              variant="outlined"
              rows="4"
              no-resize
              maxlength="500"
            ></v-textarea>
          </div>
        </v-card-text>
        <v-card-actions class="pa-4 pt-0">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" size="large" @click="closeReturnDialog" class="mx-2"
            >Cancel</v-btn
          >
          <v-btn
            color="red"
            variant="flat"
            size="large"
            @click="confirmRejection"
            class="mx-2"
          >
            <v-icon start>mdi-check</v-icon>
            Confirm Rejection
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const drawer = ref(true);

    const dialogVisible = ref(false);
    const selectedDocUrl = ref("");
    const selectedDocTitle = ref("");

    const scheduleDialogVisible = ref(false);
    const inspectionDate = ref(null);
    const inspectionTime = ref(null);
    const inspectors = ref([
      "Eng. Joyce Oberos",
      "Eng. Roberto Martinez",
      "Eng. Bernadette Veroza",
      "Eng. Andrew Villapane",
    ]);
    const selectedInspectors = ref({
      architectural: null,
      civil: null,
      electrical: null,
      sanitary: null,
    });

    const returnDialogVisible = ref(false);
    const rejectionReasons = ref([
      "Incomplete or missing entries",
      "Not signed and certified by the supervising architect/civil engineer",
      "No record of required inspections and tests",
      "Altered, erased, or falsified entries",
      "Non-compliance with prescribed format and standards",
    ]);
    const selectedReasons = ref([]);
    const rejectionExplanation = ref("");

    const documents = ref([
      {
        title: "Construction Logbook",
        icon: "mdi-file-pdf-box",
        url: "https://drive.google.com/file/d/182bu9qPuKf3QtVyeEUOYApKjbEaPxoDF/preview",
      },
    ]);

    const viewDocument = (doc) => {
      selectedDocUrl.value = doc.url;
      selectedDocTitle.value = doc.title;
      dialogVisible.value = true;
    };

    const handleReturn = () => {
      console.log(`${selectedDocTitle.value} is being returned.`);
      dialogVisible.value = false;
      returnDialogVisible.value = true;
    };

    const handleVerify = () => {
      console.log(`${selectedDocTitle.value} has been verified.`);
      dialogVisible.value = false;
      scheduleDialogVisible.value = true;
    };

    const closeScheduleDialog = () => {
      scheduleDialogVisible.value = false;
      inspectionDate.value = null;
      inspectionTime.value = null;
      selectedInspectors.value = {
        architectural: null,
        civil: null,
        electrical: null,
        sanitary: null,
      };
    };

    const sendSchedule = () => {
      console.log("Sending Schedule with the following data:");
      console.log("Date:", inspectionDate.value);
      console.log("Time:", inspectionTime.value);
      console.log("Assigned Inspectors:", selectedInspectors.value);
      alert("Inspection Schedule has been sent!");
      closeScheduleDialog();
    };

    const closeReturnDialog = () => {
      returnDialogVisible.value = false;
      selectedReasons.value = [];
      rejectionExplanation.value = "";
    };

    const confirmRejection = () => {
      console.log("Confirming Rejection with the following data:");
      console.log("Reasons:", selectedReasons.value);
      console.log("Explanation:", rejectionExplanation.value);
      alert("Application has been returned.");
      closeReturnDialog();
    };

    return {
      drawer,
      documents,
      dialogVisible,
      selectedDocUrl,
      selectedDocTitle,
      viewDocument,
      handleReturn,
      handleVerify,
      scheduleDialogVisible,
      inspectionDate,
      inspectionTime,
      inspectors,
      selectedInspectors,
      closeScheduleDialog,
      sendSchedule,
      returnDialogVisible,
      rejectionReasons,
      selectedReasons,
      rejectionExplanation,
      closeReturnDialog,
      confirmRejection,
    };
  },
};
</script>

<style scoped>
.main-content {
  background-color: #f8f9fa;
}
.toolbar-title {
  padding-left: 16px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #344054;
}
.content-wrapper {
  max-width: 1800px;
  margin: 0 auto;
  padding: 16px 24px 24px 24px;
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

.header-card {
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 34px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid #eaecf0;
  width: 100%;
}

.header-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #101828;
  line-height: 1.2;
}
.header-email,
.header-application-id {
  color: #4e4f52;
  font-size: 0.875rem;
  line-height: 1.9;
}
.header-submitted-date {
  color: #667085;
  font-size: 0.8rem;
}
.applicant-avatar {
  background-color: #ffeff8;
}
.applicant-avatar .text-h5 {
  color: #db2777;
}
.pending-review-chip {
  background-color: #fefbeb;
  color: #e7c500;
}
.pending-review-chip :deep(.v-icon) {
  color: #f3c600;
}

.section-card {
  background-color: #ffffff;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 34, 73, 0.247);
  border: 1px solid #a7a7a741;
}
.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  padding: 16px 24px 8px 24px;
}
.v-card-text {
  padding: 8px 24px 16px 24px;
}

.info-block {
  margin-bottom: 1.25rem;
}
.info-block:last-child {
  margin-bottom: 0;
}
.info-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: #667085;
  margin-bottom: 6px;
}
.info-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1f2937;
}
.v-list {
  padding: 0 !important;
}

.v-list-item {
  transition: all 0.1s ease;
  font-weight: 500;
  color: #000000;
}

.document-item {
  border-bottom: 1px solid #eee;
  padding: 12px 24px !important;
}

.document-item:last-child {
  border-bottom: none;
}

.v-list-item__prepend {
  margin-inline-end: 16px;
}

.document-title {
  font-weight: 500;
  color: #344054;
  font-size: 0.95rem;
}

.v-list-item__subtitle {
  color: #667085;
  font-size: 0.875rem;
}

.v-btn--tonal {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 12px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-chip {
  font-weight: 500;
}
.note-alert {
  background-color: #f9fafb !important;
  color: #667085 !important;
  font-size: 0.85rem;
  border: 1px solid #eaecf0;
  box-shadow: none;
}
.timeline-title,
.timeline-title-pending {
  font-weight: 500;
  color: #344054;
  margin-bottom: 2px;
}
.timeline-title-pending {
  color: #667085;
}
.timeline-time {
  font-size: 0.8rem;
  color: #778aac;
}

.pdf-dialog-card {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.pdf-container {
  flex-grow: 1;
  overflow: hidden;
}

.schedule-card {
  border-radius: 12px !important;
}
.approval-header {
  background-color: #f0fdf4;
  color: #166534;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.approval-title {
  font-weight: 600;
  font-size: 1rem;
}
.schedule-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  padding: 16px 24px 0 24px;
}
.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
}
.inspector-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
}

.return-card {
  border-radius: 12px !important;
}
.return-header {
  background-color: #fef2f2;
  color: #b91c1c;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 12px 16px !important;
}
.return-header-icon {
  background-color: #fee2e2;
  border-radius: 50%;
  color: #ef4444;
  padding: 4px;
  margin-right: 12px;
  font-size: 1.5rem;
}
.return-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
}
.rejection-checkboxes :deep(.v-label) {
  font-size: 0.9rem;
  color: #374151;
}
</style>
