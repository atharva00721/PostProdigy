import React from 'react'

type Props = {}

const CreatePost = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Create a new post</h3>
          <p className="text-sm text-muted-foreground">Fill in the details below to create your post</p>
        </div>
        <div className="p-6 pt-0">
          <p>Card content goes here</p>
        </div>
        <div className="flex items-center p-6 pt-0">
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Create post
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost