<template>
  <div class="block">
    <el-form-item :label="labels.address" label-width="180px">
      <el-input type="input" :placeholder="labels.address" v-model="address">
      </el-input>
    </el-form-item>
    <el-form-item :label="labels.address1" label-width="180px">
      <el-input type="input" :placeholder="labels.address1" v-model="address1">
      </el-input>
    </el-form-item>
    <el-col :span="8">
      <el-form-item :label="labels.city" label-width="50px">
        <el-input type="input" :placeholder="labels.city" v-model="city">
        </el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item :label="labels.state" label-width="50px">
        <el-select
          v-model="state"
          filterable
          placeholder="Please enter a keyword"
        >
          <el-option
            v-for="item in states"
            :key="item.iso2"
            :label="item.label"
            :value="item.iso2"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item :label="labels.zipcode" label-width="100px">
        <el-input type="input" :placeholder="labels.zipcode" v-model="zipcode">
        </el-input>
      </el-form-item>
    </el-col>
  </div>
</template>

<script>
export default {
  label: "Address",
  props: ["currentField"],
  data() {
    return {
      labels: {
        address: "Street address line 1",
        address1: "Street address line 2",
        city: "City",
        state: "State",
        zipcode: "Zipcode",
      },
      address: "",
      address1: "",
      city: "",
      state: "",
      zipcode: "",
      states: [
        {
          label: "Alabama",
          iso2: "AL",
        },
        {
          label: "Alaska",
          iso2: "AK",
        },
        {
          label: "American Samoa",
          iso2: "AS",
        },
        {
          label: "Arizona",
          iso2: "AZ",
        },
        {
          label: "Arkansas",
          iso2: "AR",
        },
        {
          label: "California",
          iso2: "CA",
        },
        {
          label: "Colorado",
          iso2: "CO",
        },
        {
          label: "Connecticut",
          iso2: "CT",
        },
        {
          label: "Delaware",
          iso2: "DE",
        },
        {
          label: "District Of Columbia",
          iso2: "DC",
        },
        {
          label: "Federated States Of Micronesia",
          iso2: "FM",
        },
        {
          label: "Florida",
          iso2: "FL",
        },
        {
          label: "Georgia",
          iso2: "GA",
        },
        {
          label: "Guam",
          iso2: "GU",
        },
        {
          label: "Hawaii",
          iso2: "HI",
        },
        {
          label: "Idaho",
          iso2: "ID",
        },
        {
          label: "Illinois",
          iso2: "IL",
        },
        {
          label: "Indiana",
          iso2: "IN",
        },
        {
          label: "Iowa",
          iso2: "IA",
        },
        {
          label: "Kansas",
          iso2: "KS",
        },
        {
          label: "Kentucky",
          iso2: "KY",
        },
        {
          label: "Louisiana",
          iso2: "LA",
        },
        {
          label: "Maine",
          iso2: "ME",
        },
        {
          label: "Marshall Islands",
          iso2: "MH",
        },
        {
          label: "Maryland",
          iso2: "MD",
        },
        {
          label: "Massachusetts",
          iso2: "MA",
        },
        {
          label: "Michigan",
          iso2: "MI",
        },
        {
          label: "Minnesota",
          iso2: "MN",
        },
        {
          label: "Mississippi",
          iso2: "MS",
        },
        {
          label: "Missouri",
          iso2: "MO",
        },
        {
          label: "Montana",
          iso2: "MT",
        },
        {
          label: "Nebraska",
          iso2: "NE",
        },
        {
          label: "Nevada",
          iso2: "NV",
        },
        {
          label: "New Hampshire",
          iso2: "NH",
        },
        {
          label: "New Jersey",
          iso2: "NJ",
        },
        {
          label: "New Mexico",
          iso2: "NM",
        },
        {
          label: "New York",
          iso2: "NY",
        },
        {
          label: "North Carolina",
          iso2: "NC",
        },
        {
          label: "North Dakota",
          iso2: "ND",
        },
        {
          label: "Northern Mariana Islands",
          iso2: "MP",
        },
        {
          label: "Ohio",
          iso2: "OH",
        },
        {
          label: "Oklahoma",
          iso2: "OK",
        },
        {
          label: "Oregon",
          iso2: "OR",
        },
        {
          label: "Palau",
          iso2: "PW",
        },
        {
          label: "Pennsylvania",
          iso2: "PA",
        },
        {
          label: "Puerto Rico",
          iso2: "PR",
        },
        {
          label: "Rhode Island",
          iso2: "RI",
        },
        {
          label: "South Carolina",
          iso2: "SC",
        },
        {
          label: "South Dakota",
          iso2: "SD",
        },
        {
          label: "Tennessee",
          iso2: "TN",
        },
        {
          label: "Texas",
          iso2: "TX",
        },
        {
          label: "Utah",
          iso2: "UT",
        },
        {
          label: "Vermont",
          iso2: "VT",
        },
        {
          label: "Virgin Islands",
          iso2: "VI",
        },
        {
          label: "Virginia",
          iso2: "VA",
        },
        {
          label: "Washington",
          iso2: "WA",
        },
        {
          label: "West Virginia",
          iso2: "WV",
        },
        {
          label: "Wisconsin",
          iso2: "WI",
        },
        {
          label: "Wyoming",
          iso2: "WY",
        },
      ],
    };
  },
};
</script>
