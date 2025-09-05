<template>
  <div class="page-wrapper">
    <div class="title-card d-flex align-center">
      <v-icon color="#0000cc" size="32" class="me-3">mdi-cog</v-icon>
      <h2 class="title-header-text">Mechanical Certificate</h2>
    </div>

    <div class="stepper-section">
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
              <div class="step-title">Scope of Work</div>
              <div class="step-subtitle">Select the scope</div>
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
              <div class="step-title">Installation and Operation</div>
              <div class="step-subtitle">Select installations</div>
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
              <div class="form-row-full-width mt-5">
                <label class="section-label">SCOPE OF WORK</label>
              </div>

              <div class="form-row native-checkbox-selection align-items-start">
                <div class="checkbox-group">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="newConstruction"
                      v-model="formData.step1.scopeOfWork.newConstruction"
                    />
                    <label for="newConstruction">NEW CONSTRUCTION</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="erection"
                      v-model="formData.step1.scopeOfWork.erection"
                    />
                    <label for="erection">ERECTION</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="addition"
                      v-model="formData.step1.scopeOfWork.addition"
                    />
                    <label for="addition">ADDITION</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="alteration"
                      v-model="formData.step1.scopeOfWork.alteration"
                    />
                    <label for="alteration">ALTERATION</label>
                  </div>
                </div>

                <div class="checkbox-group">
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="renovation"
                      v-model="formData.step1.scopeOfWork.renovation"
                    />
                    <label for="renovation">RENOVATION</label>
                    <input
                      v-if="formData.step1.scopeOfWork.renovation"
                      type="text"
                      v-model="formData.step1.scopeOfWork.renovationText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="conversion"
                      v-model="formData.step1.scopeOfWork.conversion"
                    />
                    <label for="conversion">CONVERSION</label>
                    <input
                      v-if="formData.step1.scopeOfWork.conversion"
                      type="text"
                      v-model="formData.step1.scopeOfWork.conversionText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="repair"
                      v-model="formData.step1.scopeOfWork.repair"
                    />
                    <label for="repair">REPAIR</label>
                    <input
                      v-if="formData.step1.scopeOfWork.repair"
                      type="text"
                      v-model="formData.step1.scopeOfWork.repairText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="moving"
                      v-model="formData.step1.scopeOfWork.moving"
                    />
                    <label for="moving">MOVING</label>
                    <input
                      v-if="formData.step1.scopeOfWork.moving"
                      type="text"
                      v-model="formData.step1.scopeOfWork.movingText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                </div>

                <div class="checkbox-group">
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="raising"
                      v-model="formData.step1.scopeOfWork.raising"
                    />
                    <label for="raising">RAISING</label>
                    <input
                      v-if="formData.step1.scopeOfWork.raising"
                      type="text"
                      v-model="formData.step1.scopeOfWork.raisingText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="demolition"
                      v-model="formData.step1.scopeOfWork.demolition"
                    />
                    <label for="demolition">DEMOLITION</label>
                    <input
                      v-if="formData.step1.scopeOfWork.demolition"
                      type="text"
                      v-model="formData.step1.scopeOfWork.demolitionText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="accessoryBuildingStructure"
                      v-model="formData.step1.scopeOfWork.accessoryBuildingStructure"
                    />
                    <label for="accessoryBuildingStructure"
                      >ACCESSORY BUILDING STRUCTURE</label
                    >
                    <input
                      v-if="formData.step1.scopeOfWork.accessoryBuildingStructure"
                      type="text"
                      v-model="formData.step1.scopeOfWork.accessoryBuildingStructureText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="scopeOthers"
                      v-model="formData.step1.scopeOfWork.others"
                    />
                    <label for="scopeOthers">OTHERS (Specify)</label>
                    <input
                      v-if="formData.step1.scopeOfWork.others"
                      type="text"
                      v-model="formData.step1.scopeOfWork.othersText"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 2" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">INSTALLATION AND OPERATION OF:</label>
              </div>
              <div class="form-row native-checkbox-selection align-items-start">
                <div class="checkbox-group">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="boiler"
                      v-model="formData.step2.installationOperationOf.boiler"
                    />
                    <label for="boiler">BOILER</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="pressureVessel"
                      v-model="formData.step2.installationOperationOf.pressureVessel"
                    />
                    <label for="pressureVessel">PRESSURE VESSEL</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="internalCombustionEngine"
                      v-model="
                        formData.step2.installationOperationOf.internalCombustionEngine
                      "
                    />
                    <label for="internalCombustionEngine"
                      >INTERNAL COMBUSTION ENGINE</label
                    >
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="refrigerationAndIceMaking"
                      v-model="
                        formData.step2.installationOperationOf.refrigerationAndIceMaking
                      "
                    />
                    <label for="refrigerationAndIceMaking"
                      >REFRIGERATION AND ICE MAKING</label
                    >
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="windowTypeAirconditioning"
                      v-model="
                        formData.step2.installationOperationOf.windowTypeAirconditioning
                      "
                    />
                    <label for="windowTypeAirconditioning"
                      >WINDOW TYPE AIRCONDITIONING</label
                    >
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="installationOperationOthers1"
                      v-model="formData.step2.installationOperationOf.others1"
                    />
                    <label for="installationOperationOthers1">OTHERS (Specify)</label>
                    <input
                      v-if="formData.step2.installationOperationOf.others1"
                      type="text"
                      v-model="formData.step2.installationOperationOf.others1Text"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
                </div>

                <div class="checkbox-group">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="centralAirconditioning"
                      v-model="
                        formData.step2.installationOperationOf.centralAirconditioning
                      "
                    />
                    <label for="centralAirconditioning">CENTRAL AIRCONDITIONING</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="mechanicalVentilation"
                      v-model="
                        formData.step2.installationOperationOf.mechanicalVentilation
                      "
                    />
                    <label for="mechanicalVentilation">MECHANICAL VENTILATION</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="escalator"
                      v-model="formData.step2.installationOperationOf.escalator"
                    />
                    <label for="escalator">ESCALATOR</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="freightElevator"
                      v-model="formData.step2.installationOperationOf.freightElevator"
                    />
                    <label for="freightElevator">FREIGHT ELEVATOR</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="passengerElevator"
                      v-model="formData.step2.installationOperationOf.passengerElevator"
                    />
                    <label for="passengerElevator">PASSENGER ELEVATOR</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="cableCar"
                      v-model="formData.step2.installationOperationOf.cableCar"
                    />
                    <label for="cableCar">CABLE CAR</label>
                  </div>
                </div>

                <div class="checkbox-group">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="dumbwaiter"
                      v-model="formData.step2.installationOperationOf.dumbwaiter"
                    />
                    <label for="dumbwaiter">DUMBWAITER</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="pumps"
                      v-model="formData.step2.installationOperationOf.pumps"
                    />
                    <label for="pumps">PUMPS</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="compressedAir"
                      v-model="formData.step2.installationOperationOf.compressedAir"
                    />
                    <label for="compressedAir"
                      >COMPRESSED AIR, VACUUM, INSTITUTIONAL AND/OR INDUSTRIAL GAS</label
                    >
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="pneumaticTubes"
                      v-model="formData.step2.installationOperationOf.pneumaticTubes"
                    />
                    <label for="pneumaticTubes"
                      >PNEUMATIC TUBES, CONVEYORS AND/OR MONORAILS</label
                    >
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="installationOperationOthers2"
                      v-model="formData.step2.installationOperationOf.others2"
                    />
                    <label for="installationOperationOthers2">OTHERS (Specify)</label>
                    <input
                      v-if="formData.step2.installationOperationOf.others2"
                      type="text"
                      v-model="formData.step2.installationOperationOf.others2Text"
                      class="ml-2"
                      style="color: black"
                    />
                  </div>
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
  </div>
