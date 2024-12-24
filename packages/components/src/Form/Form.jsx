import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../TextField";
import SelectField from "../SelectField";
import Button from "../Button";
import { Box, Flex, Stack } from "@chakra-ui/react";



const Form = ({ fields, theme, onSubmit }) => {
  const [formValues, setFormValues] = useState(() =>
    fields.flat().reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.defaultValue || "";
      }
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState(() =>
    fields.flat().reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const validate = () => {
    const newErrors = {};
    fields.flat().forEach((field) => {
      const value = formValues[field.name];

      if (field.isRequired && !value) {
        if (field.errorMessage) {
          newErrors[field.name] = field.errorMessage;
        } else {
          newErrors[field.name] = `${field.label || "This field"} is required.`;
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
    <Box as="form" onSubmit={handleSubmit} bg="white" p={4} borderRadius="md">
      <Stack spacing={4}>
        {fields.map((field) => {
          if (Array.isArray(field)) {
            return (
              <Flex
                key={field.map((f) => f.name || f.label).join("-")}
                gap="0"
                justify="space-between"
              >
                {field.map((subField) => (
                  <Box
                    px="2"
                    py="0"
                    key={subField.name || subField.label}
                    flex={`0 0 ${100 / Math.min(field.length, 4)}%`}
                    maxWidth={`${100 / Math.min(field.length, 4)}%`}
                  >
                    {subField.type === "text" && (
                      <TextField
                        label={subField.label}
                        value={formValues[subField.name]}
                        onChange={(e) => handleChange(subField.name, e.target.value)}
                        placeholder={subField.placeholder}
                        isRequired={subField.isRequired}
                        isInvalid={!!errors[subField.name]}
                        errorMessage={errors[subField.name]}
                        theme={theme}
                      />
                    )}
                    {subField.type === "select" && (
                      <SelectField
                        label={subField.label}
                        value={formValues[subField.name]}
                        onChange={(value) => handleChange(subField.name, value)}
                        options={subField.options}
                        placeholder={subField.placeholder}
                        isRequired={subField.isRequired}
                        isInvalid={!!errors[subField.name]}
                        errorMessage={errors[subField.name]}
                        theme={theme}
                      />
                    )}
                  </Box>
                ))}
              </Flex>
            );
          }

          if (field.type === "button") {
            return (
              <Button
                key={field.label}
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

          if (field.type === "text" || field.type === "select") {
            return (
              <React.Fragment key={field.name}>
                {field.type === "text" && (
                  <TextField
                    label={field.label}
                    value={formValues[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    isRequired={field.isRequired}
                    isInvalid={!!errors[field.name]}
                    errorMessage={errors[field.name]}
                    theme={theme}
                  />
                )}
                {field.type === "select" && (
                  <SelectField
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
                )}
              </React.Fragment>
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
    PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.oneOf(["text", "select", "button"]).isRequired,
        placeholder: PropTypes.string,
        defaultValue: PropTypes.string,
        options: PropTypes.array,
        isInvalid: PropTypes.bool,
        errorMessage: PropTypes.string,
        isRequired: PropTypes.bool,
      }),
      PropTypes.arrayOf(
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
      ),
    ])
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

Form.defaultProps = {
  theme: {},
};

export default Form;
