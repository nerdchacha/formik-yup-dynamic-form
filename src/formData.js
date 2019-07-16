export const formData = [
  {
    id: 'name',
    label: 'Full name',
    placeholder: 'Enter full name',
    type: 'text',
    yupType: 'string',
    value: 'User name',
    validations: [
      {
        type: 'required',
        params: ['this field is required'],
      },
      {
        type: 'min',
        params: [5, 'name cannot be less than 5 characters'],
      },
      {
        type: 'max',
        params: [10, 'name cannot be more than 10 characters'],
      },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Email',
    type: 'text',
    yupType: 'string',
    value: 'email',
    validations: [
      {
        type: 'required',
        params: ['this field is required'],
      },
      {
        type: 'min',
        params: [5, 'email cannot be less than 5 characters'],
      },
      {
        type: 'max',
        params: [10, 'email cannot be more than 10 characters'],
      },
      {
        type: 'email',
        params: ['please enter a valid email'],
      },
    ],
  },
  {
    id: 'phoneNumber',
    label: 'phone number',
    type: 'text',
    yupType: 'number',
    value: '7878787878',
    validations: [
      {
        type: 'min',
        params: [1, 'phone number cannot be less than 10 characters'],
      },
      {
        type: 'max',
        params: [10, 'phone number cannot be more than 10 characters'],
      },
      {
        type: 'required',
        params: ['phone number is required'],
      },
    ],
  },
  {
    id: 'total',
    label: 'Total People in Family',
    placeholder: 'family members count',
    type: 'text',
    yupType: 'number',
    value: '1',
    validations: [
      {
        type: 'required',
        params: ['this field is required'],
      },
      {
        type: 'min',
        params: [1, 'there should be atleast 1 family member'],
      },
      {
        type: 'max',
        params: [5, 'max family members can be 5'],
      },
    ],
  },
  {
    id: 'dob',
    label: 'Date of birth',
    type: 'dob',
    yupType: 'string',
    validations: [
      {
        type: 'matches',
        params: [
          /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/,
          'please enter a valid date',
        ],
      },
      {
        type: 'minAge',
        params: [1, 'minimum age should be 1'],
      },
      {
        type: 'maxAge',
        params: [50, 'maximum age should be 50'],
      },
    ],
  },
  {
    id: 'show-next-field',
    label: 'Show next field',
    type: 'checkbox',
    yupType: 'boolean',
    value: false,
    validations: [
      {
        type: 'oneOf',
        params: [[true], 'this field should be checked'],
      },
    ],
  },
  {
    id: 'help',
    label: 'need help',
    type: 'text',
    yupType: 'string',
    dependsOn: {
      fields: [{ name: 'show-next-field', parser: 'boolean' }],
      operator: {
        '===': [true, { var: 'show-next-field' }],
      },
    },
  },
  // This field is different since it depends on another field
  {
    id: 'field-depends-on-field',
    label: 'Show hide field depending on another field',
    type: 'text',
    yupType: 'string',
    dependsOn: {
      // type is required since textbox/dropdown will convert everything to string
      fields: [
        { name: 'total', parser: 'number' },
        { name: 'email', parser: 'string' },
      ],
      // Use https://www.npmjs.com/package/json-logic-js to create the operator
      operator: {
        or: [
          {
            or: [
              {
                '===': [2, { var: 'total' }],
              },
              {
                '===': [3, { var: 'total' }],
              },
            ],
          },
          {
            '===': ['y@y.com', { var: 'email' }],
          },
        ],
      },
    },
    validations: [
      {
        type: 'required',
        params: ['this field is required'],
      },
    ],
  },
  // This field is different since its validation depends on another field
  {
    id: 'validation-depends-on-field',
    label: 'The validation of this field depending on another field',
    type: 'text',
    yupType: 'string',
    validations: [
      {
        type: 'required',
        params: ['this field is required'],
      },
      {
        type: 'max',
        params: [
          3,
          'The length of this cannot be more than 3 characters if total is 5 OR 6 AND phone number is 6',
        ],
        dependsOn: {
          // type is required since textbox/dropdown will convert everything to string
          fields: [
            { name: 'total', parser: 'number' },
            { name: 'phoneNumber', parser: 'number' },
          ],
          // Use https://www.npmjs.com/package/json-logic-js to create the operator
          operator: {
            and: [
              {
                or: [
                  {
                    '===': [5, { var: 'total' }],
                  },
                  {
                    '===': [6, { var: 'total' }],
                  },
                ],
              },
              {
                '===': [6, { var: 'phoneNumber' }],
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: 'date-show',
    label: 'Show when date > 12-12-2001',
    type: 'text',
    yupType: 'string',
    dependsOn: {
      fields: [{ name: 'dob', parser: 'date' }],
      operator: {
        // This is a custom operator
        // https://github.com/jwadhams/json-logic-js/issues/6
        // http://jsonlogic.com/add_operation.html
        '>': [{ date: { var: 'dob' } }, { date: '12-12-2001' }],
      },
    },
  },
];
