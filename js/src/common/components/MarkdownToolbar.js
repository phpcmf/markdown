import Component from 'cmf/common/Component';

export default class MarkdownToolbar extends Component {
  view(vnode) {
    return <div className="MarkdownToolbar">{vnode.children}</div>;
  }
}
