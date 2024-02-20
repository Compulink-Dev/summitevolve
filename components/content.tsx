import React from 'react'

function Content({ content }: { content: string | undefined }) {
    return (
        <p className={`text-sm text-gray-400`}>{content}</p>
    )
}

export default Content