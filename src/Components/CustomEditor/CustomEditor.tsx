import React from 'react'
import * as codemirror from 'codemirror';
import { Editor, EditorChange } from 'codemirror'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/mode/markdown/markdown'
import styles from './styles.module.scss'

type CustomEditorProps = {
    value: string
    onChange: (value: string) => void
    options?: codemirror.EditorConfiguration
    editorClassName?: string
}

export const CustomEditor = (props: CustomEditorProps) => {
    const { value, onChange, options, editorClassName } = props

    const handleChange = (editor: Editor, data: EditorChange, value: string) => {
        onChange(value)
    }

    return (
        <div className={styles.customEditor}>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                options={options}
                className={`${styles.editor} ${editorClassName ? editorClassName : ''}`}
            />
        </div>
    )
}