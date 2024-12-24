import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField  from "../TextField";
import SelectField from "../SelectField";
import Button from "../Button";
import { Box, Stack } from "@chakra-ui/react";

const Form = ({
                fields,
                theme,
                onSubmit
}) => {

  const [formValues, setFormValues] = useState(() =>
    fields.reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.defaultValue || "";
      }
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      const value = formValues[field.name];

      if (field.isRequired && !value) {
        if (field.errorMessage){
          newErrors[field.name] =  field.errorMessage;
        } else {
          newErrors[field.name] =  `${field.label || "This field"} is required.`;
        }
      }

      if (field.validate) {
        const customError = field.validate(value, formValues);
        if (customError) {
          newErrors[field.name] = customError;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (name, value) => {
    console.log(`Updating field ${name} with value ${value}`);
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const filterUndefinedFields = (values) => {
    const filteredValues = {};
    Object.keys(values).forEach((key) => {
      if (key && key !== "undefined") {
        filteredValues[key] = values[key];
      }
    });
    return filteredValues;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const filteredValues = filterUndefinedFields(formValues);
      if (onSubmit) {
        onSubmit(filteredValues);
      }
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={4} borderRadius="l2">
      <Stack spacing={4}>
        {fields.map((field) => {
          if (field.type === "text") {
            return (
              <TextField
                key={field.name}
                label={field.label}
                value={formValues[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                isRequired={field.isRequired}
                isInvalid={!!errors[field.name]}
                errorMessage={errors[field.name]}
                theme={theme}
              />
            );
          }
          if (field.type === "select") {
            return (
              <SelectField
                key={field.name}
                label={field.label}
                value={formValues[field.name]}
                onChange={(value) => handleChange(field.name, value)}
                options={field.options}
                placeholder={field.placeholder}
                isRequired={field.isRequired}
                isInvalid={!!errors[field.name]}
                errorMessage={errors[field.name]}
                theme={theme}
              />
            );
          }
          if (field.type === "button") {
            return (
              <Button
                label={field.label}
                isLoading={field.isLoading}
                loadingText={field.loadingText}
                isDisabled={field.isDisabled}
                size={field.size}
                onClick={field.onClick}
                onSubmit={field.onSubmit}
                iconName={field.iconName}
                theme={field.theme}
                isSubmit={field.isSubmit}
              />
            );
          }
          return null;
        })}
      </Stack>
    </Box>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      type: PropTypes.oneOf(["text", "select"]).isRequired,
      placeholder: PropTypes.string,
      defaultValue: PropTypes.string,
      options: PropTypes.array,
      isInvalid: PropTypes.bool,
      errorMessage: PropTypes.string,
      isRequired: PropTypes.bool,
    })
  ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    buttonLabel: PropTypes.string,
    theme: PropTypes.object,
};

Form.defaultProps = {
  buttonLabel: "Submit",
  onClick: () => {},
  theme: {},
};

export default Form;
