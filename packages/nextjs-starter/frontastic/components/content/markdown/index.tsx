import ReactMarkdown from "react-markdown";

const MarkdownTastic = ({ data }) => {
  console.log("markdown", data);
  const content: string = Object.values(data.text)[0] as string;
  console.log("inside markdown content", content);
  return (
    <div
      className={`markdown-text markdown-position--align-${data.align} markdown-position--padding-${data.padding}`}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownTastic;
