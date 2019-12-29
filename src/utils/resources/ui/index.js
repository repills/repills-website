import { ICON_PATHS } from '../../../components/Icon/Icon'
import types from '../../../config/types';

export const RESOURCE_ICON_TYPES = {
  [types.article.id]: ICON_PATHS.ARTICLE,
  [types.tutorial.id]: ICON_PATHS.TUTORIAL,
  [types.library.id]: ICON_PATHS.LIBRARY,
  [types.talk.id]: ICON_PATHS.TALK,
  [types.course.id]: ICON_PATHS.COURSE,
  [types.tool.id]: ICON_PATHS.TOOL,
  [types.book.id]: ICON_PATHS.BOOK,
  [types.video.id]: ICON_PATHS.VIDEO,
  [types.video_course.id]: ICON_PATHS.VIDEO,
  [types.video_talk.id]: ICON_PATHS.VIDEO,
  [types.video_tutorial.id]: ICON_PATHS.VIDEO,
}

export function getIconFromType(type) {
  const _type = type.join('_');
  return RESOURCE_ICON_TYPES[_type];
}
