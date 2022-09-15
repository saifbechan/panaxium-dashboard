import { Box, ChakraProps, GridItem, Heading, Icon, Tooltip } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { ReactNode } from 'react';

const Section = ({
  title,
  info,
  children,
  ...props
}: {
  title: string;
  info?: string;
  children: ReactNode;
} & ChakraProps) => {
  return (
    <GridItem>
      <Box backgroundColor="#29293B" border="1px solid #401D56" padding="10px" {...props}>
        {info ? (
          <Box textAlign="right">
            <Tooltip hasArrow label={info}>
              <span>
                <Icon as={BsQuestionCircle} color="text.dimmed" />
              </span>
            </Tooltip>
          </Box>
        ) : null}

        <Heading
          as="h4"
          color="text.dimmed"
          fontWeight="normal"
          overflow="hidden"
          padding="0 0 20px 0"
          size="sm"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {title}
        </Heading>
        {children}
      </Box>
    </GridItem>
  );
};

export default Section;
