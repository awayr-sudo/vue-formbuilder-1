import Vue from "vue";

import draggable from "vuedraggable";

import TextInput from "@/components/form_elements/FormElementTextInput";
import URL from "@/components/form_elements/FormElementURL";
import LongTextInput from "@/components/form_elements/FormElementLongTextInput";
import NumberInput from "@/components/form_elements/FormElementNumberInput";
import SelectList from "@/components/form_elements/FormElementSelectList";
import RadioButton from "@/components/form_elements/FormElementRadioButton";
import Checkbox from "@/components/form_elements/FormElementCheckbox";
import TimePicker from "@/components/form_elements/FormElementTimePicker";
import DatePicker from "@/components/form_elements/FormElementDatePicker";
import DatetimePicker from "@/components/form_elements/FormElementDatetimePicker";
import Rating from "@/components/form_elements/FormElementRating";
import Button from "@/components/form_elements/FormElementButton";
import Carousel from "@/components/form_elements/FormElementCarousel";
import Upload from "@/components/form_elements/FormElementUpload";
import ElSwitch from "@/components/form_elements/FormElementSwitch";
import TableComponent from "@/components/form_elements/FormElementTable";
import HtmlComponent from "@/components/form_elements/FormElementHtml";
import Heading from "@/components/form_elements/FormElementHeading";
import Address from "@/components/form_elements/FormElementAddress";
import Zipcode from "@/components/form_elements/FormElementZipcode";
import Birthday from "@/components/form_elements/FormElementBirthday";
import Phone from "@/components/form_elements/FormElementPhone";
import Elements from "@/components/form_elements/Elements";
import Properties from "@/components/form_elements/properties/Properties";
import HeadingProps from "@/components/form_elements/properties/HeadingProps";

import vm from "@/main";

export const FormBuilder = new Vue({
  components: {
    Elements,
    Properties,
    draggable,
    Heading,
    TextInput,
    URL,
    LongTextInput,
    NumberInput,
    SelectList,
    RadioButton,
    Checkbox,
    TimePicker,
    DatePicker,
    DatetimePicker,
    Rating,
    Button,
    Carousel,
    Upload,
    ElSwitch,
    TableComponent,
    HtmlComponent,
    Address,
    Zipcode,
    Birthday,
    Phone,
    HeadingProps,
  },
  data() {
    return {
      fields: [
        {
          fieldType: "TextInput",
          label: "Text",
          text: "Text",
          group: "form", //form group
          isRequired: false,
          className: "pixicon-text",
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 24,
          labelWidth: 140,
          advancedOptions: true,
          showPassword: false,
          disabled: false,
          clearable: false,
          prepend: "",
          append: "",
          maxlength: 10,
          showWordLimit: false,
        },
        {
          fieldType: "LongTextInput",
          label: "Long Text",
          text: "Long Text",
          group: "form",
          className: "pixicon-long-text",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 24,
          labelWidth: 100,
        },
        {
          fieldType: "NumberInput",
          label: "Number",
          text: "Number",
          group: "form",
          className: "pixicon-number",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 24,
          labelWidth: 100,
          advancedOptions: true,
          disabled: false,
          stepStrictly: false,
          step: 1,
          hasMinValue: false,
          min: 1,
          hasMaxValue: false,
          max: 10,
        },
        {
          fieldType: "SelectList",
          label: "Select",
          text: "Select",
          group: "form",
          className: "pixicon-select",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 24,
          labelWidth: 100,
          isFromUrl: false,
          dataUrl: "",
          options: [
            {
              optionLabel: "Option Label 1",
              optionValue: "Option 1",
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2",
            },
          ],
          advancedOptions: true,
          labelField: "label",
          valueField: "value",
          disabled: false,
          clearable: false,
          multiple: false,
          filterable: false,
          remote: false,
        },
        {
          fieldType: "RadioButton",
          label: "Radio",
          text: "Radio",
          group: "form",
          className: "pixicon-radio-button",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          labelWidth: 100,
          isFromUrl: false,
          options: [
            {
              optionLabel: "Option Label 1",
              optionValue: "Option 1",
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2",
            },
          ],
          advancedOptions: true,
          dataUrl: "",
          labelField: "label",
          valueField: "value",
        },
        {
          fieldType: "Checkbox",
          label: "Checkbox",
          text: "Checkbox",
          group: "form",
          className: "pixicon-check-box",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          labelWidth: 100,
          isFromUrl: false,
          options: [
            {
              optionLabel: "Option Label 1",
              optionValue: "Option 1",
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2",
            },
          ],
          advancedOptions: true,
          dataUrl: "",
          labelField: "label",
          valueField: "value",
        },
        {
          fieldType: "DatePicker",
          label: "Date",
          text: "Date",
          group: "form",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          className: " pixicon-calendar",
        },
        {
          fieldType: "Birthday",
          label: "Birthday",
          text: "Birthday",
          group: "form",
          className: "pixicon-birthday-button",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
        },
        {
          fieldType: "Address",
          label: "Address",
          text: "Address",
          group: "form",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 24,
          labelWidth: 100,
          className: "pixicon-address",
        },
        {
          fieldType: "Zipcode",
          label: "Zip Code",
          text: "Zip Code",
          group: "form",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 24,
          labelWidth: 100,
          hasMinValue: false,
          min: 1,
          hasMaxValue: false,
          max: 5,
          className: "pixicon-zipcode-button",
        },
        {
          fieldType: "Phone",
          label: "Phone",
          text: "Phone",
          group: "form",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          className: "pixicon-phone",
        },
        {
          fieldType: "URL",
          label: "URL",
          text: "URL",
          group: "form",
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          className: "pixicon-url",
        },
      ],

      sortElementOptions: {
        group: {
          name: "formbuilder",
          pull: false,
          put: true,
        },
        sort: true,
      },

      dropElementOptions: {
        group: {
          name: "formbuilder",
          pull: "clone",
          put: false,
        },
        sort: false,
        filter: ".is-disabled",
      },
    };
  },
  methods: {
    deleteElement(index) {
      vm.$store.activeForm = [];
      vm.$store.activeTabForFields = "elements";
      vm.$delete(vm.$store.forms, index);
    },

    cloneElement(index, form) {
      var cloned = _.cloneDeep(form); // clone deep lodash
      vm.$store.forms.splice(index, 0, cloned);
    },
    handleGranzaLogo(show) {
      vm.$store.showGranzaLogo = show;
    },
    editElementProperties(form) {
      vm.$store.activeForm = form;
      if (form.fieldType != "Heading")
        vm.$store.activeTabForFields = "properties";
      else vm.$store.activeTabForFields = "elements";
      vm.$store.activeTabForFields = "properties";
    },
  },
});
