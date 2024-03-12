import { ElementType } from 'react'
import { styled } from '../../Styles'
import { ComponentProps } from '@stitches/react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
Box.displayName = 'Box'
