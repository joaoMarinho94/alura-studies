import React, {ReactNode} from "react";
import styles from './button.module.scss'

interface Props{
  children: ReactNode
}

export class Button extends React.Component<Props> {

  render() {
   return (
      <button className={styles.button}>
        {this.props.children}
      </button>
    )
 }
}