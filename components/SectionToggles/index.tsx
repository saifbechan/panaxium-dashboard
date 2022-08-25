import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtom } from 'jotai';

const SectionToggles = () => {
  const [sectionToggles, setSectionToggles] = useAtom(sectionTogglesState);

  return (
    <Box backgroundColor="#29293B" padding="10px">
      <ButtonGroup gap="4">
        <Button
          colorScheme="purple"
          size="sm"
          variant={sectionToggles['rythm-measurement'] ? 'solid' : 'outline'}
          onClick={() =>
            setSectionToggles({
              ...sectionToggles,
              'rythm-measurement': !sectionToggles['rythm-measurement'],
            })
          }
        >
          Rythm Measurement
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default SectionToggles;
