import slugify from 'slugify'
import base64url from 'base64url'

function allReplace(string, obj) {
  let temp = string;
  for (var x in obj) {
    temp = temp.replace(new RegExp(x, 'g'), obj[x]);
  }
  return temp;
};

export const FIELD_NAMES = {
  SECTIONS: 'sections',
  LINK: 'link',
  TITLE: 'title',
  AUTHOR: 'author',
  PUBLISHED_AT: 'publishedAt',
  ABSTRACT: 'abstract',
  TYPE: 'type',
  TOPICS: 'topics',
  SUGGESTED_BY: 'suggestedBy',
}

const fieldTransformers = {
  [FIELD_NAMES.TITLE]: (value) => `"${value.replace(/"/g, '\\"').trim()}"`,
  [FIELD_NAMES.AUTHOR]: (value) => `"${value.replace(/"/g, '\\"').trim()}"`,
  [FIELD_NAMES.PUBLISHED_AT]: (value) => value.toISOString(),
  [FIELD_NAMES.ABSTRACT]: (value) => `"${allReplace(value, {'\\n' : ' ', '"': '\\"'}).trim()}"`,
  [FIELD_NAMES.TOPICS]: (value) => `[${value.join(', ')}]`,
  [FIELD_NAMES.TYPE]: (value) => `[${value.split('_').join(', ')}]`,
  [FIELD_NAMES.SUGGESTED_BY]: (value) => `[${value.trim()}]`,
};

export function getPullRequestUrl({fileName, snippet, baseUrl, publishedAt}) {
  const year = publishedAt ? publishedAt.year() : 'NO_DATE';
  return `${baseUrl}new/develop/src/resources/${year}/resource?filename=${fileName}&value=${encodeURI(snippet)}`;
}

export function getFileName(data, withExtension = true) {
  return `${slugify(`${data.title} by ${data.author}`, {remove: /[$*_–—+,~.()'"#!?\-:@]/g}).toLowerCase()}${withExtension ? '.md' : ''}`;
};

export function getFileReference(data, withExtension = true) {
  return `${base64url(data.link)}${withExtension ? '.md' : ''}`
};

export function generateSnippet(data) {
  const body = Object.values(FIELD_NAMES).reduce((acc, key) => {
    const value = data[key];

    if(value) {
      const _value = fieldTransformers[key] ? fieldTransformers[key](value) : value;
      acc.push(`${key}: ${_value}`);
    }

    return acc;
  }, []).join('\n');

  return (
    `---
${body}
createdAt: ${new Date().toISOString()}
reference: ${getFileReference(data, false)}
slug: ${getFileName(data, false)}
---`);
};
