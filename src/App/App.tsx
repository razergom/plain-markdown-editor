import React from 'react'
import { Editor } from "../Components/Editor";
import styles from './styles.module.scss'

export const App = () => (
    <div className={styles.editorWrapper}>
        <h1>Epic Markdown Editor</h1>
        <Editor content={'qweqeqweqw'} onChangeContent={() => {}} />
    </div>
)