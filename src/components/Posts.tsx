import { Post } from "../App"

interface Props {
    lists: Post[]
    loading: boolean
}

function Posts({ lists, loading }: Props) {

    if (loading) {
        return (

<div role="status" className="space-y-2.5 animate-pulse w-full mt-10">
    <div className="flex items-center w-full space-x-2">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div className="flex items-center w-full space-x-2 max-w-[400px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div className="flex items-center w-full space-x-2 max-w-[440px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
    <div className="flex items-center w-full space-x-2 max-w-[360px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>


        );
    }

    return (
        <ul className="w-full">
            {
                lists?.map(el => (
                    <div className="w-[100vw] flex flex-col mt-10">
                        <h1 className="mx-6 px-10 py-4 w-10/12 bg-amber-400 font-semibold text-4xl rounded-md ">Issue id : {el.id}</h1>
                        <li key={el.id * Math.random()} className="w-full flex flex-col">
                            <h3 className="mx-6 px-10 py-4 w-10/12 bg-orange-800 mt-5 text-4xl rounded-md "><span>Issue : </span>{el.title}</h3>
                            <div className="mx-6 w-10/12 px-10 bg-slate-400 rounded-2xl py-4 mt-5 break-all">{el.body}</div>
                        </li>
                    </div>
                ))
            }
        </ul>
    )
}

export default Posts