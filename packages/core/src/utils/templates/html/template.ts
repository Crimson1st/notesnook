/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2023 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { TemplateData } from "..";
import { formatDate } from "../../date";

export function template(data: TemplateData) {
  return `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta
      name="description"
      content="${data.headline}"
    />
    <title>${data.title}</title>
    <meta name="created-at" content="${formatDate(data.dateCreated)}" />
    <meta name="updated-at" content="${formatDate(data.dateEdited)}" />
    ${data.pinned ? `<meta name="pinned" content="${data.pinned}" />` : ""}
    ${
      data.favorite ? `<meta name="favorite" content="${data.favorite}" />` : ""
    }
    ${data.color ? `<meta name="color" content="${data.color}" />` : ""}
    ${
      data.tags && data.tags.length
        ? `<meta name="tags" content="${data.tags.join(", ")}" />`
        : ""
    }
    <link rel="stylesheet" href="https://app.notesnook.com/assets/editor-styles.css?d=1690887574068">

    <style>

    .image-container {
      display: block;
    }
    .image-container.align-right {
      display: flex;
      justify-content: end;
    }
    .image-container.align-center {
      display: flex;
      justify-content: center;
    }
    .image-container.float {
      float: left;
    }
    .image-container.float.align-right {
      float: right;
    }

    body {
      background-color: transparent !important;
      color: #202124;
      font-family: "Open Sans", "Noto Sans", Frutiger, Calibri, Myriad, Arial, Ubuntu, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .math-block {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #212121;
    }

    p {
      margin-bottom: 0px;
    }
    
    p[data-spacing="double"] {
      margin-top: 1em;
    }
    
    p[data-spacing="single"] {
      margin-top: 0px;
    }

    p[data-spacing="single"]:empty {
      margin-top: 1em;
    }
    
    pre.codeblock {
      overflow-x: auto;
    }
    
    iframe {
      max-width: 100% !important;
      background-color: transparent !important;
    }
    
    li > p {
      margin-top: 0px;
      margin-bottom: 10px;
    }
    
    .checklist > li {
      list-style: none;
      margin: 0.25em 0;
    }
    
    .checklist > li::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
      cursor: pointer;
      height: 1.1em;
      margin-left: -2.5em;
      margin-top: 0em;
      position: absolute;
      width: 1.5em;
      padding-left: 1em;
    }
    
    .checklist li.checked::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%23008837%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A");
    }
    
    .checklist li.checked {
      color: #505050;
    }
    
    [dir="rtl"] .checklist > li::before {
      margin-left: 0;
      margin-right: -1.5em;
    }
    
    blockquote {
      border-left: 5px solid #e5e5e5;
      padding-left: 10px;
      margin-top: 0px;
    }
    
    code:not(pre code) {
      background-color: #f7f7f7;
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      padding: 3px 5px 0px 5px;
      font-family: Hack, Consolas, "Andale Mono", "Lucida Console", "Liberation Mono", "Courier New", Courier, monospace !important;
      font-size: 10pt !important;
    }
    
    .ProseMirror code > span {
      font-family: Hack, Consolas, "Andale Mono", "Lucida Console", "Liberation Mono", "Courier New", Courier, monospace !important;
    }
    
    pre {
      padding: 10px;
      background-color: #e5e5e5;
      border-radius: 5px;
      font-family: Hack, Consolas, "Andale Mono", "Lucida Console", "Liberation Mono", "Courier New", Courier, monospace !important;
        margin-bottom: 16px !important;
    }
    
    table {
      border-collapse: collapse;
      margin: 0;
      overflow: hidden;
      table-layout: fixed;
    }
    
    table td,
    table th {
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      min-width: 1em;
      padding: 3px 5px;
      position: relative;
      vertical-align: top;
    }
    
    table td > *,
    table th > * {
      margin-bottom: 0;
    }
    
    table th {
      background-color: #f7f7f7;
      font-weight: bold;
      text-align: left;
    }
    table p {
      margin: 0;
    }
    </style>
    <style>
      code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:0 0;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#282a36}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#6272a4}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#ff79c6}.token.boolean,.token.number{color:#bd93f9}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#50fa7b}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#f1fa8c}.token.keyword{color:#8be9fd}.token.important,.token.regex{color:#ffb86c}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
    </style>
  </head>
  <body>
    <h1>${data.title}</h1>
    ${data.content}
  </body>
</html>
`;
}
