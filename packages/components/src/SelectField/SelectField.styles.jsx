import React from 'react';

import {
  Box,
  SelectControl,
  SelectIndicator,
  SelectIndicatorGroup,
  SelectPositioner,
} from '@chakra-ui/react';
import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
} from '../../../../src/components/ui/select';
import { Field } from '../../../../src/components/ui/field';
import { createListCollection, Portal } from '@chakra-ui/react';

export const StyledBox = (props) => <Box {...props} pb={4} borderRadius="md" />;

export const StyledSelect = ({
  label,
  value,
  options,
  isDisabled,
  isInvalid,
  isRequired,
  ...props
}) => {
  const selectOptions = createListCollection({
    items: options.map((opt) => ({
      value: String(opt.value),
      label: opt.label,
    })),
  });

  const handleValueChange = (selectedItem) => {
    props.onChange?.(selectedItem.value);
  };

  return (
    <>
      {isInvalid ? (
        <Field
          disabled={isDisabled}
          invalid
          errorText={props.errorMessage || 'Error'}
          label={label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
          <SelectRoot
            collection={selectOptions}
            size={props.size}
            value={value}
            onValueChange={handleValueChange}
          >
            <SelectControl>
              <SelectTrigger>
                <SelectValueText placeholder={props.placeholder} />
              </SelectTrigger>
              <SelectIndicatorGroup>
                <SelectIndicator />
              </SelectIndicatorGroup>
            </SelectControl>

            <Portal>
              <SelectPositioner>
                <SelectContent>
                  {selectOptions.items.map((record) => (
                    <SelectItem item={record} key={record.value}>
                      {record.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </SelectRoot>
        </Field>
      ) : (
        <Field
          disabled={isDisabled}
          label={label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
          <SelectRoot
            key={value}
            collection={selectOptions}
            size={props.size}
            defaultValue={value}
            onValueChange={handleValueChange}
          >
            <SelectControl>
              <SelectTrigger>
                <SelectValueText placeholder={props.placeholder} />
              </SelectTrigger>
              <SelectIndicatorGroup>
                <SelectIndicator />
              </SelectIndicatorGroup>
            </SelectControl>

            <Portal>
              <SelectPositioner>
                <SelectContent>
                  {selectOptions.items.map((record) => (
                    <SelectItem item={record} key={record.value}>
                      {record.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </Portal>
          </SelectRoot>
        </Field>
      )}
    </>
  );
};
