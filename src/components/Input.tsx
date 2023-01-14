import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
}

import styles from './Input.module.css'

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, ...props }, ref) => {
  return (
    <input ref={ref} className={styles.input} id={name} {...props} />
  )
}

export default forwardRef(Input)