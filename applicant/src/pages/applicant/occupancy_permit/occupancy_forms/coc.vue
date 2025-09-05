<template>
  <div class="page-wrapper">
    <div class="stepper-section">
      <div class="title-card d-flex align-center">
        <v-icon color="#0000cc" size="32" class="me-3">mdi-domain</v-icon>
        <h2 class="title-header-text">Certificate of Completion</h2>
      </div>
      <v-container fluid class="stepper-container">
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
              <div class="step-title">Application Information</div>
              <div class="step-subtitle">Provide project details</div>
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
              <div class="step-title">Summary of Actual Costs</div>
              <div class="step-subtitle">Provide cost details</div>
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
              <div class="step-title">Review Application</div>
              <div class="step-subtitle">Review and submit</div>
            </div>
          </div>
        </v-card>

        <v-card flat class="stepper-content-card">
          <div v-show="activeStep === 1" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">PROJECT INFORMATION</label>
              </div>
              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>DATE OF START OF CONSTRUCTION: PLANNED</span>
                  <VueDatePicker
                    v-model="formData.step1.startDate.planned"
                    :enable-time-picker="false"
                    :dark="false"
                    calendar-icon-color="black"
                    input-text-color="black"
                  ></VueDatePicker>
                </div>
                <div class="input-field">
                  <span>DATE OF START OF CONSTRUCTION: ACTUAL</span>
                  <VueDatePicker
                    v-model="formData.step1.startDate.actual"
                    :enable-time-picker="false"
                    :dark="false"
                    calendar-icon-color="black"
                    input-text-color="black"
                  ></VueDatePicker>
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>DATE OF COMPLETION: PLANNED</span>
                  <VueDatePicker
                    v-model="formData.step1.completionDate.planned"
                    :enable-time-picker="false"
                    :dark="false"
                    calendar-icon-color="black"
                    input-text-color="black"
                  ></VueDatePicker>
                </div>
                <div class="input-field">
                  <span>DATE OF COMPLETION: ACTUAL</span>
                  <VueDatePicker
                    v-model="formData.step1.completionDate.actual"
                    :enable-time-picker="false"
                    :dark="false"
                    calendar-icon-color="black"
                    input-text-color="black"
                  ></VueDatePicker>
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>TOTAL FLOOR AREA (Square Meters): PLANNED</span>
                  <input
                    type="number"
                    id="totalFloorAreaPlanned"
                    v-model="formData.step1.totalFloorArea.planned"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>TOTAL FLOOR AREA (Square Meters): ACTUAL</span>
                  <input
                    type="number"
                    id="totalFloorAreaActual"
                    v-model="formData.step1.totalFloorArea.actual"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>NO. OF STOREY(S): PLANNED</span>
                  <input
                    type="number"
                    id="numStoreysPlanned"
                    v-model="formData.step1.numStoreys.planned"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>NO. OF STOREY(S): ACTUAL</span>
                  <input
                    type="number"
                    id="numStoreysActual"
                    v-model="formData.step1.numStoreys.actual"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>NO. OF UNITS: PLANNED</span>
                  <input
                    type="number"
                    id="numUnitsPlanned"
                    v-model="formData.step1.numUnits.planned"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>NO. OF UNITS: ACTUAL</span>
                  <input
                    type="number"
                    id="numUnitsActual"
                    v-model="formData.step1.numUnits.actual"
                    style="color: black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 2" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width mt-5">
                <label class="section-label"> SUMMARY OF ACTUAL COSTS </label>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: CEMENT (bags)</span>
                  <input
                    type="number"
                    id="cementBags"
                    v-model="formData.step2.totalCostOfMaterials.cement"
                    placeholder="Enter quantity"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: LUMBER (bd. ft.)</span>
                  <input
                    type="number"
                    id="lumberBoardFeet"
                    v-model="formData.step2.totalCostOfMaterials.lumber"
                    placeholder="Enter quantity"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: REINFORCING BARS (kg.)</span>
                  <input
                    type="number"
                    id="reinforcingBarsKg"
                    v-model="formData.step2.totalCostOfMaterials.reinforcingBars"
                    placeholder="Enter quantity"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: G.I. SHEETS (sheets)</span>
                  <input
                    type="number"
                    id="giSheets"
                    v-model="formData.step2.totalCostOfMaterials.giSheets"
                    placeholder="Enter quantity"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row form-row--grid">
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: PREFAB STRUCTURAL STEEL (kg.)</span>
                  <input
                    type="number"
                    id="prefabStructuralSteelKg"
                    v-model="formData.step2.totalCostOfMaterials.prefabStructuralSteel"
                    placeholder="Enter quantity"
                    style="color: black"
                  />
                </div>
                <div class="input-field">
                  <span>TOTAL COST OF MATERIALS: Other materials</span>
                  <input
                    type="number"
                    id="otherMaterials"
                    v-model="formData.step2.totalCostOfMaterials.otherMaterials"
                    placeholder="Enter amount"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="input-field input-full-width-wrapper-corrected">
                  <span>TOTAL COST OF DIRECT LABOR:</span>
                  <p
                    class="direct-labor-description"
                    style="font-weight: normal; margin-top: 5px"
                  >
                    This includes compensation whether by salary or contract for project
                    architect/engineer down to laborers.
                  </p>
                  <input
                    type="number"
                    id="directLaborCost"
                    v-model="formData.step2.directLaborCost"
                    placeholder="Enter amount"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="input-field input-full-width-wrapper-corrected">
                  <span>TOTAL COST OF EQUIPMENT UTILIZATION</span>
                  <input
                    type="number"
                    id="equipmentCost"
                    v-model="formData.step2.equipmentCost"
                    placeholder="Enter amount"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="input-field input-full-width-wrapper-corrected">
                  <span
                    >OTHER COSTS: Includes professional services fees, permits, and other
                    fees</span
                  >
                  <input
                    type="number"
                    id="otherCosts"
                    v-model="formData.step2.otherCosts"
                    placeholder="Enter amount"
                    style="color: black"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="input-field input-full-width-wrapper-corrected">
                  <span>TOTAL COST OF BUILDING/STRUCTURE</span>
                  <input
                    type="number"
                    id="buildingCost"
                    v-model="formData.step2.buildingCost"
                    placeholder="Enter amount"
                    style="color: black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 3" class="step-content">
            <h2 class="placeholder-text">Step 3: Review Application</h2>
            <p class="placeholder-text">
              This is where the user will review their application before final
              submission.
            </p>
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
                v-if="activeStep < 3"
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
  name: "CompletionCertificatePage",
  components: {
    VueDatePicker,
  },
  data() {
    return {
      activeStep: 1,
      formData: {
        step1: {
          startDate: {
            planned: null,
            actual: null,
          },
          completionDate: {
            planned: null,
            actual: null,
          },
          totalFloorArea: {
            planned: null,
            actual: null,
          },
          numStoreys: {
            planned: null,
            actual: null,
          },
          numUnits: {
            planned: null,
            actual: null,
          },
        },
        step2: {
          totalCostOfMaterials: {
            cement: null,
            lumber: null,
            reinforcingBars: null,
            giSheets: null,
            prefabStructuralSteel: null,
            otherMaterials: null,
          },
          directLaborCost: null,
          equipmentCost: null,
          otherCosts: null,
          buildingCost: null,
        },
        step3: {},
      },
    };
  },
  methods: {
    handleNextButtonClick() {
      if (this.activeStep < 3) {
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
    // NEW METHOD for the download button
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
/* --- BASE & LAYOUT STYLES --- */
.page-wrapper {
  background-color: #f4f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --- FORM STYLES --- */
.construction-form {
  font-family: "Roboto", sans-serif;
  color: black;
}
.placeholder-text {
  color: #9e9e9e;
  text-align: center;
  margin-top: 50px;
}
.input-field input,
.input-field .dp__input_wrap {
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;
  width: 100%;
  box-sizing: border-box;
  color: black !important;
}
.input-field input {
  padding: 8px 10px;
  height: 38.5px;
}
.input-field span {
  display: block;
  margin-bottom: 5px;
  font-size: 0.85em;
  color: #555;
  font-weight: 500;
  text-transform: uppercase;
}
.input-field input:focus {
  border-color: #000000;
  box-shadow: 0 0 0 1px rgba(0, 0, 204, 0.2);
  outline: none;
}
.section-label {
  font-size: 1em;
  color: #000000;
  margin-bottom: 15px;
  padding-bottom: 8px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #949494;
}
.form-row {
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 20px;
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
.input-full-width-wrapper-corrected {
  flex: 1 1 100%;
}

/* --- TITLE HEADER STYLES --- */
.title-card {
  background-color: #ffffff;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  flex-shrink: 0;
}
.title-header-text {
  font-size: 22px;
  font-weight: 700;
  color: #333;
}

/* --- STEPPER STYLES --- */
.stepper-section {
  background-color: #f4f6f9;
  padding-bottom: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.stepper-container {
  max-width: 1600px;
  width: 100%;
}
.stepper-card {
  background-color: transparent;
  padding: 24px 12px;
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
  width: 200px;
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
  background-color: #1976d2;
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
  top: 15px;
}
.stepper-line.active {
  background-color: #1976d2;
}
.stepper-content-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.step-content {
  flex-grow: 1;
}
.stepper-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
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
