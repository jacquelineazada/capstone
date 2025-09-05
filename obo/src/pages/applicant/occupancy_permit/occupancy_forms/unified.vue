<template>
  <div class="page-wrapper">
    <div class="stepper-section">
      <div class="title-card d-flex align-center">
        <v-icon color="#0000cc" size="32" class="me-3">mdi-domain</v-icon>
        <h2 class="title-header-text">Occupancy Unified Application Form</h2>
      </div>

      <v-container fluid class="stepper-container">
        <div class="header-sticky-wrapper">
          <v-card flat class="stepper-card">
            <div
              :class="['stepper-item', { active: activeStep >= 1 }]"
              @click="setActiveStep(1)"
            >
              <div
                :class="['icon-container', { 'icon-container-active': activeStep >= 1 }]"
              >
                <span>1</span>
              </div>
              <div class="step-text-wrapper">
                <div class="step-title">Application</div>
                <div class="step-subtitle">Complete application</div>
              </div>
            </div>
            <div :class="['stepper-line', { active: activeStep >= 2 }]"></div>
            <div
              :class="['stepper-item', { active: activeStep >= 2 }]"
              @click="setActiveStep(2)"
            >
              <div
                :class="['icon-container', { 'icon-container-active': activeStep >= 2 }]"
              >
                <span>2</span>
              </div>
              <div class="step-text-wrapper">
                <div class="step-title">Owner/Applicant</div>
                <div class="step-subtitle">Applicant info</div>
              </div>
            </div>
            <div :class="['stepper-line', { active: activeStep >= 3 }]"></div>
            <div
              :class="['stepper-item', { active: activeStep >= 3 }]"
              @click="setActiveStep(3)"
            >
              <div
                :class="['icon-container', { 'icon-container-active': activeStep >= 3 }]"
              >
                <span>3</span>
              </div>
              <div class="step-text-wrapper">
                <div class="step-title">Project Details</div>
                <div class="step-subtitle">Project Details</div>
              </div>
            </div>
            <div :class="['stepper-line', { active: activeStep >= 4 }]"></div>
            <div
              :class="['stepper-item', { active: activeStep >= 4 }]"
              @click="setActiveStep(4)"
            >
              <div
                :class="['icon-container', { 'icon-container-active': activeStep >= 4 }]"
              >
                <span>4</span>
              </div>
              <div class="step-text-wrapper">
                <div class="step-title">Use or Character of Occupancy</div>
                <div class="step-subtitle">Building Usage</div>
              </div>
            </div>
            <div :class="['stepper-line', { active: activeStep >= 5 }]"></div>
            <div
              :class="['stepper-item', { active: activeStep >= 5 }]"
              @click="setActiveStep(5)"
            >
              <div
                :class="['icon-container', { 'icon-container-active': activeStep >= 5 }]"
              >
                <span>5</span>
              </div>
              <div class="step-text-wrapper">
                <div class="step-title">Review Application</div>
                <div class="step-subtitle">Review and download application</div>
              </div>
            </div>
          </v-card>
        </div>
        <v-card flat class="stepper-content-card">
          <div v-show="activeStep === 1" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">Applicant information</label>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>Application number</span>
                  <input
                    type="text"
                    id="applicationNumber"
                    v-model="formData.applicationNumber"
                  />
                </div>
                <div class="input-field">
                  <span>Area Number:</span>
                  <input type="text" id="areaNumber" v-model="formData.areaNumber" />
                </div>
              </div>
              <div class="form-row-full-width mt-4">
                <label class="section-label">TYPE OF APPLICATION</label>
              </div>
              <div class="form-row">
                <div style="width: 100%; max-width: 850px">
                  <label class="application-complexity-label"
                    >Application Complexity</label
                  >
                  <v-row class="mt-1">
                    <v-col cols="12" md="6">
                      <div
                        :class="[
                          'selectable-card',
                          { selected: formData.applicationComplexity === 'complete' },
                        ]"
                        @click="formData.applicationComplexity = 'complete'"
                      >
                        <v-icon
                          size="24"
                          :color="
                            formData.applicationComplexity === 'complete'
                              ? 'primary'
                              : 'grey-darken-1'
                          "
                          class="me-3"
                        >
                          {{
                            formData.applicationComplexity === "complete"
                              ? "mdi-radiobox-marked"
                              : "mdi-radiobox-blank"
                          }}
                        </v-icon>
                        <div class="card-content">
                          <div class="card-title">Complete</div>
                          <div class="card-description">Complete application process</div>
                        </div>
                        <v-icon
                          :color="
                            formData.applicationComplexity === 'complete'
                              ? 'primary'
                              : 'grey-darken-1'
                          "
                        >
                          mdi-home
                        </v-icon>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div
                        :class="[
                          'selectable-card',
                          { selected: formData.applicationComplexity === 'partial' },
                        ]"
                        @click="formData.applicationComplexity = 'partial'"
                      >
                        <v-icon
                          size="24"
                          :color="
                            formData.applicationComplexity === 'partial'
                              ? 'primary'
                              : 'grey-darken-1'
                          "
                          class="me-3"
                        >
                          {{
                            formData.applicationComplexity === "partial"
                              ? "mdi-radiobox-marked"
                              : "mdi-radiobox-blank"
                          }}
                        </v-icon>
                        <div class="card-content">
                          <div class="card-title">Partial</div>
                          <div class="card-description">Specific Sections Only</div>
                        </div>
                        <v-icon
                          :color="
                            formData.applicationComplexity === 'partial'
                              ? 'primary'
                              : 'grey-darken-1'
                          "
                        >
                          mdi-bus
                        </v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 2" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">Name of Applicant/Owner</label>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>Last Name *</span>
                  <input
                    type="text"
                    v-model="formData.lastName"
                    placeholder="Enter last name"
                  />
                </div>
                <div class="input-field">
                  <span>First Name *</span>
                  <input
                    type="text"
                    v-model="formData.firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div class="input-field">
                  <span>M.I.</span>
                  <input
                    type="text"
                    v-model="formData.middleInitial"
                    placeholder="Enter middle initial"
                  />
                </div>
              </div>
              <div class="form-row-full-width mt-4">
                <label class="section-label">Address of Applicant/Owner</label>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>Lot No. *</span>
                  <input
                    type="text"
                    v-model="formData.lotNumber"
                    placeholder="Enter lot number"
                  />
                </div>
                <div class="input-field">
                  <span>Barangay *</span>
                  <select v-model="formData.barangay">
                    <option disabled value="">Please select one</option>
                    <option v-for="brgy in barangays" :key="brgy" :value="brgy">
                      {{ brgy }}
                    </option>
                  </select>
                </div>
                <div class="input-field">
                  <span>Street *</span>
                  <select
                    v-model="formData.street"
                    :disabled="!formData.barangay || availableStreets.length === 0"
                  >
                    <option disabled value="">
                      {{
                        formData.barangay
                          ? "Please select a street"
                          : "Select a barangay first"
                      }}
                    </option>
                    <option
                      v-for="street in availableStreets"
                      :key="street"
                      :value="street"
                    >
                      {{ street }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>City/Municipal *</span>
                  <div class="static-field">{{ formData.city }}</div>
                </div>
                <div class="input-field">
                  <span>Zip code</span>
                  <div class="static-field">{{ formData.zipCode }}</div>
                </div>
                <div class="input-field">
                  <span>Contact number</span>
                  <input
                    type="text"
                    v-model="formData.contactNumber"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 3" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">Project Details</label>
              </div>
              <div class="form-row">
                <div class="input-field" style="width: 100%">
                  <span>Project Name *</span>
                  <input
                    type="text"
                    v-model="formData.step3.projectName"
                    placeholder="Enter project name"
                  />
                </div>
              </div>
              <div class="form-row-full-width mt-4">
                <label class="section-label">Location of Project</label>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>Lot No. *</span>
                  <input
                    type="text"
                    v-model="formData.step3.lotNo"
                    placeholder="Enter lot number"
                  />
                </div>
                <div class="input-field">
                  <span>Block No. *</span>
                  <input
                    type="text"
                    v-model="formData.step3.blockNo"
                    placeholder="Enter block number"
                  />
                </div>
                <div class="input-field">
                  <span>Barangay *</span>
                  <select v-model="formData.step3.barangay">
                    <option disabled value="">Please select one</option>
                    <option v-for="brgy in barangays" :key="brgy" :value="brgy">
                      {{ brgy }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>Street *</span>
                  <select
                    v-model="formData.step3.street"
                    :disabled="
                      !formData.step3.barangay || availableStreetsStep3.length === 0
                    "
                  >
                    <option disabled value="">
                      {{
                        formData.step3.barangay
                          ? "Please select a street"
                          : "Select a barangay first"
                      }}
                    </option>
                    <option
                      v-for="street in availableStreetsStep3"
                      :key="street"
                      :value="street"
                    >
                      {{ street }}
                    </option>
                  </select>
                </div>
                <div class="input-field">
                  <span>City/Municipal *</span>
                  <div class="static-field">{{ formData.city }}</div>
                </div>
                <div class="input-field">
                  <span>TCT No. *</span>
                  <input
                    type="text"
                    v-model="formData.step3.tctNo"
                    placeholder="Enter TCT number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 4" class="step-content">
            <div class="construction-form">
              <div class="occupancy-grid">
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP A: RESIDENTIAL (DWELLINGS)</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupA.single"
                      id="gA_single"
                    /><label for="gA_single">SINGLE</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupA.duplex"
                      id="gA_duplex"
                    /><label for="gA_duplex">DUPLEX</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupA.res_r1_r2"
                      id="gA_res"
                    /><label for="gA_res">RESIDENTIAL R-1, R-2</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupA.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP B: RESIDENTIAL</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupB.hotel"
                      id="gB_hotel"
                    /><label for="gB_hotel">HOTEL</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupB.motel"
                      id="gB_motel"
                    /><label for="gB_motel">MOTEL</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupB.townhouse"
                      id="gB_townhouse"
                    /><label for="gB_townhouse">TOWNHOUSE</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupB.dormitory"
                      id="gB_dorm"
                    /><label for="gB_dorm">DORMITORY</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupB.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP C: EDUCATIONAL & RECREATIONAL</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupC.school"
                      id="gC_school"
                    /><label for="gC_school">SCHOOL BUILDING</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupC.gymnasium"
                      id="gC_gym"
                    /><label for="gC_gym">SCHOOL AUDITORIUM, GYMNASIUM</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupC.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP E: COMMERCIAL</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupE.bank"
                      id="gE_bank"
                    /><label for="gE_bank">BANK</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupE.store"
                      id="gE_store"
                    /><label for="gE_store">STORE</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupE.mall"
                      id="gE_mall"
                    /><label for="gE_mall">SHOPPING CENTER/MALL</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupE.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP F: LIGHT INDUSTRIAL</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupF.factory"
                      id="gF_factory"
                    /><label for="gF_factory">FACTORY/PLANT</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupF.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP G: MEDIUM INDUSTRIAL</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupG.storage"
                      id="gG_storage"
                    /><label for="gG_storage">STORAGE/WAREHOUSE</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupG.factory"
                      id="gG_factory"
                    /><label for="gG_factory">FACTORY</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupG.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP H: ASSEMBLY</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupH.theater"
                      id="gH_theater"
                    /><label for="gH_theater">THEATER, AUDITORIUM</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupH.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP I: ASSEMBLY</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupI.coliseum"
                      id="gI_coliseum"
                    /><label for="gI_coliseum">COLISEUM, SPORTS COMPLEX</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupI.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
                <div class="occupancy-group-card">
                  <div class="group-title">GROUP J: AGRICULTURAL & ACCESSORIES</div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupJ.agricultural"
                      id="gJ_agri"
                    /><label for="gJ_agri">AGRICULTURAL STRUCTURES</label>
                  </div>
                  <div class="checkbox-item">
                    <input
                      type="checkbox"
                      v-model="formData.step4.groupJ.accessories"
                      id="gJ_acc"
                    /><label for="gJ_acc">ACCESSORIES</label>
                  </div>
                  <div class="input-field mt-2">
                    <input
                      type="text"
                      v-model="formData.step4.groupJ.others"
                      placeholder="OTHERS"
                    />
                  </div>
                </div>
              </div>
              <div class="form-row form-row--grid mt-4">
                <div class="input-field">
                  <span>Total Area (sq.m) *</span>
                  <input
                    type="number"
                    v-model="formData.step4.totalArea"
                    placeholder="Enter total area"
                  />
                </div>
                <div class="input-field">
                  <span>Number of Storey *</span>
                  <input
                    type="number"
                    v-model="formData.step4.numberOfStoreys"
                    placeholder="Enter number of storeys"
                  />
                </div>
                <div class="input-field">
                  <span>Expected Date of Completion *</span>
                  <VueDatePicker
                    v-model="formData.step4.expectedDate"
                    placeholder="Select a date"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 5" class="step-content">
            <h2 class="placeholder-text">Step 5: Review Application</h2>
          </div>
          <div class="stepper-buttons">
            <v-btn text @click="saveDraft">Save draft</v-btn>
            <div>
              <v-btn
                text
                class="mr-2"
                @click="handleBackButtonClick"
                :disabled="activeStep === 1"
                >Back</v-btn
              >
              <v-btn
                v-if="activeStep < 5"
                color="blue"
                dark
                @click="handleNextButtonClick"
                >Next</v-btn
              >
              <v-btn v-else color="blue" dark @click="downloadApplication">
                <v-icon left>mdi-download</v-icon>
                Download
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-container>
    </div>
    <br />
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "ServicesPage",
  components: {
    VueDatePicker,
  },
  data() {
    return {
      activeStep: 1,
      barangays: [
        "Abella",
        "Bagumbayan Norte",
        "Bagumbayan Sur",
        "Balatas",
        "Calauag",
        "Cararayan",
        "Carolina",
        "Concepcion Grande",
        "Concepcion Pequeña",
        "Dayangdang",
        "Del Rosario",
        "Dinaga",
        "Igualdad Interior",
        "Lerma",
        "Liboton",
        "Mabolo",
        "Pacol",
        "Panicuason",
        "Peñafrancia",
        "Sabang",
        "San Felipe",
        "San Francisco",
        "San Isidro",
        "Santa Cruz",
        "Tabuco",
        "Tinago",
        "Triangulo",
      ],
      // This object holds street data for each barangay
      streetsByBarangay: {
        Calauag: ["Magsaysay Avenue", "Queborac Drive", "Basilica Road"],
        Abella: ["Abella Street", "Almeda Highway", "CBD I"],
        "Bagumbayan Sur": [
          "Barlin Street",
          "Blumentritt Street",
          "M.T. Villanueva Avenue",
        ],
        Cararayan: ["Del Carmen Street", "San Isidro Road", "St. James Street"],
        "San Felipe": ["Naga-San Felipe Road", "Peninsula Street", "Grandview Avenue"],
      },
      formData: {
        // Step 1
        applicationNumber: null,
        areaNumber: null,
        applicationComplexity: "complete",
        // Step 2
        lastName: "",
        firstName: "",
        middleInitial: "",
        lotNumber: "",
        street: "",
        barangay: "",
        zipCode: "4400",
        contactNumber: "",
        city: "NAGA CITY",
        // Step 3
        step3: {
          projectName: "",
          lotNo: "",
          blockNo: "",
          tctNo: "",
          street: "",
          barangay: "",
        },
        // Step 4
        step4: {
          groupA: { single: false, duplex: false, res_r1_r2: false, others: "" },
          groupB: {
            hotel: false,
            motel: false,
            townhouse: false,
            dormitory: false,
            others: "",
          },
          groupC: { school: false, gymnasium: false, others: "" },
          groupE: { bank: false, store: false, mall: false, others: "" },
          groupF: { factory: false, others: "" },
          groupG: { storage: false, factory: false, others: "" },
          groupH: { theater: false, others: "" },
          groupI: { coliseum: false, others: "" },
          groupJ: { agricultural: false, accessories: false, others: "" },
          totalArea: null,
          expectedDate: null,
          numberOfStoreys: null,
        },
        // Step 5
        step5: {},
      },
    };
  },
  computed: {
    // Computed property for Step 2 streets
    availableStreets() {
      return this.streetsByBarangay[this.formData.barangay] || [];
    },
    // New computed property for Step 3 streets
    availableStreetsStep3() {
      return this.streetsByBarangay[this.formData.step3.barangay] || [];
    },
  },
  watch: {
    // Watcher for Step 2 barangay
    "formData.barangay"(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.formData.street = ""; // Reset street selection
      }
    },
    // New watcher for Step 3 barangay
    "formData.step3.barangay"(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.formData.step3.street = ""; // Reset street selection for Step 3
      }
    },
  },
  methods: {
    handleNextButtonClick() {
      if (this.activeStep < 5) {
        this.activeStep++;
      }
    },
    handleBackButtonClick() {
      if (this.activeStep > 1) {
        this.activeStep--;
      }
    },
    setActiveStep(stepNumber) {
      this.activeStep = stepNumber;
    },
    saveDraft() {
      console.log("Save draft clicked");
      alert("Draft saved!");
    },
    downloadApplication() {
      console.log("Download application clicked");
      alert("Application downloaded!");
    },
    formatDate(date) {
      if (!date) return "N/A";
      const d = date instanceof Date ? date : new Date(date);
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    formatCurrency(amount) {
      if (amount === null || amount === undefined || isNaN(amount)) return "N/A";
      return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(amount);
    },
  },
};
</script>

