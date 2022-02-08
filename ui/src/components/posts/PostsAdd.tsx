import React, { useState } from 'react';
import { Editor, Input } from 'components/custom';

import './PostsAdd.scss';

export const PostsAdd: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const onChagne = () => {
    const asdf = 0;
  };

  return (
    <div id="PostsAdd">
      <div className="title-area">
        <div className="title">Title</div>
        {/* title 부분 */}
        <Input className="title-input" value={title} onChange={setTitle} />
      </div>
      <div className="tag-area">
        {/* tag input ,로 구분 */}
        <div className="title">Tag</div>
        <Input className="tag-input" value={tag} onChange={setTag} />
      </div>
      <div className="info-area">
        <div className="title">Posts</div>
        <Editor text="asdfasdf" onChange={onChagne} />
      </div>
    </div>
  );
};
