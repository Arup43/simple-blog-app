import React from 'react'

export default function Blog({src, tag, title, authorImgSrc, authorName, date, timeToRead, filterByTagHandler, filterByAuthorHandler}) {
    return (
        <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={src}
                    alt=""
                />
            </div>

            <div
                className="flex-1 bg-white p-6 flex flex-col justify-between"
            >
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span onClick={() => filterByTagHandler(tag)}
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200">
                            {tag}
                        </span>
                    </p>
                    <button href="#" className="block mt-1">
                        <p
                            className="text-xl font-semibold text-gray-900"
                        >
                            {title}
                        </p>
                    </button>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0 cursor-pointer">
                        <img onClick={() => filterByAuthorHandler(authorName)}
                            className="h-10 w-10 rounded-full"
                            src={authorImgSrc}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={() => filterByAuthorHandler(authorName)}
                        >
                            {authorName}
                        </p>
                        <div
                            className="flex space-x-1 text-sm text-gray-500"
                        >
                            <time dateTime="2020-03-16"
                            >{date}
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span> {timeToRead} min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
