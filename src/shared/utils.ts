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

  // result = result.replace(/!<img src=".+" alt=".+" \/>/gm, (match) => {
  //   const title = match.split('"')[3];
  //   const url = match.split('"')[1];

  //   if (url.startsWith("https://www.youtube.com/embed"))
  //     return `
  //   <div style="width: 100%; height: 0; padding-bottom: 56.25%; position: relative">
  //     <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //   </div>
  //   `;

  //   return `
  //   <div style="width: 100%; height: 0; padding-bottom: 56.25%; position: relative">
  //     <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" src="${url}" title="${title}" frameborder="0"></iframe>
  //   </div>
  //   `;
  // });

  return result;
};