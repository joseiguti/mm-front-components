import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Input } from "@chakra-ui/react";

const TextField = ({
                       label = "",
                       value = "",
                       onChange,
                       placeholder = "Enter text",
                       errorMessage = "",
                       isInvalid = false,
                   }) => {
    return (
      <Box>
          {label && (
            <Text mb={2} fontWeight="bold">
                {label}
            </Text>
          )}
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            size="md"
            borderColor={isInvalid ? "red.500" : "gray.300"}
            aria-invalid={isInvalid}
            _focus={{
                borderColor: isInvalid ? "red.500" : "blue.500",
            }}
          />
          {isInvalid && errorMessage && (
            <Text mt={1} fontSize="sm" color="red.500">
                {errorMessage}
            </Text>
          )}
      </Box>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    isInvalid: PropTypes.bool,
};

export default TextField;
