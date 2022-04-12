import * as Styles from "./Card.styles";

export function Card({ children }: CardProps) {
  return <Styles.Container>{children}</Styles.Container>;
}
