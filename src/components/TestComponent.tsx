import React from "react";

export interface TestComponentProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function TestComponent(props: TestComponentProps) {
  return (
    <section>
      <p>Teste Component</p>
      <h2>{props.title}</h2>
      <a href={props.link.url}>{props.link.text}</a>
    </section>
  );
}