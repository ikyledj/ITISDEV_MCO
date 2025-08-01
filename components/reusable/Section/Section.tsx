import React, { ReactNode } from "react";

const Section = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: string;
}) => {
  return (
    <section className={`container mx-auto px-4 py-12 text-blue ${style}`}>
      {children}
    </section>
  );
};

export default Section;
