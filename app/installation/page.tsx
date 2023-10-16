'use client'

import type { FC } from 'react'
import { Box, Button, Flex, VStack, css } from '@kuma-ui/core'
import { saveAs } from 'file-saver'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

const Installation: FC = () => {
  return (
    <>
      <Link href="/">
        <Button position="fixed" top="1rem" left="1rem">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Flex justify="center">
        <VStack alignItems="center" gap="1rem" marginTop="3rem">
          <VStack alignItems="center" gap="1rem">
            <Box color="white" fontSize="1.5rem" textAlign="center">
              🤔 How to install the extension?
            </Box>

            <video
              muted
              controls
              style={{ borderRadius: '5px' }}
              className={css`
                width: 30rem;
                @media (max-width: 1200px) {
                  width: 19rem;
                }
              `}
            >
              <source src="/installation.mp4" type="video/mp4" />
            </video>
          </VStack>

          <VStack
            color="white"
            fontSize="1.5rem"
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