</template>

<script>
// Script section remains the same as your provided code
export default {
  name: "CompletionCertificatePage",
  data() {
    return {
      activeStep: 1,
      formData: {
        step1: {
          scopeOfWork: {
            newConstruction: false,
            erection: false,
            addition: false,
            alteration: false,
            renovation: false,
            renovationText: null,
            conversion: false,
            conversionText: null,
            repair: false,
            repairText: null,
            moving: false,
            movingText: null,
            raising: false,
            raisingText: null,
            demolition: false,
            demolitionText: null,
            accessoryBuildingStructure: false,
            accessoryBuildingStructureText: null,
            others: false,
            othersText: null,
          },
        },
        step2: {
          installationOperationOf: {
            boiler: false,
            pressureVessel: false,
            internalCombustionEngine: false,
            refrigerationAndIceMaking: false,
            windowTypeAirconditioning: false,
            others1: false,
            others1Text: null,
            centralAirconditioning: false,
            mechanicalVentilation: false,
            escalator: false,
            freightElevator: false,
            passengerElevator: false,
            cableCar: false,
            dumbwaiter: false,
            pumps: false,
            compressedAir: false,
            pneumaticTubes: false,
            others2: false,
            others2Text: null,
          },
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
    downloadApplication() {
      console.log("Download application clicked");
      alert("Application downloaded!");
    },
  },
};
</script>

<style scoped>
/* --- BASE & LAYOUT STYLES --- */
.page-wrapper {
  background-color: #f4f6f9;
  height: 100vh; /* Set a fixed height */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent scrolling on the wrapper */
}

/* --- TITLE HEADER STYLES --- */
.title-card {
  background-color: #ffffff;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  flex-shrink: 0; /* Prevent the header from shrinking */
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
  flex-grow: 1; /* Allow this section to fill remaining space */
  overflow-y: auto; /* Enable scrolling only on this section */
}
.stepper-container {
  max-width: 1700px;
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
.section-label {
  font-size: 1.1em;
  color: #0000cc;
  margin-bottom: 15px;
  padding-bottom: 8px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #0000cc;
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
.form-row-full-width {
  display: flex;
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 1px solid #f0f0f0;
}
.form-row-full-width:last-child {
  border-bottom: none;
}

/* --- CUSTOM CHECKBOX STYLES --- */
.native-checkbox-selection {
  display: flex;
  width: 100%;
}
.native-checkbox-selection.align-items-start {
  align-items: flex-start;
  gap: 30px;
  justify-content: space-between;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Spacing between checkboxes in a column */
}
.checkbox-option {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.checkbox-option input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #777;
  border-radius: 4px;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Prevents shrinking */
}
.checkbox-option input[type="checkbox"]:checked {
  background-color: #0000cc;
  border-color: #0000cc;
}
.checkbox-option input[type="checkbox"]:checked::after {
  content: "✔";
  font-size: 14px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.checkbox-option label {
  color: black !important;
  font-size: 1em;
  cursor: pointer;
}
.checkbox-option.with-text-input {
  display: flex;
  align-items: center;
}
.checkbox-option.with-text-input input[type="text"] {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 8px;
  width: 150px;
  flex-grow: 0;
  margin-left: 10px;
  color: black !important;
}
.checkbox-option.with-text-input input[type="text"]:focus {
  border-color: #0000cc;
  box-shadow: 0 0 0 1px rgba(0, 0, 204, 0.2);
  outline: none;
}

/* --- RESPONSIVE STYLES --- */
@media (max-width: 960px) {
  .native-checkbox-selection.align-items-start {
    flex-direction: column;
    gap: 15px;
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
}
</style>
