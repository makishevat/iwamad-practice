type FooterProps = {
  year: number;
};

export function Footer({ year }: FooterProps) {
  return (
    <footer>
      <p>&copy; {year}</p>
    </footer>
  );
}