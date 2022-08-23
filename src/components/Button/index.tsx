import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export class Button extends React.Component<Props> {
  render() {
    const { children, type } = this.props;

    return <button type={type} className={styles.button}>{children}</button>;
  }
}
