import {
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemContainer,
  RadioGroupRoot,
} from './styles'
// import { useState } from 'react'

export function RadioButton() {
  // const [radioValue, setRadioValue] = useState('')

  return (
    <RadioGroupRoot defaultValue="metric">
      <RadioGroupItemContainer>
        <RadioGroupItem value="metric" id="metric">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <label htmlFor="metric">Metric</label>
      </RadioGroupItemContainer>
      <RadioGroupItemContainer>
        <RadioGroupItem value="imperial" id="imperial">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <label htmlFor="imperial">Imperial</label>
      </RadioGroupItemContainer>
    </RadioGroupRoot>
  )
}
