import { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { normalizeClassNames } from 'utils/helpers'
import { INPUT_BASE_STYLE } from 'utils/constants'

const IconInput= forwardRef(({ name, type, required, classes, placeholder, icon }: 
  { name?: string, type?: string, required?: boolean, classes?: any, placeholder?: string, icon: IconDefinition }, ref?: any) => (
    <label htmlFor={name}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} color="#6875f5"/>
      </div>
      <input 
        aria-label={name} 
        name={name} 
        type={type || "text"} 
        required={required || false}
        className={normalizeClassNames(INPUT_BASE_STYLE ,classes)} 
        placeholder={placeholder}
        ref={ref}
      />  
      <style jsx>{`
        label{
          position: relative;
        }
        
        label > input {
          padding-left: calc(1em + 10px + 8px); /* icon width + icon padding-left + desired separation*/
        }

        label > .icon {
          position: absolute;
          width: max-content;
          z-index: 10;
          top: calc(100% + 20px);
          left: 10px;
          transform: translateY(-50%);
        }
      `}</style>
    </label>
  )
)

export default IconInput