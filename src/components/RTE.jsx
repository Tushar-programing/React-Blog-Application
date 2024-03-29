import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control, label,
defaultValue =""}) {

  return (
    <div className='w-full'>
      {label && <label className='text-sm text-gray-600'>
        {label}</label>}

      <Controller 
      name={name || "content"}
      control={control}
      render={({field: {onchange}}) => (
        <Editor
        apiKey='lpn20xpt6qfp9wfmvz16w7lmjz3k0tgk7jh49pjw3bi3rr3m'
        initialValue={defaultValue}
        init={{
          initialValue: defaultValue,
          height: 500,
          menubar: true,
          plugins: [
            "image",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualbocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "anchor",
          ],
          toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help' 
        }}
        onEditorChange={onchange}
        />
      )}
      />

    </div>
  )
}

// < Editor 
    // initialValue='default value'                                we also cna use this but not a right way
    // init={
    //     {branding: false,
    //     height: 500,
    //     menubar: true,
    //     plugins: [
    //         'advlist autolink lists link image charmap print preview anchor',
    //         'searchreplace visualblocks code fullscreen',
    //         'insertdatetime media table paste code help wordcount'
    //     ],
    //     toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
    //     }
    // }
    // />