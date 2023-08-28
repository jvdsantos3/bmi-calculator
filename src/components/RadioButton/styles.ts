import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'styled-components'

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.4rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  width: 3.1rem;
  height: 3.1rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(52, 95, 246, 0.15);
  border-radius: 100%;
  cursor: pointer;

  &::after {
    content: '""';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const RadioGroupItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  label {
    color: ${({ theme }) => theme.colors.gunmetal};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
  }
`
