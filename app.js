const packages = [
    {
        heavy: true,
        priority: false,
        fragile: false,
        to: 'Harrington',
        trackingNumber: '1324kjs'
    },
    {
        heavy: false,
        priority: true,
        fragile: true,
        to: 'Mark',
        trackingNumber: '1325sdk'
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Mick',
        trackingNumber: 'jffd147'
    },

    {
        heavy: false,
        priority: false,
        fragile: false,
        to: 'Jake',
        trackingNumber: 'acdc145'
    },
    {
        heavy: true,
        priority: true,
        fragile: true,
        to: 'Brittany',
        trackingNumber: 'NA'
    },
    {
        heavy: false,
        priority: true,
        fragile: false,
        to: 'Jonesy',
        trackingNumber: '8081baz'
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Justin',
        trackingNumber: 'suz2367'
    }
]

function draw() {
    let template = ''
    for (let i = 0; i < packages.length; i++) {
        let package = packages[i]
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
        // if (package.heavy) {
        //     template += `<li>Package Weight: Heavy </li>`
        // } else {
        //     template += '<li>Package Weight: Light </li>'
        // }
    }
    document.getElementById('pckge').innerHTML = template
}

function filterHeavy(heavy) {
    let heavyPckge = packages.filter(heavyPckge => heavyPckge.heavy == heavy)
    let template = ''
    for (let i = 0; i < heavyPckge.length; i++) {
        let package = heavyPckge[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

function filterPriority(priority) {
    let impPckge = packages.filter(impPckge => impPckge.priority == priority)
    let template = ''
    for (let i = 0; i < impPckge.length; i++) {
        let package = impPckge[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

function filterFragile(fragile) {
    let fragilePckge = packages.filter(fragilePckge => fragilePckge.fragile == fragile)
    let template = ''
    for (let i = 0; i < fragilePckge.length; i++) {
        let package = fragilePckge[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

// function random() {
//     let randomPckge = Object.keys(packages);
//     let random = randomPckge[Math.floor(Math.random() * randomPckge.length)];
//     let template = ''
//     template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
//     document.getElementById('pckge').innerHTML = template
// }


draw()
