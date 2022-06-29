export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('cestyle-scroll-lock', '');

  return tag;
}
