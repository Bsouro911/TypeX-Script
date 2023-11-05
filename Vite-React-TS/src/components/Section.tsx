import { ReactNode } from "react";

type sectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title = "My title", children }: sectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
