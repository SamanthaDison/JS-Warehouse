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

let random = packages[Math.floor(Math.random() * packages.length)]
console.log(random)
filtered = packages

function draw() {
    let template = ''
    for (let i = 0; i < filtered.length; i++) {
        let package = filtered[i]
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
    filtered = filtered.filter(heavyPckge => heavyPckge.heavy == random.heavy)
    let template = ''
    for (let i = 0; i < filtered.length; i++) {
        let package = filtered[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

function filterPriority(priority) {
    filtered = filtered.filter(impPckge => impPckge.priority == random.priority)
    let template = ''
    for (let i = 0; i < filtered.length; i++) {
        let package = filtered[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

function filterFragile(fragile) {
    filtered = filtered.filter(fragilePckge => fragilePckge.fragile == random.fragile)
    let template = ''
    for (let i = 0; i < filtered.length; i++) {
        let package = filtered[i];
        template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
    }
    document.getElementById('pckge').innerHTML = template
}

// function random() {
//     let random = packages[Math.floor(Math.random() * randomPckge.length)];
//     let template = ''
//     template += `<li>To: ${package.to} Tracking Number: ${package.trackingNumber}</li>`
//     document.getElementById('pckge').innerHTML = template
// }

function reset() {
    filtered = packages
    random = packages[Math.floor(Math.random() * packages.length)]
    console.log('new rando')
    draw()
}


draw()
