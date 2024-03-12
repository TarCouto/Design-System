import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './Styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  ),
)

TextInput.displayName = 'TextInput'
