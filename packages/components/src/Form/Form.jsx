import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import SelectField from '../SelectField';
import Button from '../Button';
import FileField from '../FileField';
import FileDropZone from '../FileDropZone';
import { Box, Flex, Stack } from '@chakra-ui/react';

export const Form = ({ fields, buttonsPosition, theme, onSubmit }) => {
  // 🔹 Inicializar valores desde `fields` usando `value`
  const [formValues, setFormValues] = useState(() =>
    fields.flat().reduce((acc, field) => {
      if (field.name) {
        acc[field.name] = field.value || ''; // 🔹 Usamos `value` en lugar de `defaultValue`
      }
      return acc;
    }, {})
  );

  // 🔹 Si `fields` cambia, actualizamos `formValues`
  useEffect(() => {
    setFormValues((prevValues) => {
      const newValues = fields.flat().reduce((acc, field) => {
        if (field.name) {
          const newValue = field.value ?? prevValues[field.name] ?? '';
          if (newValue !== prevValues[field.name]) {
            acc[field.name] = newValue;
          }
        }
        return acc;
      }, {});

      return Object.keys(newValues).length ? { ...prevValues, ...newValues } : prevValues;
    });
  }, [fields]);

  // 🔹 Estado de errores
  const [errors, setErrors] = useState({});

  // 🔹 Resetear formulario
  const resetForm = () => {
    setFormValues(
      fields.flat().reduce((acc, field) => {
        if (field.name) {
          acc[field.name] = field.value || ''; // 🔹 Reiniciar valores
        }
        return acc;
      }, {})
    );
    setErrors({});
  };

  // 🔹 Validar formulario
  const validate = () => {
    const newErrors = {};
    fields.flat().forEach((field) => {
      const value = formValues[field.name];

      if (field.isRequired && !value) {
        newErrors[field.name] = field.errorMessage || `${field.label || 'This field'} is required.`;
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

  // 🔹 Manejar cambios en los inputs
  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit?.(formValues);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="white" p={4} borderRadius="md">
      <Stack spacing={4}>
        {fields.map((field) => {
          if (Array.isArray(field)) {
            return (
              <Flex key={field.map((f) => f.name || f.label).join('-')} gap="0" justify="space-between">
                {field.map((subField) => (
                  <Box
                    px="2"
                    py="0"
                    key={subField.name || subField.label}
                    flex={`0 0 ${100 / Math.min(field.length, 4)}%`}
                    maxWidth={`${100 / Math.min(field.length, 4)}%`}
                  >
                    {subField.type === 'text' && (
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
                    {subField.type === 'date' && (
                      <TextField
                        label={subField.label}
                        value={formValues[subField.name]}
                        onChange={(e) => handleChange(subField.name, e.target.value)}
                        placeholder={subField.placeholder}
                        isRequired={subField.isRequired}
                        isInvalid={!!errors[subField.name]}
                        errorMessage={errors[subField.name]}
                        theme={theme}
                        type={subField.type}
                      />
                    )}
                    {subField.type === 'select' && (
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
                    {subField.type === 'file' && (
                      <FileField
                        label={subField.label}
                        maxWidth={subField.maxWidth}
                        accept={subField.accept}
                        onFileChange={(file) => handleChange(subField.name, file)}
                      />
                    )}
                  </Box>
                ))}
              </Flex>
            );
          }

          if (['text', 'date', 'select', 'file', 'drop'].includes(field.type)) {
            return (
              <React.Fragment key={field.name}>
                {field.type === 'text' && (
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
                {field.type === 'date' && (
                  <TextField
                    label={field.label}
                    value={formValues[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    isRequired={field.isRequired}
                    isInvalid={!!errors[field.name]}
                    errorMessage={errors[field.name]}
                    theme={theme}
                    type={field.type}
                  />
                )}
                {field.type === 'select' && (
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
                {field.type === 'file' && (
                  <FileField
                    label={field.label}
                    maxWidth={field.maxWidth}
                    accept={field.accept}
                    onFileChange={(file) => handleChange(field.name, file)}
                  />
                )}
                {field.type === 'drop' && (
                  <Box py="2" key={field.name} flex="1" maxWidth="100%">
                    <FileDropZone
                      label={field.label}
                      description={field.description}
                      maxWidth="100%"
                      maxFiles={field.maxFiles}
                      accept={field.accept}
                      onFileChange={(files) => handleChange(field.name, files)}
                    />
                  </Box>
                )}
              </React.Fragment>
            );
          }

          return null;
        })}

        <Flex justify={buttonsPosition} gap="2">
          {fields
            .filter((field) => field.type === 'button')
            .map((button, index) => (
              <Button
                key={index}
                label={button.label}
                isLoading={button.isLoading}
                loadingText={button.loadingText}
                isDisabled={button.isDisabled}
                size={button.size}
                onClick={
                  button.isSubmit
                    ? handleSubmit
                    : button.isReset
                      ? () => resetForm()
                      : (event) => button.onClick?.(event, formValues, setFormValues)
                }
                icon={button.icon}
                theme={button.theme}
                isSubmit={button.isSubmit}
              />
            ))}
        </Flex>
      </Stack>
    </Box>
  );
};

Form.propTypes = {
  buttonsPosition: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
  ]),
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.oneOf(['text', 'date', 'select', 'button', 'file', 'drop'])
          .isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.array,
        isInvalid: PropTypes.bool,
        errorMessage: PropTypes.string,
        isRequired: PropTypes.bool,
        maxWidth: PropTypes.string,
        accept: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        maxFiles: PropTypes.number,
      }),
    ])
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

Form.defaultProps = {
  theme: {},
};

export default Form;
