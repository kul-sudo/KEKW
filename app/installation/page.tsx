'use client'

import type { FC } from 'react'
import { Box, Button, Flex, VStack } from '@kuma-ui/core'
import { saveAs } from 'file-saver'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

const Installation: FC = () => {
  return (
    <>
      <Link href="/">
        <Button position="fixed" top="5" left="5">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Flex justify="center">
        <VStack alignItems="center" gap="2rem" marginTop="1rem">
          <VStack alignItems="center" gap="1rem">
            <Box color="white" fontSize="2rem">
              🤔 How to install the extension?
            </Box>

            <video muted width="700" controls style={{ borderRadius: '5px' }}>
              <source src="/installation.webm" type="video/webm" />
            </video>
          </VStack>

          <VStack
            color="white"
            fontSize="2rem"
            textAlign="center"
            alignItems="center"
          >
            <Box textDecoration="underline">
              Why not just let us install the extension via the Chrome Store?
            </Box>
            <Box>
              There reason behind is to ensure anyone can see the source code,
              <br />
              because many people are afraid the extension is infected.
            </Box>
          </VStack>

          <Button
            backgroundColor="#f1f5f9"
            border="none"
            borderRadius="5px"
            fontSize="2rem"
            _hover={{
              backgroundColor: '#cbd5e1',
              transition: 'background-color 150ms linear'
            }}
            onClick={() => {
              saveAs('/kekw.zip')
            }}
          >
            Download
          </Button>
        </VStack>
      </Flex>
    </>
  )
}

export default Installation
