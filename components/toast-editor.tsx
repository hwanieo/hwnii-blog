'use client';

import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

export default function ToastEditor() {
  return (
    <Editor
      initialValue='hello react editor world!'
      previewStyle='vertical'
      height='95%'
      initialEditType='markdown'
      useCommandShortcut={false}
      hideModeSwitch={true}
      addImageBlobHook={true}
    />
  );
}
