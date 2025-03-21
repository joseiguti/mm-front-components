import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
} from '../../../../src/components/ui/select';
import { Field } from '../../../../src/components/ui/field';
import { createListCollection } from '@chakra-ui/react';

export const StyledBox = (props) => <Box {...props} pb={4} borderRadius="md" />;

export const StyledSelect = ({
                               label,
                               value,
                               onChange,
                               options,
                               isDisabled,
                               isInvalid,
                               isRequired,
                               isMultiple,
                               placeholder,
                               errorMessage,
                               labelColor,
                               size,
                             }) => {
  const selectOptions = createListCollection({ items: options });

  // 🔹 Asegurar que `value` sea correcto
  const formattedValue = isMultiple
    ? Array.isArray(value)
      ? value
      : []
    : value || '';

  // 🔹 Manejo de cambios en selección
  const handleValueChange = (selectedItems) => {
    if (isMultiple) {
      const selectedValues = Array.isArray(selectedItems)
        ? selectedItems.map((item) => item.value)
        : [];
      onChange?.(selectedValues);
    } else {
      onChange?.(selectedItems.value);
    }
  };

  return (
    <Field
      disabled={isDisabled}
      invalid={isInvalid}
      errorText={isInvalid ? errorMessage || 'Error' : undefined}
      label={label}
      css={{ color: labelColor }}
      {...(isRequired && { required: true })}
    >
      <SelectRoot
        collection={selectOptions}
        size={size}
        value={formattedValue} // 🔹 Usamos `value`
        onValueChange={handleValueChange}
        {...(isMultiple && { multiple: true })}
      >
        <SelectTrigger>
          <SelectValueText placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.items.map((record) => (
            <SelectItem item={record} key={record.value}>
              {record.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Field>
  );
};
