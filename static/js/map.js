const mapContainer = document.querySelector('#map')
const mapRegions = document.querySelectorAll('.map-region')

let activeTooltip = null // Keep track of the currently active tooltip

mapRegions.forEach(mapRegion => {
    const regionPath = mapRegion.querySelector('path')
    const matchID = '.location-tooltip#' + regionPath.id
    const regionTooltip = mapContainer.querySelector(matchID)

    // Ensure the tooltip exists
    if (!regionTooltip) {
        console.warn(`Tooltip not found for region with ID: ${regionPath.id}`)
        return
    }

    // Show the tooltip on click
    mapRegion.addEventListener('click', (event) => {
        event.stopPropagation() // Prevent the click from propagating to the document

        // Hide the currently active tooltip if it's not the same as the clicked one
        if (activeTooltip && activeTooltip !== regionTooltip) {
            activeTooltip.style.display = 'none'
        }

        // Toggle the visibility of the clicked tooltip
        if (regionTooltip.style.display === 'block') {
            regionTooltip.style.display = 'none'
            activeTooltip = null
        } else {
            regionTooltip.style.display = 'block'
            activeTooltip = regionTooltip
        }
    })
})

// Hide the tooltip when clicking anywhere else
document.addEventListener('click', () => {
    if (activeTooltip) {
        activeTooltip.style.display = 'none'
        activeTooltip = null
    }
})
