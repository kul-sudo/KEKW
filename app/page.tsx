'use client'

import type { FC, ReactNode, ChangeEvent } from 'react'
import type { TargetAndTransition, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useDebouncedState } from '@mantine/hooks'
import { Box, Button, Grid, HStack, Input, VStack } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

const randomRange = (min: number, max: number) => {
  return ~~(Math.random() * (max - min + 1)) + min
}

const Reveal: FC<{
  children: ReactNode
  variants: Variants
}> = ({ children, variants }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.25
      }}
    >
      {children}
    </motion.div>
  )
}

const Spring: FC<{
  children: ReactNode
  animate: TargetAndTransition
}> = ({ children, animate }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={animate}
      transition={{
        type: 'spring',
        duration: 1
      }}
    >
      {children}
    </motion.div>
  )
}

const Home: FC = () => {
  const [emoteInputValue, setEmoteInputValue] = useDebouncedState('', 200)

  return (
    <VStack alignItems="center" gap="1rem">
      <Reveal
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <HStack
          marginTop="1rem"
          gap="0.2em"
          fontSize="1.5rem"
          fontWeight="bolder"
          alignItems="center"
        >
          <Image src="/KEKW.webp" alt="KEKW" width={40} height={40} />
          <Box color="white" fontSize={['x-large', 'xx-large']}>
            KEKW for
          </Box>
          <Box color="#2dd4bf" fontSize={['x-large', 'xx-large']}>
            HLTV.org
          </Box>
        </HStack>
      </Reveal>

      <Spring animate={{ rotate: 360, scale: 1 }}>
        <Button
          backgroundColor="#f1f5f9"
          border="none"
          borderRadius="5px"
          fontSize="2rem"
          _hover={{
            backgroundColor: '#cbd5e1',
            transition: 'background-color 150ms linear'
          }}
        >
          <Link
            href="/installation"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Installation
          </Link>
        </Button>
      </Spring>

      <Spring animate={{ rotate: -360, scale: 1 }}>
        <Input
          marginTop="1rem"
          placeholder="Emote to search for"
          border="none"
          fontSize="large"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setEmoteInputValue(event.target.value)
          }}
          _focus={{
            outline: '2px solid transparent',
            outlineColor: 'blue'
          }}
        />
      </Spring>

      <Grid
        gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="1rem"
      >
        {[
          ':tf:',
          'CiGrip',
          'DatSauce',
          'ForeverAlone',
          'M&Mjc',
          'KEKW',
          'KEKWait',
          'bttvNice',
          'catJAM',
          'OMEGALUL',
          'NOMEGALUL',
          'TwaT',
          'WatChuSay',
          'tehPoleCat',
          'AngelThump',
          'TaxiBro',
          'BroBalt',
          'CandianRage',
          'D:',
          'VisLaud',
          'KaRappa',
          'FishMoley',
          'Hhhehehe',
          'KKona',
          'PoleDoge',
          'sosGame',
          'CruW',
          'RarePepe',
          'haHAA',
          'FeelsBirthdayMan',
          'RonSmug',
          'ShoopDaWhoop',
          'KappaCool',
          'FeelsBadMan',
          'bUrself',
          'ConcernDoge',
          'FeelsGoodMan',
          'FireSpeed',
          'NaM',
          'SourPls',
          'FeelsSnowMan',
          'GabeN',
          'FeelsSnowyMan',
          'LUL',
          'SaltyCorn',
          'monkaS',
          'VapeNation',
          'ariW',
          'notsquishY',
          'FeelsAmazingMan',
          'DuckerZ',
          'SqShy',
          'Wowee',
          'WubTF',
          'cvR',
          'cvL',
          'cvHazmat',
          'cvMask',
          'LULW',
          'HailHelix',
          'monkaW',
          'PogU',
          'PogChamp',
          'WeirdChamp',
          'Kappa',
          'DogChamp'
        ].map((imageSrc, index) => {
          if (imageSrc.toLowerCase().includes(emoteInputValue.toLowerCase())) {
            const randomX = randomRange(5, 75)

            return (
              <Reveal
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: Math.random() > 0.5 ? randomX : -randomX
                  },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <VStack alignItems="center">
                  <Image
                    src={`/${imageSrc}.webp`}
                    priority
                    width={90}
                    height={90}
                    alt="emote"
                  />
                  <Box color="white">{imageSrc}</Box>
                </VStack>
              </Reveal>
            )
          }
        })}
      </Grid>
    </VStack>
  )
}

export default Home
