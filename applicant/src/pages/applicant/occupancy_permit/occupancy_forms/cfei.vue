<template>
  <div class="page-wrapper">
    <div class="stepper-section">
      <div class="title-card d-flex align-center">
        <v-icon color="#0000cc" size="32" class="me-3">mdi-flash</v-icon>
        <h2 class="title-header-text">CERTIFICATE OF FINAL ELECTRICAL INSPECTION</h2>
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
              <div class="step-title">Electrical Details</div>
              <div class="step-subtitle">Provide electrical details</div>
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
              <div class="step-title">Cost Details</div>
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
              <div class="step-title">Electrical Loads</div>
              <div class="step-subtitle">Provide load details</div>
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
              <div class="step-title">Review Application</div>
              <div class="step-subtitle">Review and submit</div>
            </div>
          </div>
        </v-card>

        <v-card flat class="stepper-content-card">
          <div v-show="activeStep === 1" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">START OF INSTALLATION</label>
              </div>
              <div class="form-row form-row--grid two-columns">
                <div class="input-field">
                  <span>Date of Start</span>
                  <VueDatePicker
                    v-model="formData.step1.installationStart"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </div>
                <div class="input-field">
                  <span>Date of Completion</span>
                  <VueDatePicker
                    v-model="formData.step1.installationCompletion"
                    :enable-time-picker="false"
                  ></VueDatePicker>
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">OUTLETS/DEVICES/EQUIPMENTS</label>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>Light</span>
                  <input type="number" v-model="formData.step1.outlets.lights" />
                </div>
                <div class="input-field">
                  <span>Convenience/Receptacle</span>
                  <input type="number" v-model="formData.step1.outlets.receptacle" />
                </div>
                <div class="input-field">
                  <span>SPO. Aircon</span>
                  <input type="number" v-model="formData.step1.outlets.aircon" />
                </div>
                <div class="input-field">
                  <span>SPO. Cooking Unit</span>
                  <input type="number" v-model="formData.step1.outlets.cookingUnit" />
                </div>
                <div class="input-field">
                  <span>SPO. Water Heater</span>
                  <input type="number" v-model="formData.step1.outlets.waterHeater" />
                </div>
                <div class="input-field">
                  <span>SPO. Water Pump</span>
                  <input type="number" v-model="formData.step1.outlets.waterPump" />
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">NO. OF EQUIPMENT WIRING DEVICES</label>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>Toggle Switch</span>
                  <input
                    type="number"
                    v-model="formData.step1.wiringDevices.toggleSwitch"
                  />
                </div>
                <div class="input-field">
                  <span>Bells/Buzzers</span>
                  <input
                    type="number"
                    v-model="formData.step1.wiringDevices.bellsBuzzers"
                  />
                </div>
                <div class="input-field">
                  <span>Push Buttons</span>
                  <input
                    type="number"
                    v-model="formData.step1.wiringDevices.pushButtons"
                  />
                </div>
                <div class="input-field">
                  <span>FA Detectors</span>
                  <input
                    type="number"
                    v-model="formData.step1.wiringDevices.faDetectors"
                  />
                </div>
                <div class="input-field">
                  <span>Others</span>
                  <input type="number" v-model="formData.step1.wiringDevices.others" />
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">TYPES OF INSTALLATION</label>
              </div>
              <div class="form-row native-checkbox-selection align-items-start">
                <div class="checkbox-group horizontal">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="tempInstallation"
                      v-model="formData.step1.typesOfInstallation.temporary"
                    />
                    <label for="tempInstallation">Temporary</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="newInstallation"
                      v-model="formData.step1.typesOfInstallation.new"
                    />
                    <label for="newInstallation">New</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="remodelAlteration"
                      v-model="formData.step1.typesOfInstallation.remodel"
                    />
                    <label for="remodelAlteration">Remodel</label>
                  </div>
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">TYPES OF WIRING</label>
              </div>
              <div class="form-row native-checkbox-selection align-items-start">
                <div class="checkbox-group horizontal">
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="openWiring"
                      v-model="formData.step1.typesOfWiring.open"
                    />
                    <label for="openWiring">Open Wiring</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="conduits"
                      v-model="formData.step1.typesOfWiring.conduits"
                    />
                    <label for="conduits">Conduits</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="cable"
                      v-model="formData.step1.typesOfWiring.cable"
                    />
                    <label for="cable">Cable</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="armoredCable"
                      v-model="formData.step1.typesOfWiring.armoredCable"
                    />
                    <label for="armoredCable">Armored Cable</label>
                  </div>
                  <div class="checkbox-option">
                    <input
                      type="checkbox"
                      id="raceways"
                      v-model="formData.step1.typesOfWiring.raceways"
                    />
                    <label for="raceways">Raceways</label>
                  </div>
                  <div class="checkbox-option with-text-input">
                    <input
                      type="checkbox"
                      id="othersWiring"
                      v-model="formData.step1.typesOfWiring.others"
                    />
                    <label for="othersWiring">Others (Specify):</label>
                    <input
                      type="text"
                      v-model="formData.step1.typesOfWiring.othersText"
                      :disabled="!formData.step1.typesOfWiring.others"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 2" class="step-content">
            <div class="construction-form">
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>NUMBER OF STORIES</span>
                  <input type="number" v-model="formData.step2.numberOfStories" />
                </div>
                <div class="input-field">
                  <span>ESTIMATED COST</span>
                  <input type="number" v-model="formData.step2.estimatedCost" />
                </div>
                <div class="input-field">
                  <span>ACTUAL COST</span>
                  <input type="number" v-model="formData.step2.actualCost" />
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">ACTUAL COST</label>
              </div>
              <div class="form-row">
                <div class="input-field" style="width: 100%">
                  <span>a.) Materials (Total Cost)</span>
                  <input
                    type="number"
                    v-model="formData.step2.materialsTotalCost"
                    placeholder="Enter total cost"
                  />
                </div>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>1. Electrical wires</span>
                  <input type="text" v-model="formData.step2.electricalWires" />
                </div>
                <div class="input-field">
                  <span>2. Lighting outlets</span>
                  <input type="text" v-model="formData.step2.lightingOutlets" />
                </div>
                <div class="input-field">
                  <span>3. Convenience outlets</span>
                  <input type="text" v-model="formData.step2.convenienceOutlets" />
                </div>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>4. Switches</span>
                  <input type="text" v-model="formData.step2.switches" />
                </div>
                <div class="input-field">
                  <span>Others (specify)</span>
                  <input type="text" v-model="formData.step2.othersSpecify" />
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">OTHER FEES</label>
              </div>
              <div class="form-row">
                <div class="input-field" style="width: 100%">
                  <span
                    >Cost (This includes professional fees, permits and other fees.)</span
                  >
                  <input type="number" v-model="formData.step2.otherFeesCost" />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 3" class="step-content">
            <div class="construction-form">
              <div class="form-row-full-width">
                <label class="section-label">LOADS TO BE CONNECTED</label>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>Light</span>
                  <input type="number" v-model="formData.step3.loads.lights" />
                </div>
                <div class="input-field">
                  <span>Convenience/Receptacle</span>
                  <input type="number" v-model="formData.step3.loads.receptacle" />
                </div>
                <div class="input-field">
                  <span>SPO. Aircon</span>
                  <input type="number" v-model="formData.step3.loads.aircon" />
                </div>
                <div class="input-field">
                  <span>SPO. Cooking Unit</span>
                  <input type="number" v-model="formData.step3.loads.cookingUnit" />
                </div>
                <div class="input-field">
                  <span>SPO. Water Heater</span>
                  <input type="number" v-model="formData.step3.loads.waterHeater" />
                </div>
                <div class="input-field">
                  <span>SPO. Water Pump</span>
                  <input type="number" v-model="formData.step3.loads.waterPump" />
                </div>
                <div class="input-field">
                  <span>Toggle Switch</span>
                  <input type="number" v-model="formData.step3.loads.toggleSwitch" />
                </div>
                <div class="input-field">
                  <span>Bells/Buzzers</span>
                  <input type="number" v-model="formData.step3.loads.bellsBuzzers" />
                </div>
                <div class="input-field">
                  <span>Push Buttons</span>
                  <input type="number" v-model="formData.step3.loads.pushButtons" />
                </div>
                <div class="input-field">
                  <span>FA Detectors</span>
                  <input type="number" v-model="formData.step3.loads.faDetectors" />
                </div>
                <div class="input-field">
                  <span>Others</span>
                  <input type="number" v-model="formData.step3.loads.others" />
                </div>
              </div>

              <div class="form-row-full-width mt-5">
                <label class="section-label">NATURE OF WORKS</label>
              </div>
              <div class="form-row">
                <div class="input-field" style="width: 100%">
                  <span>Type of Service:</span>
                </div>
              </div>
              <div class="form-row form-row--grid three-columns">
                <div class="input-field">
                  <span>Voltage</span>
                  <input type="text" v-model="formData.step3.natureOfWorks.voltage" />
                </div>
                <div class="input-field">
                  <span>Size of Wires</span>
                  <input type="text" v-model="formData.step3.natureOfWorks.sizeOfWires" />
                </div>
                <div class="input-field">
                  <span>Phase</span>
                  <input type="text" v-model="formData.step3.natureOfWorks.phase" />
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeStep === 4" class="step-content">
            <h2 class="placeholder-text">Step 4: Review Application</h2>
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
                v-if="activeStep < 4"
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
      formData: {
        step1: {
          installationStart: null,
          installationCompletion: null,
          outlets: {
            lights: null,
            receptacle: null,
            aircon: null,
            cookingUnit: null,
            waterHeater: null,
            waterPump: null,
          },
          wiringDevices: {
            toggleSwitch: null,
            bellsBuzzers: null,
            pushButtons: null,
            faDetectors: null,
            others: null,
          },
          typesOfInstallation: {
            temporary: false,
            new: false,
            remodel: false,
          },
          typesOfWiring: {
            open: false,
            conduits: false,
            cable: false,
            armoredCable: false,
            raceways: false,
            others: false,
            othersText: "",
          },
        },
        step2: {
          numberOfStories: null,
          estimatedCost: null,
          actualCost: null,
          materialsTotalCost: null,
          electricalWires: null,
          lightingOutlets: null,
          convenienceOutlets: null,
          switches: null,
          othersSpecify: null,
          otherFeesCost: null,
        },
        step3: {
          loads: {
            lights: null,
            receptacle: null,
            aircon: null,
            cookingUnit: null,
            waterHeater: null,
            waterPump: null,
            toggleSwitch: null,
            bellsBuzzers: null,
            pushButtons: null,
            faDetectors: null,
            others: null,
          },
          natureOfWorks: {
            voltage: null,
            sizeOfWires: null,
            phase: null,
          },
        },
        step4: {},
      },
    };
  },
  methods: {
    handleNextButtonClick() {
      if (this.activeStep < 4) {
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
    // NEW METHOD
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
/* Style for vue-datepicker */
:deep(.dp__input) {
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  border: none;
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
  border-color: #747474;
  box-shadow: 0 0 0 1px rgba(0, 0, 204, 0.2);
  outline: none;
}

.static-field {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px 10px;
  background-color: #f5f5f5;
  color: #000000;
  width: 100%;
  box-sizing: border-box;
  min-height: 38.5px; /* Match input height */
  display: flex;
  align-items: center;
}

.section-label {
  font-size: 1em;
  color: #000000;
  margin-bottom: 10px;
  padding-bottom: 8px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #bababa;
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
  gap: 20px;
}
.form-row--grid.three-columns {
  grid-template-columns: repeat(3, 1fr);
}
.form-row--grid.two-columns {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.form-row-full-width {
  display: flex;
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Checkbox Styles */
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.checkbox-group.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
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
  margin-right: 8px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; /* Light mode background */
}

.checkbox-option input[type="checkbox"]:checked {
  background-color: #0000cc;
  border-color: #0000cc;
}

.checkbox-option input[type="checkbox"]:checked::after {
  content: "\2713";
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

/* Specific text input for 'others' checkbox */
.checkbox-option.with-text-input {
  display: flex;
  align-items: center;
}

.checkbox-option.with-text-input input[type="text"] {
  width: 150px;
  flex-grow: 0;
  margin-left: 10px;
  padding: 4px 8px; /* Adjusted padding for better fit */
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-field.with-currency {
  position: relative;
  padding-left: 20px; /* Space for the currency label */
}
.input-field.with-currency .currency-label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1em;
  color: black;
  font-weight: 500;
}
.input-field.with-currency input {
  padding-left: 15px; /* Adjust input padding to not overlap with currency label */
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
  margin: 0 auto;
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
  width: 160px; /* Give items a fixed width */
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
  .form-row--grid.three-columns {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  .form-row--grid.three-columns {
    grid-template-columns: 1fr;
  }
  .form-row--grid.two-columns {
    grid-template-columns: 1fr;
  }
  .input-field.with-currency {
    padding-left: 0;
  }
  .input-field.with-currency .currency-label {
    position: static;
    transform: none;
    margin-right: 5px;
    display: inline-block;
  }
  .input-field.with-currency input {
    padding-left: 10px;
  }
}
</style>
