//@ts-ignore
export = null

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
//@ts-ignore
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
//@ts-ignore
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../../src/styles.css'
import Dropzone, {
  IDropzoneProps,
} from '../../src/Dropzone'

const Standard = () => {
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      multiple={false}
      parallelUploads={1}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  )
}


ReactDOM.render(<Standard />, document.getElementById('example-1'))