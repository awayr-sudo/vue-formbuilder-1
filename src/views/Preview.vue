<template>
  <div class="main__wrapper">
    <el-container>
      <el-main :style="cssProps">
        <el-form>
          <el-row class="heading">
            <el-col
              v-for="(form, index) in headings"
              :key="index"
              :span="form.span"
              v-bind="form"
              class="form__group"
            >
              <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->
              <component
                :is="form.fieldType"
                :currentField="form"
                class="form__field"
              >
              </component>
              <small class="form__helpblock" v-show="form.isHelpBlockVisible">
                {{ form.helpBlockText }}
              </small>
            </el-col>
          </el-row>
          <el-row class="main-area">
            <div class="wrapper--forms">
              <el-col
                v-for="(form, index) in elements"
                :key="index"
                :span="form.span"
                v-bind="form"
                class="form__group"
              >
                <!-- <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label> -->
                <component
                  :is="form.fieldType"
                  :currentField="form"
                  class="form__field"
                >
                </component>
                <small class="form__helpblock" v-show="form.isHelpBlockVisible">
                  {{ form.helpBlockText }}
                </small>
              </el-col>
              <el-col :span="24">
                <div class="grid-content btn-submit" justify="center">
                  <el-button type="primary" round>Submit</el-button>
                </div>
              </el-col>
            </div>
          </el-row>
          <el-row :gutter="20" v-show="showGranzaLogo">
            <el-col :span="24">
              <div class="grid-content granza-log" justify="center">
                <img style=" height: 50px" src="/images/logo.png" />
              </div>
            </el-col>
          </el-row>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { FormBuilder } from "@/components/form_elements/formbuilder";

export default {
  name: "Publish",
  store: ["forms", "themingVars", "showGranzaLogo"],
  components: FormBuilder.$options.components,
  computed: {
    headings() {
      return this.forms.filter(function(form) {
        return form.fieldType == "Heading";
      });
    },
    elements() {
      return this.forms.filter(function(form) {
        return form.fieldType != "Heading";
      });
    },
    cssProps() {
      // Return an object that will generate css properties key
      // to match with the themingVars
      //
      // Example output: { '--theme-primary-color': this.themingVars.primaryColor }
      var result = {},
        themingVars = this.themingVars;

      for (var v in themingVars) {
        if (themingVars.hasOwnProperty(v)) {
          var newV = "--theme-" + _.kebabCase(v),
            suffix = "";

          // Add px to the value if the default value contain 'px'
          if (_.includes(newV, "size")) suffix = "px";
          else if (_.includes(newV, "margin")) suffix = "px";
          else if (_.includes(newV, "radius")) suffix = "px";

          result[newV] = themingVars[v] + suffix;
        }
      }

      return result;
    },
  },
};
</script>
