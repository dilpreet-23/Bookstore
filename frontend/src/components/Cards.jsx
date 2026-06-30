import React from 'react'

function Cards({ item }) {
  return (
    <div className="px-2 py-4">
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 transition duration-200 dark:bg-slate-900 dark:text-white dark:border">

        {/* Image */}
        <figure className="h-64 flex items-center justify-center p-2">
          <img
            src={item.image}
            alt="books"
            className="max-w-full max-h-full object-cover"
          />
        </figure>

        {/* Text Part */}
        <div className="card-body p-4 pb-10">

          <div>
            <div className="flex justify-between items-start gap-2">
              <h2 className="card-title text-2xl font-bold line-clamp-2">
                {item.name}
              </h2>

              <div className="badge badge-secondary whitespace-nowrap">
                {item.category}
              </div>
            </div>

            <p className="text-base mt-3 line-clamp-2 text-gray-600">
              {item.title}
            </p>
          </div>

          <div className="card-actions justify-between mt-2 mb-0">
            <div className="badge badge-outline px-3 py-3 text-base">
              ${item.price}
            </div>

            <button className="badge badge-outline px-4 py-3 rounded-full hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards