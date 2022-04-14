import * as Styles from "./Card.styles";

export function Card({ children, backgroundColor, textColor }: CardProps) {
  return (
    <Styles.Container backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </Styles.Container>
  );
}
