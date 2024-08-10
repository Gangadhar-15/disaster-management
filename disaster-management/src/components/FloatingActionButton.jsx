// FloatingActionButton.js
import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const FloatingActionButton = ({ onClick }) => {
  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
      <IconButton
        icon={<AddIcon />}
        aria-label="Add"
        size="lg"
        colorScheme="teal"
        borderRadius="full"
        boxShadow="md"
        onClick={onClick}
      />
    </Box>
  );
};

export default FloatingActionButton;
