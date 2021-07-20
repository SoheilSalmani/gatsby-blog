import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import React from "react"

const Code = styled.pre`
  padding: 0.5rem 0 0.5rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
`

const LineNumber = styled.div`
  user-select: none;
  line-height: 1.1rem;
  box-sizing: border-box;
  grid-column-start: 1;
  text-align: right;
  padding-left: 0.5rem;
  background-color: ${({ lineNumber, highlightedLines }) =>
    highlightedLines.includes((lineNumber + 1).toString())
      ? "rgba(199, 146, 234, 0.25)"
      : "transparent"};
  color: ${({ lineNumber, highlightedLines }) =>
    highlightedLines.includes((lineNumber + 1).toString())
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(255, 255, 255, 0.3)"};
  border-left: ${({ lineNumber, highlightedLines }) =>
    highlightedLines.includes((lineNumber + 1).toString())
      ? "5px solid rgb(199, 146, 234)"
      : "5px solid rgb(1, 22, 39)"};
`

const LineContent = styled.div`
  box-sizing: border-box;
  line-height: 1.1rem;
  grid-column-start: 2;
  padding-left: ${({ isNumbered }) => (isNumbered ? "1rem" : "0.5rem")};
  background-color: ${({ lineNumber, highlightedLines }) =>
    highlightedLines.includes((lineNumber + 1).toString())
      ? "rgba(199, 146, 234, 0.25)"
      : "transparent"};
  border-left: ${({ lineNumber, highlightedLines, isNumbered }) =>
    highlightedLines.includes((lineNumber + 1).toString()) && !isNumbered
      ? "5px solid rgb(199, 146, 234)"
      : "5px solid transparent"};
`

export default function CodeBlock({ children, className, hl = "", nu }) {
  const language = className.replace(/language-/, "")
  const highlightedLines = hl.split(",")

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Code
          className={className}
          style={style}
          css={css`
            break-inside: avoid;
            border-radius: 5px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          `}
        >
          {tokens.map((line, i) => (
            <>
              {nu && (
                <LineNumber lineNumber={i} highlightedLines={highlightedLines}>
                  {i + 1}
                </LineNumber>
              )}
              <LineContent
                lineNumber={i}
                highlightedLines={highlightedLines}
                isNumbered={nu}
                {...getLineProps({ line, key: i })}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </>
          ))}
        </Code>
      )}
    </Highlight>
  )
}