<style scoped>
/* --- STICKY HEADER WRAPPER --- */
.header-sticky-wrapper {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 10px;
  background-color: #f4f6f9;
  z-index: 10;
}
/* --- BASE & LAYOUT STYLES --- */
.page-wrapper {
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.input-field input,
.input-field select,
.input-field .dp__input_wrap {
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  color: black !important;
}
.input-field input,
.input-field select {
  padding: 10px;
  height: 40.5px;
}
.input-field select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
/* Style for vue-datepicker */
:deep(.dp__input) {
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  border: none;
}
.input-field span {
  display: block;
  margin-bottom: 5px;
  font-size: 0.85em;
  color: #000000;
  font-weight: 500;
  text-transform: uppercase;
}
.input-field input:focus,
.input-field select:focus {
  border-color: #bcbcbf;
  box-shadow: 0 0 0 1px rgba(66, 66, 184, 0.2);
  outline: none;
}
.static-field {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #555;
  width: 100%;
  box-sizing: border-box;
  min-height: 40.5px; /* Match input height */
  display: flex;
  align-items: center;
}
.section-label {
  font-size: 1.1em;
  color: #0c0c0c;
  margin-bottom: 10px;
  padding-bottom: 14px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #12128949;
}
.application-complexity-label {
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}
.form-row {
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 25px;
}
.form-row:last-child {
  border-bottom: none;
}
.form-row--grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.form-row-full-width {
  display: flex;
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
}
/* --- OCCUPANCY FORM STYLES --- */
.occupancy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}
.occupancy-group-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
}
.group-title {
  font-weight: bold;
  font-size: 0.9em;
  color: #000000;
  margin-bottom: 12px;
}
.checkbox-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.checkbox-item input[type="checkbox"] {
  margin-right: 10px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  accent-color: white; /* Makes the checkmark white */
  border: 1px solid #ccc;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
}
.checkbox-item input[type="checkbox"]:checked {
  background-color: #1976d2; /* Blue background when checked */
  border-color: #1976d2;
}
.checkbox-item input[type="checkbox"]:checked::before {
  content: "\2714"; /* Checkmark character */
  font-size: 12px;
  color: white;
  position: absolute;
  top: 1px;
  left: 2px;
}
.checkbox-item label {
  font-size: 0.9em;
  color: #333;
}
/* --- TITLE HEADER STYLES --- */
.title-card {
  background-color: #ffffff;
  padding: 16px 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  flex-shrink: 0;
}
.title-header-text {
  font-size: 22px;
  font-weight: 700;
  color: #333;
}
.stepper-section {
  background-color: #f4f6f9;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}
.stepper-content-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  flex-grow: 0; /* Change from 1 to 0 to stop it from growing */
  height: 80vh; /* Set a specific height (e.g., 70% of the viewport height) */
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-height: 0;
}
.stepper-card {
  background-color: transparent;
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
}
.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 150px; /* Give items a fixed width */
}
.icon-container {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 500;
  background-color: #e0e0e0;
  color: #616161;
  border: none;
  transition: background-color 0.3s;
}
.icon-container-active {
  background-color: #1976d2; /* A standard blue color */
  color: white;
}
.step-text-wrapper {
  line-height: 1.4;
}
.step-title {
  font-size: 14px;
  font-weight: 500;
  color: #616161;
}
.step-subtitle {
  font-size: 12px;
  color: #9e9e9e;
}
.stepper-item.active .step-title {
  color: #1976d2;
  font-weight: 700;
}
.stepper-line {
  flex-grow: 1;
  height: 2px;
  background-color: #e0e0e0;
  margin: 0 10px;
  position: relative;
  top: 15px; /* Align with middle of icons */
}
.stepper-line.active {
  background-color: #1976d2;
}
.stepper-content-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-height: 0;
}
.step-content {
  flex-grow: 1;
  overflow-y: hidden;
}
.stepper-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
  flex-shrink: 0;
}

/* --- SELECTABLE CARD STYLES (NEW) --- */
.selectable-card {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
}
.selectable-card:hover {
  border-color: #9ca3af;
}
.selectable-card.selected {
  border-color: #1976d2;
  background-color: #eaf2ff;
}
.card-content {
  flex-grow: 1;
  margin: 0 0.5rem;
}
.card-title {
  font-weight: 700;
  color: #111827;
  font-size: 0.9rem;
  line-height: 1.2;
  text-transform: uppercase;
}
.card-description {
  font-size: 0.85rem;
  color: #6b7280;
}

/* --- RESPONSIVE STYLES --- */
@media (max-width: 960px) {
  .stepper-card {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .stepper-item {
    width: 30%;
    margin-bottom: 20px;
  }
  .stepper-line {
    width: 100%;
    margin: -10px 0 10px 0;
    top: 0;
  }
  .occupancy-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .form-row--grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}
@media (max-width: 600px) {
  .stepper-card {
    flex-direction: column;
    align-items: center;
  }
  .stepper-item {
    width: 100%;
  }
  .stepper-line {
    width: 2px;
    height: 30px;
    margin: 10px 0;
  }
  .form-row--grid {
    grid-template-columns: 1fr;
  }
}
</style>
