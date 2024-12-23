import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField  from "../TextField";
import SelectField from "../SelectField";
import Button from "../Button";
import { Box, Stack } from "@chakra-ui/react";

const Form = ({ fields, onSubmit, buttonLabel, theme }) => {
  const [formValues, setFormValues] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={4} borderRadius="md">
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
                isInvalid={field.isInvalid}
                errorMessage={field.errorMessage}
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
                isInvalid={field.isInvalid}
                errorMessage={field.errorMessage}
                theme={theme}
              />
            );
          }
          return null;
        })}
        <Button label={buttonLabel} type="submit" theme={theme} />
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
      options: PropTypes.array, // Only for select
      isInvalid: PropTypes.bool,
      errorMessage: PropTypes.string,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string,
  theme: PropTypes.object,
};

Form.defaultProps = {
  buttonLabel: "Submit",
  theme: {},
};

export default Form;
