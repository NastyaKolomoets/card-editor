export function prependRichText(text: string, insertText: string, tag: string) {
  if (!text) {
    return '';
  }

  const regexp = new RegExp(`<${tag}[^>]*>`);
  const openingTag = regexp.exec(text)?.[0] || '';
  const closingTag = `</${tag}>`;
  const start = text.indexOf(openingTag) + openingTag.length;
  const end = text.lastIndexOf(closingTag);

  return `${text.substring(0, start)}${insertText} ${text.substring(start, end)}`;
}

export function appendRichText(text: string, insertText: string, tag: string) {
  if (!text) {
    return '';
  }

  const closingTag = `</${tag}>`;
  const start = text.lastIndexOf(closingTag);

  return `${text.substring(0, start)}${insertText} ${text.substring(start)}`;
}
