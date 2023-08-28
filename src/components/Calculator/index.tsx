import { RadioButton } from '../RadioButton'
import { CalculatorContainer } from './styles'

export function Calculator() {
  return (
    <CalculatorContainer>
      <h2>Enter your details below</h2>

      <div>
        <RadioButton />
      </div>
    </CalculatorContainer>
  )
}
