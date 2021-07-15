import ReactMarkdown from "react-markdown";

import styles from "./markdown.module.css";

const MarkdownTastic = ({ data }) => {
  const content: string = Object.values(data.text)[0] as string;
  console.log(styles);

  const paddingClass = {
    small: "p-2",
    middle: "p-8",
    large: "p-12",
    undefined: "p-4"
  };

  return (
    <div
      className={`${styles.markdownText} text-${data.align || "left"} ${
        paddingClass[data.padding]
      }`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownTastic;
