import { Box, ChakraProps, CloseButton, GridItem, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SectionToggleIds, sectionTogglesState } from '../../lib/store';
import { useAtom } from 'jotai';

const Section = ({
  title,
  id,
  children,
  ...props
}: {
  title?: string;
  id?: keyof SectionToggleIds;
  children: ReactNode;
} & ChakraProps) => {
  const [sectionToggles, setSectionTogglesState] = useAtom(sectionTogglesState);

  return (
    <GridItem height="100%">
      <Box
        backgroundColor="#29293B"
        border="1px solid #401D56"
        height="100%"
        padding={2}
        {...props}
      >
        {title || id ? (
          <HStack justifyContent="space-between" justifyItems="center" mb={4}>
            {title ? (
              <Text
                color="offwhite"
                fontWeight="500"
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

            {id ? (
              <CloseButton
                colorScheme="facebook"
                size="sm"
                onClick={() =>
                  setSectionTogglesState({
                    ...sectionToggles,
                    [id]: !sectionToggles[id],
                  })
                }
              />
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
