import React, { useState } from 'react'
import { CustomEditor } from '../Components/CustomEditor';
import styles from './styles.module.scss'

export const App = () => {
    const [editorContent, setEditorContent] = useState('Epic Markdown Editor Content')

    return (
        <div className={styles.app}>
            <div className={styles.editorWrapper}>
                <h2>Epic Markdown Editor</h2>
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
                        }
                    }
                />
            </div>
        </div>
    )
}