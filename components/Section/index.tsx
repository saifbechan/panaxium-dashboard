import { Box, ChakraProps, GridItem, HStack, Icon, Text, Tooltip } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { ReactNode } from 'react';

const Section = ({
  title,
  info,
  children,
  ...props
}: {
  title?: string;
  info?: string;
  children: ReactNode;
} & ChakraProps) => {
  return (
    <GridItem height="100%">
      <Box
        backgroundColor="#29293B"
        border="1px solid #401D56"
        height="100%"
        padding="10px"
        {...props}
      >
        {title || info ? (
          <HStack justifyContent="space-between" justifyItems="center" mb={4}>
            {title ? (
              <Text
                color="gray.300"
                fontWeight="normal"
                overflow="hidden"
                size="sm"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {title}
              </Text>
            ) : (
              <></>
            )}

            {info ? (
              <Tooltip hasArrow label={info}>
                <div>
                  <Icon as={BsQuestionCircle} color="text.dimmed" />
                </div>
              </Tooltip>
            ) : (
              <></>
            )}
          </HStack>
        ) : (
          <></>
        )}
        {children}
      </Box>
    </GridItem>
  );
};

export default Section;
