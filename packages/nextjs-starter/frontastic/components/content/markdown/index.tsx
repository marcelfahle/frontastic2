import ReactMarkdown from "react-markdown";

const MarkdownTastic = ({ data }) => {
  console.log("markdown", data);
  const content = Object.values(data.text)[0];
  return (
    <div
      className={`markdown-text markdown-position--align-${data.align} markdown-position--padding-${data.padding}`}
    >
      <ReactMarkdown>markdown goes here</ReactMarkdown>
    </div>
  );
};

export default MarkdownTastic;
