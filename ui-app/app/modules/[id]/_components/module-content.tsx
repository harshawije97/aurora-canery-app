"use client"

import ModuleContentWrapper from "./module-content-wrapper"

function ModuleContent() {
  return (
    <ModuleContentWrapper>
      {/* Video Placeholder Container */}
      <div className="flex h-120 w-full flex-col items-center justify-center rounded-2xl border border-transparent bg-[#F2F2F2] p-6 text-center">
        <h3 className="mb-2 text-2xl font-bold text-[#5C5C5C]/80">
          Video iFrame
        </h3>
        <p className="text-sm text-[#5C5C5C]">Iframe goes here</p>
      </div>

      {/* Lesson Information Section */}
      <div className="max-w-4xl space-y-3 pt-2">
        <p className="text-xs font-semibold tracking-wide text-[#222222]">
          Procurement
        </p>
        <h1 className="text-2xl font-bold text-[#222222]">
          Lesson 01: How to create new procurement entry
        </h1>
        <p className="pt-2 text-xs leading-relaxed text-[#5C5C5C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor
          est id lacus suscipit consectetur. Duis scelerisque euismod nulla eu
          semper. Praesent quis iaculis ex. Curabitur ornare a erat sollicitudin
          eleifend. Donec egestas blandit leo, id viverra neque bibendum at.
          Morbi sed erat sit amet nisl ultrices blandit nec sed massa. Nulla a
          porta risus. Cras orci sem, sodales vel tincidunt et, vestibulum ut
          ligula. Donec in viverra nulla. Ut feugiat convallis aliquam. Aenean
          sollicitudin, urna at consequat tristique, sem enim egestas orci
        </p>
      </div>
    </ModuleContentWrapper>
  )
}

export default ModuleContent
