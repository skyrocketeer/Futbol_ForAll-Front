import { CSSTransition } from 'react-transition-group'

export default function Transition({children, appeared}: {children: JSX.Element, appeared: boolean}) {
  return (
    <>
      <CSSTransition
        in={appeared}
        classNames="fade"
        unmountOnExit
        timeout={1000}
      >
        {children}
      </CSSTransition>
    </>
  )
}