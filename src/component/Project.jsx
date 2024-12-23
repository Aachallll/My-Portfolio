import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
            title="Blogging wrap" 
            main="kjsgcsugh,kiugckjschIUWKHHD kjgc"/>
             <ProjectCard 
            title="Youtube clone" 
            main="kjsgcsugh,kiugckjsc kjgc"/>
             <ProjectCard 
            title="Netflix clone" 
            main="kjsgcsugh,kiugckjschIUWKHHDkjgc"/>
        </div>
    </div>
  )
}

export default Project
