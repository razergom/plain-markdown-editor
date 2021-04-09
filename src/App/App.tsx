import React, { useState } from 'react'
import marked from 'marked'
import { CustomEditor } from '../Components/CustomEditor';
import styles from './styles.module.scss'

export const App = () => {
    const [editorContent, setEditorContent] = useState('')

    const generateMarkdownPreview = (markdownText: string) => ({ __html: marked(markdownText)})

    return (
        <div className={styles.app}>
            <div className={styles.editorWrapper}>
                <h2>Simple Markdown Editor</h2>
                <CustomEditor
                    value={editorContent}
                    onChange={setEditorContent}
                    editorClassName={styles.editorCustomStyles}
                    options={
                        {
                            lineWrapping: true,
                            lint: true,
                            mode: 'markdown',
                            lineNumbers: true,
                            spellcheck: true,
                        }
                    }
                />
            </div>
            <div className={styles.previewWrapper}>
                <h2>Simple Markdown Preview</h2>
                <div className={styles.preview} dangerouslySetInnerHTML={generateMarkdownPreview(editorContent)} />
            </div>
        </div>
    )
}