import React, { useState } from 'react'

export default function GalleryGrid({ items = [] }) {
  const [selectedImage, setSelectedImage] = useState(null)

  // Key Changes: amber/rose -> saffron/maroon
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className="group relative aspect-square rounded-2xl overflow-hidden 
                     shadow-lg hover:shadow-2xl transition-all duration-500 
                     transform hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            {/* Image Container */}
            <div className="w-full h-full bg-gradient-to-br from-saffron/30 to-maroon/30 
                          flex items-center justify-center">
              {item.url ? (
                <img
                  src={item.url}
                  alt={item.title || 'Gallery image'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="text-4xl text-saffron">📸</div>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                          flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold text-sm mb-1">{item.title || 'Event Photo'}</h3>
                {/* Text color changed to match theme */}
                <p className="text-light-saffron text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category || 'Click to view'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full 
                         flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                ✕
              </button>
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div className="p-6">
                <h3 className="font-serif-traditional text-xl font-bold text-maroon mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}