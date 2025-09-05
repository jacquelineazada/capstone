<template>
  <v-main>
    <v-container class="main-content">
      <div class="header-section">
        <h1>ONE-STOP SHOP SERVICES</h1>
        <p>
          Streamlined government services designed to make your transactions faster,
          easier, and more convenient. Access multiple permits and clearances in one
          location.
        </p>
      </div>

      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card class="service-card">
            <v-card-text>
              <div class="icon-container">
                <v-icon size="32" color="#2962FF">mdi-map-marker</v-icon>
              </div>
              <h3 class="card-title">Locational Clearance</h3>
              <p class="card-description">
                Obtain official clearance for your business location. Required for
                establishing commercial operations and ensuring compliance with zoning
                regulations.
              </p>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn block color="#2962FF" dark large to="/locational-clearance"
                >Apply now</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="service-card">
            <v-card-text>
              <div class="icon-container">
                <v-icon size="32" color="#2962FF">mdi-home-city</v-icon>
              </div>
              <h3 class="card-title">Building Permit</h3>
              <p class="card-description">
                Secure your construction permit for new buildings, renovations, or
                structural modifications. Ensures safety compliance and legal construction
                standards.
              </p>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn block color="#2962FF" dark large to="/building-permit"
                >Apply now</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="service-card">
            <v-card-text>
              <div class="icon-container">
                <v-icon size="32" color="#2962FF">mdi-key-variant</v-icon>
              </div>
              <h3 class="card-title">Occupancy Permit</h3>
              <p class="card-description">
                Get authorization to occupy your completed building. Certifies that your
                structure meets all safety requirements and building codes for occupancy.
              </p>
            </v-card-text>
            <v-card-actions class="pa-4">
              <v-btn block color="#2962FF" dark large to="/applicant-portal"
                >Apply now</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import "./styles/services.css";
</script>
