import type { Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@design_system/react/src/index'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>
