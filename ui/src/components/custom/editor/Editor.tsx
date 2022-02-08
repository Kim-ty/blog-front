import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import './Editor.scss';

const mdParser = new MarkdownIt();

interface changeParam {
  text: string;
  html: string;
}

type UploadFunc = ((file: File) => Promise<string>) | ((file: File, callback: (url: string) => void) => void);

interface I_Props {
  text: string;
  onChange: () => void;
}

export const Editor: React.FC<I_Props> = ({ text, onChange }): JSX.Element => {
  const onChangeHandler = (data: changeParam, event?: React.ChangeEvent<HTMLTextAreaElement> | undefined): void => {
    // console.log(data, event);
    onChange();
  };

  const onCustomImageUpload = async (
    event: any
  ): Promise<{
    url: string;
    text?: string;
  }> => {
    console.log(event);

    return { url: 'asdf', text: 'asdfasdf' };
  };

  const handleImageUpload = (file: any, callback: any) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data: any) => {
        console.log(data.target.result);
        resolve('asdf');
        // resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const onImageUpload: UploadFunc = (file: File) => {
    console.log(file);

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data: any) => {
        console.log(data);
        console.log(data.target.result);
        resolve('asdf');
        // resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <MdEditor
      // onCustomImageUpload={onCustomImageUpload}
      onImageUpload={onImageUpload}
      defaultValue={text}
      renderHTML={(text) => mdParser.render(text)}
      onChange={onChangeHandler}
    />
  );
};
