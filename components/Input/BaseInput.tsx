import { forwardRef } from 'react'
import { normalizeClassNames } from 'utils/helpers'
import { INPUT_BASE_STYLE } from 'utils/constants'

const BaseInput = forwardRef( 
  ({ name, type, required, classes, placeholder }: 
  { name?: string, type?: string, required?: boolean, classes?: any, placeholder?: string }, ref?: any)  => (
    <input 
      aria-label={name} 
      name={name} 
      type={type || "text"} 
      required={required || false}
      className={normalizeClassNames(INPUT_BASE_STYLE ,classes)} 
      placeholder={placeholder}
      ref={ref}
    />
  )
)

export default BaseInput
