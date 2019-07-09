export const formData = [
  {
    id: "name",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    value: "User name",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"]
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"]
      }
    ]
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
    validationType: "string",
    value: "email",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [5, "email cannot be less than 5 characters"]
      },
      {
        type: "max",
        params: [10, "email cannot be more than 10 characters"]
      },
      {
        type: "email",
        params: ["please enter a valid email"]
      }
    ]
  },
  {
    id: "phoneNumber",
    label: "phone number",
    type: "text",
    validationType: "number",
    value: "7878787878",
    validations: [
      {
        type: "min",
        params: [1, "phone number cannot be less than 10 characters"]
      },
      {
        type: "max",
        params: [10, "phone number cannot be more than 10 characters"]
      },
      {
        type: "required",
        params: ["phone number is required"]
      }
    ]
  },
  {
    id: "total",
    label: "Total People in Family",
    placeholder: "family members count",
    type: "text",
    validationType: "number",
    value: "1",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "min",
        params: [1, "there should be atleast 1 family member"]
      },
      {
        type: "max",
        params: [5, "max family members can be 5"]
      }
    ]
  },
  {
    id: "dob",
    label: "Date of birth",
    type: "dob",
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "minAge",
        params: [1, "minimum age should be 1"]
      },
      {
        type: "maxAge",
        params: [50, "maximum age should be 50"]
      }
    ]
  },
  // This field is different since it depends on another field
  {
    id: "field-depends-on-field",
    label: "Show hide field depending on another field",
    type: "text",
    validationType: "string",
    dependsOn: [
      {
        field: "total",
        // Activa/show when total !== 2 and total !== 3
        activate: [
          // Type is required since text, dropdown fields will change everything to number
          // So the type defined what type should "total" be converted to before comparing it to 2 or 3
          { operator: "!==", value: 2, type: "number" },
          { operator: "!==", value: 3, type: "number" }
        ]
      }
    ],
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      }
    ]
  },
  // This field is different since its validation depends on another field
  {
    id: "validation-depends-on-field",
    label: "The validation of this field depending on another field",
    type: "text",
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"]
      },
      {
        type: "max",
        params: [
          3,
          "The length of this cannot be more than 3 characters while total is equal to 5"
        ],
        dependsOn: [
          {
            field: "total",
            // Show error when total === 5
            activate: [{ operator: "===", value: 5, type: "number" }]
          }
        ]
      }
    ]
  }
];
