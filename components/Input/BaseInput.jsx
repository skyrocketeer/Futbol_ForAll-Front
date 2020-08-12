import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import { fade, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.func
}

PropTypes.defaultProps = {
  width: null,
  margin: null,
  placeholder: '',
  icon: null
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 2,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '16px 12px',
    margin: '0px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase)

function BaseInput(props) {
  const { fullWidth, width, placeholder, label, icon } = props

  return (
    <div className={width} >
      <InputLabel shrink>
        {label}
      </InputLabel>
      <BootstrapInput fullWidth={fullWidth} placeholder={placeholder} id="bootstrap-input">
        {icon}
      </BootstrapInput>
    </div>
  )
}

export default BaseInput