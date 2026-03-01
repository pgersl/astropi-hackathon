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
    event.preventDefault() 
    event.stopPropagation()

    if (activeTooltip && activeTooltip !== regionTooltip) {
        activeTooltip.style.display = 'none'
    }

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
