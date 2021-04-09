import React from 'react'
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/markdown/markdown'
import styles from './styles.module.scss'

type EditorProps = {
    content: string
    onChangeContent: (content: string) => void
}

export const Editor = (props: EditorProps) => {
    const { content, onChangeContent } = props

    return (
        <div className={styles.editor}>
            <ControlledEditor onBeforeChange={onChangeContent} value={content} />
        </div>
    )
}