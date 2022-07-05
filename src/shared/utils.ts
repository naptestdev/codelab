import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export const markdownToHTML = (text: string) => {
  const md = MarkdownIt({
    xhtmlOut: true,
    breaks: true,
    typographer: true,
    highlight: (str, lang) => {
      try {
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(str.trim(), { language: lang }).value;
        }
        return str.trim();
      } catch (error) {
        return str.trim();
      }
    },
  });

  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("target", "_blank");
    tokens[idx].attrSet("rel", "noopener noreferrer");

    return defaultRender(tokens, idx, options, env, self);
  };

  let result = md.render(text);

  return result;
};
