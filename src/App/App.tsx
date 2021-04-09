import React from 'react'
import { Editor } from "../Components/Editor";
import styles from './styles.module.scss'

export const App = () => (
    <div className={styles.editorWrapper}>
        <div>Epic Markdown Editor</div>
        <Editor />
    </div>
)