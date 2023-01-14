import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

import styles from './Button.module.css'

function Button({ children, ...props }: Props) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  )
}

export default Button