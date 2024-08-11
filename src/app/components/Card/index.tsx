import React from 'react';

const Card = ({ onPost } : {
    onPost: () => void,
}) => {
    return (
        <div className="w-11/12 md:w-7/12 lg:w-4/12 mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create Post</h2>
            <textarea
                placeholder="How are you feeling today?"
                className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4 resize-none"
            ></textarea>
            <div className="flex justify-end">
                <button onClick={onPost} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Post
                </button>
            </div>
        </div>
    );
};

export default Card;
